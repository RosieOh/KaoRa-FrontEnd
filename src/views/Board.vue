<template>
  <div class="board-page">
    <div class="container">
      <h2 class="text-center mb-4">게시판</h2>
      <board-list
        board-type="board"
        :items="posts"
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-change="handlePageChange"
        @search="handleSearch"
      />
    </div>
  </div>
</template>

<script>
import BoardList from '@/components/board/BoardList.vue'
import api from '@/services/api'

export default {
  name: 'Board',
  components: {
    BoardList
  },
  data() {
    return {
      posts: [],
      currentPage: 1,
      totalPages: 1,
      searchQuery: ''
    }
  },
  created() {
    this.fetchPosts()
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await api.posts.getPosts({
          page: this.currentPage,
          search: this.searchQuery
        })
        this.posts = response.data.content
        this.totalPages = response.data.totalPages
      } catch (error) {
        console.error('게시글 조회 실패:', error)
      }
    },
    handlePageChange(page) {
      this.currentPage = page
      this.fetchPosts()
    },
    handleSearch(query) {
      this.searchQuery = query
      this.currentPage = 1
      this.fetchPosts()
    }
  }
}
</script> 