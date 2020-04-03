// @ts-ignore
export default async ({ store }) => {
  if (!store.state.posts.length) await store.dispatch('getPosts')
  if (!store.state.categories.length) await store.dispatch('getCategories')
}
