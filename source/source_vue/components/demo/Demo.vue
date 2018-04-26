<template>
    <div>
        <Header :tabs="tabs" :index="index" />
        <div class="main">
            <DemoLists v-for="c in demoCategories" :key="c" :category="c" :lists="demoMap[c]"/>
        </div>
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
.main { margin: 0 25%; padding-top: 100px; }
</style>
