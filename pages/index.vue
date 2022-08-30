<template>
  <div class="section_wrapper">
    <search-bar class="mt-[30px]" @search="searchBooks"/>
    <book-table v-if="!loading && !error" :table-body="booksList"/>
    <loading v-if="loading"/>
    <p v-if="error" class="error_message">{{error}}</p>
  </div>
</template>

<script>
import SearchBar from '~/components/SearchBar'


export default {
  middleware: 'auth',
  name: 'IndexPage',
  components: { SearchBar },
  data () {
    return {
      loading: true,
      error:''
    }
  },
  methods: {
    async searchBooks (searchText) {
      try {
        this.loading = true
        await this.$store.dispatch('books/fetchBooks',searchText)
      } catch (e) {
        this.error = e
      } finally {
        this.loading = false
      }
    }
  },
  computed:{
    booksList(){
      return this.$store.getters['books/getFilteredBooksList']
    }
  }
}
</script>
