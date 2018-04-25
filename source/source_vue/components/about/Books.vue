<template>
    <div>
        <Tags :tags="tags" :category="category" />
        <ul class="clearfix">
            <li v-for="book in books" :key="book.name" class="bookli">
                <a :href="book.link" target="_blank" class="booka">
                    <img :src="`img/${book.src}`" />
                    <p>{{book.name}}</p>
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
.bookli { float: left; margin: 5px; }
.booka { display: block; width: 220px; height: 250px; text-align: center; }
.booka:hover { color: gray; }
</style>
