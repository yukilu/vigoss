<template>
    <ul @click="handleClick" class="clearfix">
        <li v-for="tag in tags" :key="tag" :class="tag === currentTag ? 'tagLi active' : 'tagLi'">{{tag}}</li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        tags: Array,
        category: String
    }
})
export default class Tags extends Vue {
    get currentTag(): string {
        return this.$store.state.tags[this.$props.category];
    }
    handleClick(ev: MouseEvent) {
        const target = <HTMLElement>ev.target;
        if (ev && target.tagName === 'LI')
            this.$store.commit('changeTag', { category: this.$props.category, tag: target.innerHTML });
    }
}
</script>

<style>
    .tagLi { float: left; font-size: 13px; margin: 5px; padding: 2px 3px; cursor: pointer; border: 1px solid black; border-radius: 6px; }
    .tagLi:hover { background: #000; color: #FFF; }
    .active { background: #000; color: #FFF; }
</style>
