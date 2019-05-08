
var flkty = new Flickity( '.carousel', {
  // options
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

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
