<template>
  <div class="container flex flex-col items-center justify-center">
    <div class="mb-8">
      This app shows your github public repositories.</br>
      If you don't have a github account: sign up <a target="_blank" href="https://github.com/join">here</a>
    </div>
    <div class="text-center">
      <button class="hover:bg-blue-700 flex items-center h-12 px-8 rounded bg-black text-white" @click="login">
        login with github
        <span v-if="spinner" class="ml-2">
          <Spinner />
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import { login } from '~/services/auth.js'
import Spinner from '~/components/Spinner.vue'

export default {
  middleware: 'authenticated',
  components: {
    Spinner
  },
  data: () => {
    return {
      spinner: false
    }
  },
  methods: {
    login () {
      const params = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: 'http://localhost:3000/login'
      }
      login(params)
      this.spinner = true
    }
  }
}
</script>

<style>
  a,
  a:visited {
    @apply text-blue-700;
  }
</style>
