<template>
    <div class="flex w-full gap-[8px]">
      <input type="text" v-model="search" class="w-full bg-gray-50 placeholder:text-[1.12em] text-[1.12em] py-[13px] px-[12px] border border-border_primary placeholder:text-text_secondary focus:ring-offset-1 focus:ring-2 focus:outline-none focus:ring-primary">
      <div class="">
         <button @click.prevent="searchHandler" class="font-montserrat bg-primary block text-white hover:opacity-50 h-full px-[20px]">
           SEARCH
         </button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    searchHandler() {
      this.search.length ? this.$emit('search',this.search) : null
    }
  },
  watch:{
    search(val){
      if(val){
        this.$router.push({
          query:{
            q:this.search
          }
        })
        localStorage.setItem('q',val)
      }else{
        this.$router.push({
          query:{}
        })
        localStorage.removeItem('q')
      }
    },
  },
  created(){
    const q = localStorage.getItem('q')
    if(q){
      this.search = q
      this.$router.push({
        query:{
          q:this.search
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
