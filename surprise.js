$(document).ready( function() {
	var root = 'http://jsonplaceholder.typicode.com';


	$("#button1").click(function(){
		$.ajax({
		  url: root + '/posts/1',
		  method: 'GET'
		}).then(function(data) {
		  console.log(data);
		});
	})
});