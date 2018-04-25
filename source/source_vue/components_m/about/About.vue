<template>
    <div style="position: relative; width: 100vw; height: 100vh;">
        <Header :tabs="tabs" :index="index" />
        <main class="main">
            <AboutMe />
            <TechStack />
            <BooksSection />
        </main>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Header from './Header.vue';
import TechStack from './TechStack.vue';
import AboutMe from './AboutMe.vue';
import BooksSection from './BooksSection.vue';

import { TABS } from '../../store/bookData';

@Component({
    components: { Header, TechStack, BooksSection, AboutMe }
})
export default class About extends Vue {
    tabs: string[] = TABS;
    index: number = 3;
}
</script>

<style>
    .main { padding: 60px 10px; }
</style>
