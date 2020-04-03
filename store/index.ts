import { createClient } from '~/plugins/contentful'
const client = createClient()

export const state = () => ({
  posts: []
})

export const getters = {}

export const mutations = {
  setPosts(state: { posts: any }, payload: any) {
    state.posts = payload
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
  }
}
