//VPN
var p = new Ping();
var loginme;
p.ping("https://vpn.deepfoods.net", function(err, data) {
  	if (err){
	console.log('err');
	  	window.location.replace($('#expanddiv li[data-id="logout"] a').attr('href'));
  	}
});
//VPN
