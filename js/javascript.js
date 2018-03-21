/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


$("#menuitem1").click(function () {

  $( "#menucontent1" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

$("#menuitem2").click(function () {

  $( "#menucontent2" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

$("#menuitem3").click(function () {

  $( "#menucontent3" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

$(function() {
  $('.undermenupunkt').hover(function() {
    $('.menuitem').css('background-color', 'white');
  }, function() {
    // on mouseout, reset the background colour
    $('.menuitem').css('background-color', '');
  });
});

$('#menuitem2').on('click', function () {
    $(this).toggleClass('menuitemactive')
});

$('#menuitem1').on('click', function () {
    $(this).toggleClass('menuitemactive')
});

$('#menuitem3').on('click', function () {
    $(this).toggleClass('menuitemactive')
});

$("#musikdrop").click(function(){
    $(".dropdownmusik").toggleClass("showthis");
});

$("#musikdrop").click(function(){
    $("#musikdrop").toggleClass("activedropdown");
});
