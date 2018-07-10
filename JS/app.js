//Hide the Tachanka image
$('.Tachanka span').hide();
// When the button is pressed
$('.Tachanka button').click(function(){
  //Show the image of Tachanka
  $('.Tachanka span').show();
  //Hide the "Show Tachanka" button
  $('.Tachanka button').hide();
});
