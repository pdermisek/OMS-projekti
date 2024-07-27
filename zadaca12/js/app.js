$(document).foundation()

$('#slika').hide();

$('#lando').click(function(){
    $('#slika').show();
    return false;
});

$('#glazba').hide();

$('#pjesma').click(function(){
    $('#glazba').show();
    return false;
});

$('#funny').hide();

$('#smijeh').click(function(){
    $('#funny').show();
    return false;
});

$('#itcrowd').hide();

$('#serija').click(function(){
    $('#itcrowd').show();
    return false;
});

$('#fend').hide();


$( "#clickme" ).on( "click", function() {
    $( "#fend" ).animate({
      opacity: 0.25,
      left: "+=50",
      height: "toggle"
    }, 5000, function() {
      // Animation complete.
    });
  });

  $('#misIznad').mouseenter(function(){

    $('.zadaca').css('border','5px solid blue');
});

$('#misIznad').mouseleave(function(){

    $('.zadaca').css('border','none');
});

