<template>
    <header class="tabs">
        <nav class="nav">
            <a v-for="(tab, i) in tabs" :key="tab" :href="i ? i === index ? '#' : `${tab.toLowerCase()}_mobile.html` : '/'"
                :class="i === index ? 'navA chosenA' : 'navA'">
                {{tab}}
            </a>
        </nav>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        tabs: Array,
        index: Number
    }
})
export default class Header extends Vue { }
</script>

<style lang="scss">
$fontColor: rgb(97, 218, 251);
$gbColor: rgb(32, 35, 42);
$aBgColor: rgb(55, 57, 64);
$navHeight: 40px;

.tabs { text-align: center; width: 100%; height: $navHeight; position: fixed;
    top: 0; left: 0; background: $gbColor; }
.nav { display: flex; height: $navHeight; padding: 0 20px; }
.navA { flex-grow: 1; height: $navHeight; line-height: $navHeight; color: #FFF; }
.chosenA { color: $fontColor; }
</style>
