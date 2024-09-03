let aboutContainer = document.querySelector(".about-container");
let btns = document.querySelectorAll(".tab-btn");
let contents = document.querySelectorAll(".content");

aboutContainer.addEventListener("click", function (e) {
  let id = e.target.dataset.id;

  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    contents.forEach(function (content) {
      content.classList.remove("active");
    });

    let element = document.getElementById(id);
    element.classList.add("active");
  }
});
