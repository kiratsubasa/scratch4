import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import NewsPage from '@/views/NewsPage.vue'
import SectionPage from '@/components/ListView.vue'
import Article from '@/components/Article.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/section',
      component: NewsPage,
      children: [
        {
          path: ':PID',
          component: SectionPage,
        },
        {
          path: ':PID/page/:id',
          component: Article
        }
      ]
    },
    {
      path: '/page/:id',
      component: Article
    }
  ]
})
