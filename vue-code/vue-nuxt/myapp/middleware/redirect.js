export default function ({
  isHMR,
  route,
  redirect
}) {
  if (isHMR) return
  if (route.fullPath == '/home') {
    return redirect('/home/nowplaying')
  }
}
