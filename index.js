document.getElementById("share-icon").addEventListener("click", displayShare);

function displayShare(){

  var x = document.getElementById("share");
  x.classList.toggle("hidden");

  //not sure why this doesn't toggle visibility
  //would change to visible on click but not back to hidden
  //
  // x.style.visibility ="hidden" ? "visible" : "hidden";

}
