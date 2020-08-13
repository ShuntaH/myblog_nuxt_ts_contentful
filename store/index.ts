import { Entry, EntryCollection } from 'contentful/index'
import { createClient } from '~/plugins/contentful'
const client = createClient()

export const state = () => ({
  loading: false, // ローディング中を表すstate
  posts: [],
  categories: [],
  series: []
})

export const getters = {
  categoryRelatedPosts: (state: any) => (category: string) => {
    const posts: Entry<any>[] = []
    // Using for is faster than filter()
    for (let i = 0; i < state.posts.length; i++) {
      const categoryStored = state.posts[i].fields.category.fields.name
      if (category === categoryStored) posts.push(state.posts[i])
    }
    return posts
  },
  seriesRelatedPosts: (state: any) => (series: string) => {
    return state.posts.filter(
      (post: Entry<any>) => post.fields.series.fields.name === series
    )
  }
}

export const mutations = {
  setLoading(state: { loading: boolean }, payload: any) {
    state.loading = payload
  },
  setPosts(state: { posts: EntryCollection<any> }, payload: any) {
    state.posts = payload
  },
  setCategories(state: { categories: EntryCollection<any> }, payload: any) {
    state.categories = payload
  },
  setSeries(state: { series: EntryCollection<any> }, payload: any) {
    state.series = payload
  }
}

// @ts-ignore
// @ts-ignore
export const actions = {
  // @ts-ignore
  async getPosts({ commit }) {
    await client
      .getEntries({
        content_type: process.env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
      .then((res: EntryCollection<unknown>) => commit('setPosts', res.items))
      .catch(console.error)
  },
  // @ts-ignore
  async getCategories({ commit }) {
    await client
      .getEntries({
        content_type: 'category',
        order: 'fields.sort'
      })
      .then((res: EntryCollection<unknown>) =>
        commit('setCategories', res.items)
      )
      .catch(console.error)
  },
  // @ts-ignore
  async getSeries({ commit }) {
    await client
      .getEntries({
        content_type: 'series',
        order: 'fields.sort'
      })
      .then((res: EntryCollection<unknown>) => commit('setSeries', res.items))
      .catch(console.error)
  }
}
