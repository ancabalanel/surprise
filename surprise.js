$(document).ready( function() {
	var root = 'http://jsonplaceholder.typicode.com';



	$("#check").click(function(){
		/*$.ajax({
		  url: root + '/posts/1',
		  method: 'GET'
		}).then(function(data) {
		  console.log(data);
		});*/

		if (isNaN($("#ans").val())) {
			alert("Dude...that's not a number.");
		}

		if ($("#ans").val() == "199981"){
			$("#error").text("");
			alert("You are awesome!!! Click ok to get your surprise!");
			window.location="https://wizzair.com/ro-RO/FlightSearch";
		} else {
			$("#error").text("Mai încearcă!");
		}

	})
});