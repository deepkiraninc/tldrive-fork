/**
 * Copyright (c) 2015
 *  Vincent Petry <pvince81@owncloud.com>
 *  Jan-Christoph Borchardt, http://jancborchardt.net
 * This file is licensed under the Affero General Public License version 3 or later.
 * See the COPYING-README file.
 */

/**
 * @namespace
 * @memberOf OC
 * @private
 */
OC.Login = _.extend(OC.Login || {}, {
	onLogin: function () {
		// Only if password reset form is not active
		if($('form[name=login][action]').length === 0) {
			$('#submit-wrapper .submit-icon')
				.removeClass('icon-confirm-white')
				.addClass(OCA.Theming && OCA.Theming.inverted
					? 'icon-loading-small'
					: 'icon-loading-small-dark');
			$('#submit')
				.attr('value', t('core', 'Logging in …'));
			$('.login-additional').fadeOut();
			return true;
		}
		return false;
	},

	rememberLogin: function(){
		if($(this).is(":checked")){
			if($("#user").val() && $("#password").val()) {
				$('#submit').trigger('click');
			}
		}
	}
});

$(document).ready(function() {
	//$('form[name=login]').submit(OC.Login.onLogin);

	$("form[name=login]").on("submit", function (e) {
		//OC.Login.onLogin;
        e.preventDefault();//stop submit event
        var self = $(this);//this form
        //VPN
		var p = new Ping();
		p.ping("https://vpn.deepfoods.net", function(err, data) {
		  	if (err)
			  	$('#loginme').val(1);
		  	else
			  	$('#loginme').val(2);

			$('#submit').trigger('click');
		});
		//VPN
        $("form[name=login]").off("submit");//need form submit event off.
        self.submit(OC.Login.onLogin);//submit form

    });
    
	$('#remember_login').click(OC.Login.rememberLogin);

	var clearParamRegex = new RegExp('clear=1');
	if (clearParamRegex.test(window.location.href)) {
		window.localStorage.clear();
		window.sessionStorage.clear();
	}
});
