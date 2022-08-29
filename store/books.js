export const state = () => ({
  books: []
})

export const mutations = {
  setBooks(state, booksList) {
    state.books = booksList
  },
}
export const actions = {
  async fetchBooks(ctx,searchStr){
    const { data : {items} } = await this.$axios.get('volumes',{
      params:{
        q:searchStr
      }
    })
    ctx.commit('setBooks',items)
  }
}

export const getters = {
  getFilteredBooksList(state){
    return state.books.map(b=>b.volumeInfo)
  }
}
