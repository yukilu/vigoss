&emsp;&emsp;Promise可以简化异步流畅，使回调地狱变成链式的回调，这里就来说一下Promise的实现方法

&emsp;&emsp;为了使代码类型清晰，这里选择了使用typescript来写，源码见[simplePromise.ts](https://github.com/yukilu/sourceCodeAnalysis/blob/master/myClass/simplePromise.ts)

## 类型定义

&emsp;&emsp;定义了new Promise(executor)中传入的executor的类型，以及成功/失败回调函数的类型

```ts
// executor函数类型，就是new Promise(executor)时用的
interface Executor<T> {
    (resolve: (value: T) => void, reject ?: (error: any) => void): void
}

// 成功回调函数类型，(v: T) => void，简单起见，无返回值
interface Fulfilled<T> {
    (value: T): void
}

// 失败回调函数类型，(e: any) => void，简单起见，无返回值
interface Rejected {
    (error: any): void
}
```

## 实例属性

&emsp;&emsp;cachedValue、cachedError为缓存决议时传入的值或错误用的

&emsp;&emsp;Promise实际上就是个有限状态机，其状态有两种，未决议和已决议，其中已决议又有成功和失败两种状态，所以应用到代码中state有3个值，PENDING、FULFILLED和REJECTED

&emsp;&emsp;cachedFulfilled、cachedRejected为缓存then中的fulfilled和rejected回调函数用的

```ts
// 泛型类，其中的T为resolve中传入的值的类型，error默认为any，所以不设定类型
class MyPromise<T> {
    // 缓存值
    private cachedValue: T;
    private cachedError: any;
    // Promise状态，初始为PENDING，决议后为FULFILLED或REJECTED
    private state: string = 'PENDING';
    // 成功及失败回调函数的缓存函数
    private cachedFulfilled: Fulfilled<T>;
    private cachedRejected: Rejected;

    constructor(executor :Executor<T>) { /*...*/ }

    // 最简单的then函数，即返回值不是个Promise
    simpleThen(this: MyPromise<T>, fulfilled: Fulfilled<T>, 
        rejected: Rejected) { /*...*/ }

    // 返回值为Promise
    then(this: MyPromise<T>, fulfilled: Fulfilled<T>, 
        rejected: Rejected): MyPromise<void> { /*...*/ }
}
```

## constructor

&emsp;&emsp;构造函数，使用时形如new Promise(function (resolve, reject) { ... })，传入的executor为一个函数，其参数为resolve和reject函数

&emsp;&emsp;resolve和reject函数是在Promise中已经定义好了的，其主要作用是改变Promise状态，缓存值，以及判断是否存在缓存函数，存在就调用

```ts
constructor(executor :Executor<T>) {
    const self: MyPromise<T> = this;
    executor(resolve, reject);

    // 自定义的resolve及reject函数
    function resolve(value: T) {
        self.state = 'FULFILLED';
        self.value = value;
        self.cachedFulfilled && self.cachedFulfilled(value);
    }

    function reject(error: any) {
        self.state = 'REJECTED';
        self.error = error;
        self.cachedRejected && self.cachedRejected(error);
    }
}
```

## simpleThen

&emsp;&emsp;Promise的实现难点就在于then函数，then函数怎么根据不同状态来处理对应的回调函数，实际就是executor函数中的决议函数先调用还是then中的回调函数先调用的问题，由于executor中成功决议函数resolve中可以传入一个Promise值，then中的成功回调函数也可以返回一个Promise值，为了说清楚原理，我们将这些情况都忽略，全部简化为resolve中就传一个普通值，then中的成功回调函数返回值为void

&emsp;&emsp;then的返回值也是个Promise，这样才可以进行链式调用，这里定义两个函数，simpleThen简化情况，返回值是void，而正常then函数复杂些返回值是Promise

&emsp;&emsp;当调用then函数时，若状态已决议，考察状态为FULFILLED时，即executor中的resolve决议函数先调用，then中的成功回调函数fulfilled后调用，这时候很简单，直接在resolve中将值缓存到cacheValue上，然后再调用成功回调函数时，将cachedValue值传入即可

&emsp;&emsp;当调用then函数时，若状态未决议，则状态为PENDING，这时候就复杂些，因为then中的成功和失败回调函数不会马上被调用，而是会在决议的时候才被调用，解决办法就是将两个回调函数缓存到cachedFulfilled及cachedRejected，然后在resolve或reject决议的时候调用即可

```ts
// 最简单的then函数，即返回值不是个Promise
simpleThen(this: MyPromise<T>, fulfilled: Fulfilled<T>, rejected: Rejected) {
    // 进行到then时，Promise已决议，就直接调用对应的成功/失败回调函数
    if (this.state === 'FULFILLED')
        fulfilled(this.value);
    else if (this.state === 'REJECTED')
        rejected(this.error);
    // 进行到then时，状态为未决议，则将成功/失败回调函数缓存到当前Promise实例的对应缓存函数上
    // 然后当调用决议函数的时候会一起调用这些缓存的函数
    else {
        this.cachedFulfilled = fulfilled;
        this.cachedRejected = rejected;
    }
}
```

## then

&emsp;&emsp;返回值为Promise，但由于fulfilled/rejected回调函数返回值为void，所以返回的Promise值中resovle传入的值也是void，因为这里是将fulfilled/rejected回调函数简化处理了，即其返回值为void，若其返回值存在或者为Promise，那then返回的Promise中resolve或reject也会接收到对应的值，这样就和真正的Promise一样了

&emsp;&emsp;分析不同状态时，进行到then时，当前Promise已决议，直接调用fulfilled/rejected回调函数，并返回一个已决议的Promise，传入then返回的Promise的resolve/reject的值为fulfilled/rejected的返回值(此处是void)

&emsp;&emsp;进行到then时，Promise未决议，这时就和上面一样，也需要返回一个Promise，所以在executor函数中，将fullfiled/rejected回调函数缓存到Promise上的缓存函数中，同时，在缓存函数中决议then返回的Promise，这样就当当前Promise决议时，resolve调用缓存函数，就会调用fulfilled回调函数，同时调用then返回的Promise中的resolve，引起其决议，这样最终就会形成当前Promise决议时，then返回的Promise也决议，形成了回调链

```ts
then(this: MyPromise<T>, fulfilled: Fulfilled<T>, rejected: Rejected): MyPromise<void> {
    // 进行到then时，Promise已决议
    if (this.state === 'FULFILLED')
        return new MyPromise<void>(resolve => {
            resolve(fulfilled(this.value));
        });
    if (this.state === 'REJECTED')
        return new MyPromise<void>(resolve => {
            resolve(rejected(this.error));
        });
    
    // 进行到then时，Promise未决议
    return new MyPromise<void>((resolve, reject) => {
        this.cachedFulfilled = (value: T) => {
            resolve(fulfilled(this.value));
        };
        this.cachedRejected = (error: any) => {
            reject(rejected(this.error));
        }
    });
}
```

&emsp;&emsp;总结起来说就是Promise的实现逻辑依赖于缓存及回调，当Promise先决议，后调用then中的回调函数时，就把值缓存起来，若Promise未决议，先调用then时，则把then中的回调函数缓存起来，当Promise决议时，再在resolve及reject中调用缓存的回调函数

&emsp;&emsp;更完整的实现见ImplementedByMyself中的MyPromise