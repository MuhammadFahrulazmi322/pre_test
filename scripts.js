$(document).ready(function () {
    let currentIndex = 0;
    const images = $('.carousel img');
    const dots = $('.dot');
  
    function showImage(index) {
      const offset = -index * 150; // Sesuaikan ukuran gambar
      $('.carousel').css('transform', `translateX(${offset}px)`);
      dots.removeClass('bg-gray-900').addClass('bg-gray-400');
      dots.eq(index).removeClass('bg-gray-400').addClass('bg-gray-900');
    }
  
    dots.click(function () {
      currentIndex = $(this).index();
      showImage(currentIndex);
    });
  
    showImage(currentIndex);
  
    // Hamburger menu toggle
    $('#menu-btn').click(function () {
      $('#mobile-menu').toggleClass('hidden');
    });
  });
  