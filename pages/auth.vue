<template>
  <div class="h-screen w-full bg-gray-50 flex items-center justify-center">
      <auth-form class="w-[50%]" @submit="login"/>
  </div>
</template>

<script>
export default {
  name: 'auth',
  methods: {
    async login (username) {
      const isValidUserName = await this.$store.dispatch('auth/login',username)
      if(isValidUserName){
        await this.$router.push('/')
        alert('Welcome!')
      }else{
        alert(`Not valid username :${username}`)
      }
    }
  },
}
</script>

<style scoped>

</style>
