<template>
  <div class="rounded-[8px] font-montserrat bg-white shadow px-[20px] py-[15px]">
    <form class="flex flex-col gap-[10px]">
      <label class="text-[2em]" for="username">Username</label>
      <input maxlength="16" class="bg-gray-50 shadow focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-[1.12em] text-[1.12em] text-primary py-[12px] px-[20px]" id="username" v-model="username" type="text">
      <div class="error_message">{{error}}</div>
      <button :disabled="error" @click.prevent="submitHandler" class="font-montserrat bg-primary block text-white hover:opacity-50 h-full px-[20px] py-[10px]" :class="{'opacity-40 cursor-not-allowed':error}">
        {{ loading ? "Loading" : "GO"  }}
      </button>
    </form>
  </div>
</template>

<script>
import * as Promise from "bluebird";
export default {
  name: 'AuthForm',
  data () {
    return {
      username: '',
      error:'',
      loading:false,
      validationController:new AbortController()
    }
  },
  watch:{
    async username(val){
      if(this.loading){
        this.validationController.abort()
      }
      await this.validationHandler(val.split(' ').join(''))
    },
    loading(val){
      console.log(val)
    }
  },
  methods: {
    async validationHandler(token){
      try{
        this.loading = true
        const validationDone =  await this.validateToken(token)
        if(validationDone){
          this.error = ""
        }
      }catch (e) {
        this.error =  e
      }finally {
        this.loading = false
      }
    },
    submitHandler () {
      this.$emit('submit',this.username)
    },
    validateToken(token) {
      return new Promise((res,rej)=>{
        this.validationController.signal.addEventListener("abort", () => {
          res(false)
        });
        setTimeout(async ()=>{
          let lengthValid = token.length === 16
          let wordsValid =  /^[a-zA-Z\s.,]+$/.test(token)
          if(!lengthValid){
            rej("*The USERNAME's length should be 16-characters")
          }
          else if(!wordsValid && this.username !== ''){
            rej('*The USERNAME should not has any special characters, nor numbers or cyrillic symbols,latin symbols only!')
          }
          else res(true)
       },3000)
     })
    }
  },
}
</script>

<style scoped>

</style>
