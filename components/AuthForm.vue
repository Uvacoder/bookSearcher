<template>
  <div class="rounded-[8px] font-montserrat bg-white shadow px-[20px] py-[15px]">
    <div class="flex flex-col gap-[10px]">
      <label class="text-[2em]" for="username">Username</label>
      <input maxlength="16" class="bg-gray-50 shadow focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-[1.12em] text-[1.12em] text-primary py-[12px] px-[20px]" id="username" v-model="username" type="text">
      <div class="error_message">{{error}}</div>
      <button :disabled="error" @click.prevent="submitHandler" class="font-montserrat bg-primary block text-white hover:opacity-50 h-full px-[20px] py-[10px]" :class="{'opacity-40 cursor-not-allowed':error}">
        {{ loading ? "Loading" : "GO"  }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthForm',
  data () {
    return {
      username: '',
      error:'',
      loading:false
    }
  },
  watch:{
    async username(token){
      await this.validateToken(token)
      this.loading = false
    },
    loading(val){
      console.log(val)
    }
  },
  methods: {
    submitHandler () {
      this.$emit('submit',this.login)
    },
    checkTokenForLength(token){
      const valid = token.length === 16
      if(!valid){
        this.error = "*The USERNAME's length should be 16-characters"
      }else{
        this.error = ''
      }
    },
    checkTokenForLatinCharacters(token){
      const valid =  /^[a-zA-Z\s.,]+$/.test(token)
      if(!valid && this.username !== ''){
        this.error = '*The USERNAME should not has any special characters, nor numbers or cyrillic symbols,latin symbols only!'
      }else{
        this.error = ''
      }
    },
    validateToken (token) {
     return new Promise((res,rej)=>{
       this.loading = true
       setTimeout(()=>{
         this.checkTokenForLatinCharacters(token)
         this.checkTokenForLength(token)
         res()
       },3000)
     })
    }
  },
}
</script>

<style scoped>

</style>
