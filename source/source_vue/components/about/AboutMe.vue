<template>
    <section>
        <h3>关于我</h3>
        <p>个人博客: <a href="https://yukilu.github.io" target="_blank" class="me">https://yukilu.github.io</a></p>
        <p>Github: <a href="https://github.com/yukilu" target="_blank" class="me">https://github.com/yukilu</a></p>
        <p>熟悉的语言: HTML5 CSS3 JavaScript TypeScript</p>
        <p>了解的语言: C/C++ Java Python PHP Go Ruby</p>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class AboutMe extends Vue { }
</script>

<style>
.me { text-decoration: underline; }
</style>
