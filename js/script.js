const ButtonToggle = document.getElementById( 'checkbox' );

ButtonToggle.addEventListener( 'click', changeStyle );

function changeStyle () {
  document.body.classList.toggle( 'light-mode' )
}