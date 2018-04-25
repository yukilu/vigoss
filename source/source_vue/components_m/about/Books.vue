<template>
    <div>
        <Tags :tags="tags" :category="category" />
        <ul class="clearfix">
            <li v-for="book in books" :key="book.name" class="bookli">
                <a :href="book.link" target="_blank" class="booka">
                    <img :src="`img/${book.src}`" class="bookImg" />
                    <p class="bookName">{{book.name}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Tags from './Tags.vue';

@Component({
    components: { Tags },
    props: {
        books: Array,
        tags: Array,
        category: String
    }
})
export default class Books extends Vue { }
</script>

<style>
.bookli { margin-top: 10px; }
.booka { display: flex; width: 100%; height: 100%; align-items: center; }
.bookImg { width: 40%; flex-basis: 40%; }
.bookName { flex-basis: 60%; }
</style>
