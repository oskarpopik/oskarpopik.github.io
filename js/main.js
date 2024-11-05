// Toggle the navigation menu on small screens
document.getElementById("menu_toggle").addEventListener("click", function () {
  document.getElementById("nav_menu").classList.toggle("active");
});

// Toggle the additional information on the main after the animation is over
document
  .querySelector(".animation_container")
  .addEventListener("animationend", () => {
    document
      .querySelector(".information_element_container")
      .classList.add("information_element_visible");
    document
      .querySelector(".footer_menu_index")
      .classList.add("footer_menu_visible");
  });
