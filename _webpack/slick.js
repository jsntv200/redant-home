import 'slick-carousel';

const init = $(function() {
  let $redant = $('.slick-redant');

  if ($redant.length) {
    $redant.slick({
      lazyLoad: 'ondemand',
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 7000,
      slidesToShow: 1,
    });
  }

  let $subscriptions = $('.slick-subscriptions');

  if ($subscriptions.length) {
    $subscriptions.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      centerMode: true,
      centerPadding: '25%',
      autoplay: true,
      infinite: true,
    });
  }
});

export default init;
