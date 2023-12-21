import Cookies from 'js-cookie'

export  const signOut = () => {
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
  window.location.reload();
}