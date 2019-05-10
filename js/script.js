(function() {
  //Mustache templates
  var templateCell = document.querySelector('#template-carousel-cell').innerHTML;
  var templateCarousel = document.querySelector('#template-carousel').innerHTML;
  var carouselContainer = document.querySelector('#carousel-container');

  var images = [
    {
      image: 'http://via.placeholder.com/400x200/aaeeff/000000?text=slide1',
      alt: 'Photo placeholder',
      title: 'lorem ipsum',
      description: 'dolor sit amet',
      id: '1'
    },
    {
      image: 'http://via.placeholder.com/400x200/058faa/000000?text=slide2',
      alt: 'Photo placeholder',
      title: 'lorem ipsum',
      description: 'dolor sit amet',
      id: '2'
    },
    {
      image: 'http://via.placeholder.com/400x200/1159fa/000000?text=slide3',
      alt: 'Photo placeholder',
      title: 'lorem ipsum',
      description: 'dolor sit amet',
      id: '3'
    },
    {
      image: 'http://via.placeholder.com/400x200/ffffaa/000000?text=slide4',
      alt: 'Photo placeholder',
      title: 'lorem ipsum',
      description: 'dolor sit amet',
      id: '4'
    },
    {
      image: 'http://via.placeholder.com/400x200/fafe01/000000?text=slide5',
      alt: 'Photo placeholder',
      title: 'lorem ipsum',
      description: 'dolor sit amet',
      id: '5'
    },
  ];

  Mustache.parse(templateCell);

  var carouselCells = '';

  for(var i = 0; i < images.length; i++) {
    carouselCells += Mustache.render(templateCell, images[i]);
  }

  var fullCarousel = Mustache.render(templateCarousel, {carouselItems: carouselCells});

  carouselContainer.insertAdjacentHTML('beforeend', fullCarousel);

  //Carousel spawn

  var flkty = new Flickity( '.carousel', {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    hash: true
  });

  flkty.select( 3, true, true );

  var buttonRestart = document.querySelector('.button-restart');
  buttonRestart.addEventListener('click', function(e) {
    flkty.select( 0 );
  });

  var progressBar = document.querySelector('.progress-bar')

  flkty.on('scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
  });

})();
