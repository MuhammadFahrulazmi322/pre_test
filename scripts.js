$(document).ready(function () {
  let currentIndex = 0;
  const images = $(".carousel img");
  const dots = $(".dot");

  function showImage(index) {
    const offset = -index * 300; // Sesuaikan ukuran gambar
    $(".carousel").css("transform", `translateX(${offset}px)`);
    dots.removeClass("bg-gray-900").addClass("bg-gray-400");
    dots.eq(index).removeClass("bg-gray-400").addClass("bg-gray-900");
  }

  dots.click(function () {
    currentIndex = $(this).index();
    showImage(currentIndex);
  });

  showImage(currentIndex);

  // Hamburger menu toggle
  $("#menu-btn").click(function () {
    $("#mobile-menu").toggleClass("hidden");
  });
});

const blogContainer = document.getElementById("blog-container");
let isDown = false;
let startX;
let scrollLeft;

blogContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  blogContainer.classList.add("active");
  startX = e.pageX - blogContainer.offsetLeft;
  scrollLeft = blogContainer.scrollLeft;
});

blogContainer.addEventListener("mouseleave", () => {
  isDown = false;
  blogContainer.classList.remove("active");
});

blogContainer.addEventListener("mouseup", () => {
  isDown = false;
  blogContainer.classList.remove("active");
});

blogContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - blogContainer.offsetLeft;
  const walk = (x - startX) * 2; // scroll-fast
  blogContainer.scrollLeft = scrollLeft - walk;
});
