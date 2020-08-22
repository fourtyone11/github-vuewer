<template>
  <div class="container mx-auto">
    <div v-if="user" class="flex sm:flex-row flex-col justify-center">
      <div class="mr-8 w-1/6">
        <User :user="user" />
      </div>
      <div class="w-5/6 mt-6 sm:mt-0">
        <h3 class="mb-4 text-blue-600">
          Repositories
        </h3>
        <div v-if="repos.fetchReposStatus === 'LOADING'">
          <div class="mb-4">
            <Skeleton />
          </div>
          <div class="mb-4">
            <Skeleton />
          </div>
          <div class="mb-4">
            <Skeleton />
          </div>
          <div>
            <Skeleton />
          </div>
        </div>
        <ul v-else-if="repos.fetchReposStatus === 'SUCCESS'">
          <Repo v-for="repo in repos.repositoryList" :key="repo.id" :repo="repo" />
        </ul>
        <div v-else-if="repos.fetchReposStatus === 'ERROR'">
          something went wrong
        </div>
      </div>
    </div>
    <div v-else class="flex sm:flex-row flex-col justify-center">
      skeleton
      <div class="mr-8">
        <Skeleton />
      </div>
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import User from '~/components/User.vue'
import Repo from '~/components/Repo.vue'
import Skeleton from '~/components/Skeleton.vue'

export default {
  middleware: 'not-authenticated',
  components: {
    User,
    Repo,
    Skeleton
  },
  computed: mapState({
    user: state => state.auth.user,
    repos: state => state.repos
  }),
  mounted () {
    this.$store.dispatch('repos/fetchRepos')
  },
  methods: {
    gotologin () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
