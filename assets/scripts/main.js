if (localStorage.getItem("theme") == "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
  $(".theme-toggle").attr("checked", "");
} else {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.removeItem("theme");
}
$(".theme-toggle").change(function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.removeItem("theme", "dark");
  }
});

$("#show-other-menu").click(function () {
  $(".other-menu").addClass("show");
});
$("#close-other-menu").click(function () {
  $(".other-menu").removeClass("show");
});

$("#hero-btn").click(function (e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
});
