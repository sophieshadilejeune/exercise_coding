$(document).ready(function()
{
  $('.container').slick(
  {
    slidesToShow: 6,
    slidesToScroll: 1,
    slideTransition: 'linear',
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive:
    [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});
