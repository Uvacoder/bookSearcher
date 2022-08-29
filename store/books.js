export const state = () => ({
  books: []
})

export const mutations = {
  setBooks(state, booksList) {
    state.books.push(booksList)
  },
}
export const actions = {
  async getBooks(ctx,searchStr){
    await this.$axios.get('volumes',{
      params:{
        q:searchStr
      }
    })
  }
}
