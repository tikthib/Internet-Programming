function onLogout() {
  localStorage.setItem("is_login", "0");
  location.reload();
}
