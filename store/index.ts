import { createClient } from '~/plugins/contentful'
const client = createClient()

export const state = () => ({
  posts: [],
  categories: []
})

export const getters = {
  relatedPosts: (state: any) => (category: any) => {
    const posts = []
    // Using for is faster than filter()
    for (let i = 0; i < state.posts.length; i++) {
      const categoryApi = state.posts[i].fields.category.fields.name
      if (category === categoryApi) posts.push(state.posts[i])
    }
    return posts
  }
}

export const mutations = {
  setPosts(state: { posts: any }, payload: any) {
    state.posts = payload
  },
  setCategories(state: { categories: any }, payload: any) {
    state.categories = payload
  }
}

export const actions = {
  // @ts-ignore
  async getPosts({ commit }) {
    await client
      .getEntries({
        content_type: process.env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
      .then((res: any) => commit('setPosts', res.items))
      .catch(console.error)
  },
  // @ts-ignore
  async getCategories({ commit }) {
    await client
      .getEntries({
        content_type: 'category',
        order: 'fields.sort'
      })
      .then((res: any) => commit('setCategories', res.items))
      .catch(console.error)
  }
}
