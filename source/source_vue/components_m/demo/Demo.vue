<template>
    <div>
        <Header :tabs="tabs" :index="index" />
        <main class="main">
            <DemoLists v-for="c in demoCategories" :key="c" :category="c" :lists="demoMap[c]"/>
        </main>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import DemoLists from './DemoLists.vue';
import Header from '../about/Header.vue';
import { DEMO_CATEGORIES, DEMO_MAP, DemoMap, TABS } from '../../store/demoData';

@Component({
    components: { DemoLists, Header }
})
export default class Demo extends Vue {
    tabs: string[] = TABS;
    index: number = 1;
    demoCategories: string[] = DEMO_CATEGORIES;
    demoMap: DemoMap = DEMO_MAP;
}
</script>

<style>
.main { margin-left: 10%; padding-top: 60px; }
</style>
