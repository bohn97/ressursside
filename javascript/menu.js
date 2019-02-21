document.getElementById("btnNavbar").addEventListener("click", toggleNavbar);
document.getElementById("btnDropdown").addEventListener("click", toggleDropdown);

/*navbar vises/skjules når meny-knapp trykkes*/
function toggleNavbar() {
  document.getElementById("navbar").classList.toggle("hiddenNavbar");
}

/*dropdown-artikler vises/skjules når dropdown-knapp trykkes*/
function toggleDropdown() {
  document.getElementById("dropdown-artikler").classList.toggle("hiddenDropdown");
}
