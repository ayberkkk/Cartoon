var comments = $("#comments .owl-carousel");
comments.owlCarousel({
  items: 3,
  margin: 35,
  stagePadding: 0,
  smartSpeed: 450,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 3,
      edgePadding: 50,
      nav: true,
      loop: false,
    },
  },
});

var products = $("#products .owl-carousel");
products.owlCarousel({
  items: 4,
  margin: 35,
  stagePadding: 0,
  smartSpeed: 450,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
      stagePadding: 20
    },
    1000: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});

var blogs = $("#blogs .owl-carousel");
blogs.owlCarousel({
  items: 2,
  margin: 35,
  stagePadding: 0,
  smartSpeed: 450,
  autoplay: true,
  responsive: {
    0: {
      items: 2,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
      stagePadding: 20
    },
    1000: {
      items: 2,
      nav: true,
      loop: false,
      edgePadding:50,
    },
  },
});
