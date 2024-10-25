const submitButton = document.getElementById("cont_button");
const closeButton = document.getElementById("cont_button_close");

submitButton.addEventListener("click", function (openEvent) {
  /* The following 1 line of code was adapted from https://stackoverflow.com/questions/50193227/basic-react-form-submit-refreshes-entire-page?answertab=scoredesc#tab-top */
  openEvent.preventDefault(); // prevents default behavior of the form (refresh after clicking submit)
  document.getElementById("popup_container").style.display = "block";
  document.getElementById("contact_subpage").style.filter = "blur(3px)";
});

closeButton.addEventListener("click", function (closeEvent) {
  /* The following 1 line of code was adapted from https://www.freecodecamp.org/news/javascript-refresh-page-how-to-reload-a-page-in-js/ Accessed: 2023-11-23 */
  location.reload(true); // reloads the contact.html subpage with bypass of the cache
});
