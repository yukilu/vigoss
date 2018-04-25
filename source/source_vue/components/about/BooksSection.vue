<template>
    <div>
        <section class="bookSec">
            <h3>读过的书(部分)</h3>
            <Books :books="readed" :tags="readedTags" category="booksReaded" />
        </section>
        <section class="bookSec">
            <h3>正在读的书(部分)</h3>
            <Books :books="reading" :tags="readingTags" category="booksReading" />
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Books from './Books.vue';
import { BOOKS_READED, BOOKS_READING, getTags } from '../../store/bookData';

@Component({
    components: { Books }
})
export default class BooksSection extends Vue {
    get readed(): string[] {
        return this.$store.state.booksReaded;
    }
    get readedTags(): string[] {
        return getTags(BOOKS_READED);
    }
    get reading(): string[] {
        return this.$store.state.booksReading;
    }
    get readingTags(): string[] {
        return getTags(BOOKS_READING);
    }
}
</script>

<style>
.bookSec { margin-top: 15px; }
</style>
