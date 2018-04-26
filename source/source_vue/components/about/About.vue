<template>
    <div>
        <Header :tabs="tabs" :index="index" />
        <div class="main">
            <AboutMe />
            <TechStack />
            <BooksSection />
        </div>
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
    .main { margin: 0 10%; padding-top: 100px; }
</style>
