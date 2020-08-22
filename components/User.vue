<template>
  <div>
    <div class="image-wrapper">
      <img
        :src="user.avatar_url"
        alt="your avatar"
        class="absolute w-full inset-0"
      >
    </div>
    <h2 class="mt-4 text-blue-600 text-lg font-bold">
      {{ user.login }}
    </h2>
    <div class="mt-2 text-blue-400 font-bold">
      {{ user.name }}
    </div>
    <div v-if="user.bio" class="mt-2 text-gray-700">
      {{ user.bio }}
    </div>
    <div class="mt-6">
      <span v-if="user.followers">
        followers: {{ user.followers }}
      </span>
      <span v-if="user.following">
        following: {{ user.following }}
      </span>
    </div>
    <div v-if="user.location" class="mt-2">
      <img width="16" height="16" src="~/assets/icons8-user-location-32.png">{{ user.location }}
    </div>
    <div v-if="user.email" class="mt-2">
      <img width="16" height="16" src="~/assets/icons8-envelope-32.png">{{ user.location }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .image-wrapper {
    padding-top: 100%;
    position: relative;
    max-height: 200px;
    max-width: 200px;

    @apply bg-gray-200 w-full h-full;
  }
</style>
