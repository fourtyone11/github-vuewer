<template>
  <li
    :key="repo.id"
    class="flex first:mt-0 mt-4 border border-gray-600 rounded hover:border-blue-600"
  >
    <div class="w-full p-4">
      <h2 class="text-lg font-bold">
        {{ repo.name }}
      </h2>
      <div class="mt-2 text-gray-800">
        {{ repo.description }}
      </div>
      <div class="text-sm mt-4">
        <span
          v-if="repo.language"
          class="mr-4"
        ><span class="bg-green-300 px-2 py-1">{{ repo.language }}</span></span>
        <span
          v-if="repo.forks"
          class="font-mono mr-4"
        >
          <img
            class="inline-block"
            width="16"
            height="16"
            alt="forks"
            src="~/assets/icons8-code-fork-32.png"
          ><span>{{ repo.forks }}</span>
        </span>
        <span
          v-if="repo.forks"
          class="font-mono"
        >
          <img
            class="inline-block"
            width="16"
            height="16"
            alt="forks"
            src="~/assets/icons8-star-32.png"
          ><span class="align-bottom leading-1">{{ repo.stargazers_count }}</span>
        </span>
      </div>
    </div>
  </li>
</template>

<style>
img {
  max-height: 200px;
}
</style>

<script>
export default {
  props: {
    repo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
