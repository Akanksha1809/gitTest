var el_up = document.getElementById("UP");
		var el_down = document.getElementById("DOWN");
		el_up.innerHTML =
"Click on the button to scroll to the particular element.";

		function Run() {
        

            var el_up = document.getElementById("UP");
		var el_down = document.getElementById("DOWN");
			$(window).scrollTop($('#DOWN').position().top);
		}
    function change_col() { 
    
    document.getElementById("demo").style.background = "yellow";

}
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}