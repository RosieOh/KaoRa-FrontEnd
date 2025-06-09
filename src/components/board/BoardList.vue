<template>
  <div class="board-list">
    <div class="table-responsive">
      <table class="table align-items-center table-flush">
        <thead class="thead-light">
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
            <th scope="col">작성일</th>
            <th scope="col">조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.id }}</td>
            <td>
              <router-link :to="`/${boardType}/${item.id}`">
                {{ item.title }}
              </router-link>
            </td>
            <td>{{ item.author }}</td>
            <td>{{ formatDate(item.createdAt) }}</td>
            <td>{{ item.views }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- 페이지네이션 -->
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">이전</a>
        </li>
        <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">다음</a>
        </li>
      </ul>
    </nav>

    <!-- 검색 및 글쓰기 버튼 -->
    <div class="d-flex justify-content-between align-items-center mt-4">
      <div class="search-box">
        <base-input
          v-model="searchQuery"
          placeholder="검색어를 입력하세요"
          @keyup.enter="search"
        >
          <template #append>
            <base-button type="primary" @click="search">검색</base-button>
          </template>
        </base-input>
      </div>
      <base-button type="primary" @click="$router.push(`/${boardType}/write`)">
        글쓰기
      </base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardList',
  props: {
    boardType: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString()
    },
    changePage(page) {
      if (page < 1 || page > this.totalPages) return
      this.$emit('page-change', page)
    },
    search() {
      this.$emit('search', this.searchQuery)
    }
  }
}
</script>

<style scoped>
.board-list {
  margin: 2rem 0;
}
.search-box {
  width: 300px;
}
</style> 