<template>
  <header class="w-full flex justify-between items-center mx-auto">
    <div class="mx-auto text-center p-4 text-green-500 font-bold">
      GITHUB VUEWER
    </div>
    <button v-if="$store.state.auth.user" class="hover:bg-gray-200 rounded px-4 py-1" @click.prevent="logout">
      logout
    </button>
  </header>
</template>

<script>
import { logout as authLogout } from '../services/auth.js'
export default {
  methods: {
    async logout () {
      await authLogout(this)
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    }
  }
}
</script>
