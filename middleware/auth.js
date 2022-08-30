export default function ({ store, redirect }) {
  if (store.getters['auth/getUserAuth'] === false) {
    return redirect('/auth')
  }
}
