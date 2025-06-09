<template>
  <div class="faq-page">
    <div class="container">
      <h2 class="text-center mb-4">자주 묻는 질문</h2>
      <div class="accordion" id="faqAccordion">
        <div v-for="(item, index) in faqs" :key="index" class="card">
          <div class="card-header" :id="'heading' + index">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left"
                type="button"
                data-toggle="collapse"
                :data-target="'#collapse' + index"
                :aria-expanded="index === 0"
                :aria-controls="'collapse' + index"
              >
                {{ item.question }}
              </button>
            </h2>
          </div>
          <div
            :id="'collapse' + index"
            class="collapse"
            :class="{ show: index === 0 }"
            :aria-labelledby="'heading' + index"
            data-parent="#faqAccordion"
          >
            <div class="card-body">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'Faq',
  data() {
    return {
      faqs: []
    }
  },
  created() {
    this.fetchFaqs()
  },
  methods: {
    async fetchFaqs() {
      try {
        const response = await api.posts.getPosts({
          type: 'faq'
        })
        this.faqs = response.data
      } catch (error) {
        console.error('FAQ 조회 실패:', error)
      }
    }
  }
}
</script>

<style scoped>
.faq-page {
  margin: 2rem 0;
}
.card-header {
  background-color: #f8f9fe;
}
.btn-link {
  color: #5e72e4;
  text-decoration: none;
}
.btn-link:hover {
  color: #233dd2;
  text-decoration: none;
}
.card-body {
  background-color: #fff;
}
</style> 