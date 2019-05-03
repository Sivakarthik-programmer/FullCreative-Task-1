// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  var x = document.forms["myform"]["fname"].value;
  if (x) {
    modal.style.display = "block";

  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// when user click on the field the placeholder text goes up
$(".form-group").focusin(function () {
  $(this).addClass("focus");
});
$("span").click(function () {
  $(this).parent(".input-hold").addClass("focus");
  $(this).parent(".input-hold").find("input").focus();
});

$(".form-group").focusout(function () {
  if ($(this).children("input").val()) {
    $(this).addClass("focus");
  } else {
    $(this).removeClass("focus");
  }
});













