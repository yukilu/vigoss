<template>
    <section class="demoSec">
        <h3 class="">{{category}}</h3>
        <ul>
            <li v-for="list in lists" :key="list.name" class="demoLi">
                <a :href="list.href" target="_blank" class="demoName">{{list.name}}</a>
                <a :href="list.sourceHref" target="_blank">[源码]</a>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        category: String,
        lists: Array
    }
})
export default class DemoLists extends Vue { }
</script>

<style>
.demoSec { margin-bottom: 15px; }
.demoLi { margin: 5px 0; }
.demoName { margin-right: 5px; }
</style>
