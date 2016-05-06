$(document).ready( function() {
	var root = 'http://jsonplaceholder.typicode.com';



	$("#check").click(function(){
		/*$.ajax({
		  url: root + '/posts/1',
		  method: 'GET'
		}).then(function(data) {
		  console.log(data);
		});*/
		alert("#ans").value);
		if ($("#ans").value == "199981"){
			alert("You are awesome!!! Click ok to get your surprise!");
			window.href="https://wizzair.com/ro-RO/FlightSearch";
		} else {
			$("#p").value = "Sorry, try again";
		}

	})
});