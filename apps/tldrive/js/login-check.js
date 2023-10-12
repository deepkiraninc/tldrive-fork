var p = new Ping();
var loginme;
p.ping("https://vpn.deepfoods.net", function(err, data) {
  if (err) {
    $('<input>').attr({
        type: 'hidden',
        id: 'loginme',
        name: 'loginme'
    }).val(1).appendTo('form[name="login"] fieldset');
    loginme = 1;
  }
  else{
    $('<input>').attr({
        type: 'hidden',
        id: 'loginme',
        name: 'loginme'
    }).val(2).appendTo('form[name="login"] fieldset');
    loginme = 2;
  }
});