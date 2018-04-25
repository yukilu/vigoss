<template>
    <article class="techStack">
        <header>
            <h3>本网站源码: </h3>
            <p><a href="https://github.com/yukilu/vigoss/tree/master/source" target="_blank">https://github.com/yukilu/vigoss</a></p>
        </header>
        <section class="techSec">
            <h3>开发语言(前后端): TypeScript</h3>
            <p>使用强类型的TypeScript代替弱类型的JavaScript，避免了弱类型语言的缺点，增加了开发效率</p>
        </section>
        <section class="techSec">
            <h3>构建工具: webpack</h3>
            <p>使用webpack来实现前端工程化，采用了模块化开发的方法，然后通过webpack来打包组件并构建项目</p>
        </section>
        <section class="techSec">
            <h3>前端技术栈: </h3>

            <h4 class="frontTech">Blog/Poem页: react + redux + styled-components + axios</h4>
            <p>技术要点:</p>
            <p>1. 使用tsx组件化开发，将TypeScript与react结合起来</p>
            <p>2. 使用redux托管状态</p>
            <p>3. 使用styled-components，可以把样式以类似原生css的方式写入组件</p>
            <p>4. 使用axios来与后台进行交互</p>

            <h4 class="frontTech">Demo/About页: vue + vuex + SCSS</h4>
            <p>技术要点:</p>
            <p>1. 使用vue单文件开发，在每个组件内都能写入模板，脚本及样式表，同时还结合了TypeScript及SCSS</p>
            <p>2. 使用vuex来管理状态</p>
            <p>3. 使用vue-class-component结合装饰器定义组件类</p>
        </section>
        <section class="techSec">
            <h3>后台技术栈: nginx + node + express + sqlite3</h3>
            <p>技术要点:</p>
            <p>1. 使用nginx来反向代理node，并处理静态文件</p>
            <p>2. 使用node.js作为后台处理网络请求，并使用express框架简化开发难度</p>
            <p>3. 使用sqlite3数据库，因为后台硬件资源有限，而该数据库小巧，无需配置，且无服务进程，消耗硬件资源少</p>
        </section>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TechStack extends Vue { }
</script>

<style lang="scss">
$marginTop: 15px;
.techStack { margin-top: $marginTop; }
.techSec { margin-top: $marginTop; }
.frontTech { margin-top: 8px; }
</style>
