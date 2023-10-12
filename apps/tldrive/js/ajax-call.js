//document.getElementById("myForm").submit();

//$(document).ready(function() {
document.addEventListener("DOMContentLoaded", () => {

	var p = new Ping();
	p.ping("https://vpn.deepfoods.net", function(err, data) {

		if (err) {
		  	//$('#loginme').val(1);
			  document.getElementById("loginme").val(1);
		} else {
		  	//$('#loginme').val(2);
			document.getElementById("loginme").val(2);
		}

		document.getElementById("myForm").submit();
		//$('#myForm').submit();
	});

});
