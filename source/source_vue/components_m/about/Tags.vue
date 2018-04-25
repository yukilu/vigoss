<template>
    <ul @click="handleClick" class="tags">
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
    .tags { display: flex; flex-wrap: wrap; }
    .tagLi { font-size: 13px; margin: 3px; padding: 2px 3px; cursor: pointer; border: 1px solid black; border-radius: 6px; }
    .active { background: #000; color: #FFF; }
</style>
