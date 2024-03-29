import { Entry, EntryCollection, EntrySkeletonType } from 'contentful'
import { createClient } from '~/plugins/contentful'
const client = createClient()

export const state = () => ({
  loading: false, // ローディング中を表すstate
  posts: [],
  series: []
})

export const getters = {
  seriesRelatedPosts: (state: any) => (series: string) => {
    return state.posts.filter(
      // @ts-ignore
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
  setSeries(state: { series: EntryCollection<any> }, payload: any) {
    state.series = payload
  }
}

// @ts-ignore
export const actions = {
  // @ts-ignore
  async getPosts({ commit }) {

    await client
      .getEntries({
        // @ts-ignore
        content_type: process.env.CTF_BLOG_POST_TYPE_ID,
        // @ts-ignore
        order: '-sys.createdAt'
      })
      .then((res: EntryCollection<EntrySkeletonType>) =>
        commit('setPosts', res.items)
      )
      .catch(console.error)
  },
  // @ts-ignore
  async getSeries({ commit }) {
    await client
      .getEntries({
        content_type: 'series',
        // @ts-ignore
        order: 'fields.sort'
      })
      .then((res: EntryCollection<EntrySkeletonType>) =>
        commit('setSeries', res.items)
      )
      .catch(console.error)
  }
}
