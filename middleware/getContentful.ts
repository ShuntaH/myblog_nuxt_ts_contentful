// @ts-ignore
export default async ({ store }) => {
  if (!store.state.posts.length) await store.dispatch('getPosts')
  if (!store.state.series.length) await store.dispatch('getSeries')
}
