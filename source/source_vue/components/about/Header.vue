<template>
    <header class="tabs">
        <nav class="nav">
            <a v-for="(tab, i) in tabs" :key="tab" :href="i ? i === index ? '#' : `${tab.toLowerCase()}.html` : '/'"
                :class="i === index ? 'navA chosenA' : 'navA'">
                {{tab}}
                <span v-if="i === index" class="chosen"></span>
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
$navHeight: 60px;

.tabs { text-align: center; width: 80%; height: $navHeight; position: fixed; top: 0; left: 0;
    padding-left: 20%; background: $gbColor; }
.nav { height: $navHeight; }
.navA { float: left; width: 8%; height: $navHeight; line-height: $navHeight;
    color: #FFF; position: relative; cursor: pointer; }
.navA:hover { color: $fontColor; }
.chosenA { color: $fontColor; background: $aBgColor; }
.chosen { width: 100%; height: 3px; background: $fontColor;
    position: absolute; left: 0; bottom: 0; }
</style>
