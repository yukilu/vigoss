&emsp;&emsp;simpleRedux的加强版，加入了中间件功能，引入了applyMiddleware和compose函数

&emsp;&emsp;combineReducer和createReducer函数由于相同，此处就省略了

## createStore
---

> 较之为实现中间件功能的函数，多引入了一个enhancer参数，这个参数是由applyMiddleware函数生成的，其值也是个函数，所以redux中用到了很多函数式编程的思想，中间件功能就是一个有力的体现

> 框架源码及分析见[createStore.js](https://github.com/yukilu/sourceCodeAnalysis/blob/master/redux/createStore.js)

```js
const ActionTypes = { INIT: '@@redux/INIT' };

export function createStore(reducer, preloadedState, enhancer) {
    // 只传了两个参数的情况，createStore(reducer, applyMiddleware(...))，校正参数
    if (typeof preloadedState === 'function') {
        enhancer = preloadedState;
        preloadedState = undefined;
    }

    let state = preloadedState;
    let listeners = [];

    const store = {
        subscribe : function (listener) {
            if (typeof listener !== 'function')
                return;
            listeners.push(listener);
            
            let isCleared = false;
            return function () {
                if (isCleared)
                    return;
                isCleared = true;

                for (let i = 0; i < listeners.length; i++)
                    if (listeners[i] === listener) {
                        listeners.splice(i, 1);
                        break;
                    }
            };
        },

        getState: function () {
            return state;
        },

        dispatch: function (action) {
            state = reducer(state, action);
            listeners.forEach(f => f());

            return action;
        }
    };

    store.dispatch({ type: ActionTypes.INIT });  // 初始化state值

    
    /* 当enhancer存在时，即传了中间件，就返回加强版store
     * 源码中将这些判断放在最上面，所以只能传入createStore, reducer, preloadedState来创建store，
     * 这里将判断放到下面来，就可以直接传入store，同时简化了enhancer的逻辑，与源码相比少了函数式的两层，
     * enhancer直接返回dispatch加强后的store */
    if (typeof enhancer !== 'undefined')  
        return enhancer(store);

    return store;
}
```

## applyMiddleware
---

> 用函数式编程的思想，生成了一个加载了中间件的函数，本质上其实是将中间件多用了一层函数缓存罢了，我觉得函数式编程的思想本质就是通过函数的参数来缓存变量

> 框架源码及分析见[applyMiddleware.js](https://github.com/yukilu/sourceCodeAnalysis/blob/master/redux/applyMiddleware.js)

```js
export function applyMiddleware(...middlewares) {
    return function (store) {
        // 不用赋初值，下面代码总会给一个值，像源码那样给dispatch = store.dispatch，反倒会对dispatch的
        // 真正的值迷惑
        let dispatch, chain;

        const middlewareAPI = {
            getState: store.getState,
            /* 关于这里不写成dispatch: dispatch，如果这样写了，dispatch的值就写死了，若上面的dispatch = 
             * store.dispatch，则这个对象的dispatch一直就是store.dispatch，这样在中间件中调用dispatch时就是
             * 未加强的dispatch，无法发挥中间件作用了，若像这里未赋值，直接就报错了，这个问题可以简化为
             * let a = 0; const o = { a: a }; a = 1; console.log(o.a);  应该是0，而不是1
             * 因为创建o时，键名是字符串'a'，键值是变量a的值，即0，而不是变量a，键值只能是个具体的值，
             * 不可能是个变量，所以全局变量a不管怎么变，o.a的值只是创建o的时候，a的值，而不是变量a */
            dispatch: action => dispatch(action)
        };

        chain = middlewares.map(middleware => middleware(middlewareAPI));

        dispatch = compose(...chain)(store.dispatch);

        return { ...store, dispatch };
    }
}
```

## compose
---

> compose函数的功能和实现其实非常简单，即假设有f,g,h函数，要实现 f(g(h(argument)))，则可以通过compose函数，composed_f = compose(f,g,g)，则composed_f(argument)就等同于f(g(h(argument)))，实现逻辑见以下代码

> 框架源码及分析见[compose.js](https://github.com/yukilu/sourceCodeAnalysis/blob/master/redux/compose.js)

```js
function compose(...funcs) {
    if (funcs.length === 0)
        return arg => arg;

    if (funcs.length === 1)
        return funcs[0];

    const last = funcs[funcs.length - 1];
    const rest = funcs.slice(0, -1);

    return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args));
}
```