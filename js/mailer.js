var orangePhotography = orangePhotography || {};

(function  ($) {
	orangePhotography.mailer = (function  () {
		//var url = 'https://www.codolutions.com/mailermodule/send';
		//var url = 'https://codolutionsdev.azurewebsites.net/mailermodule/send';
		var url = 'http://localhost:3000/mailermodule/send';
		var sendfun = function  (from, to, subject, html, done, error) {
			var data = {
				to:to,
				subject:subject,
				html:html
			};
			$.ajax({
				type: "POST",
				url: url,
				data: data,
				success: done,
				error:error,
				dataType: 'json'
			});
		};
		return{
			send :sendfun
		};

	})();


	$(document).ready(function  () {
		var from = 'orange.photography.contact@gmail.com';
		//var to = 'orangephotography.info@gmail.com';
		var to = 'ara.mailbox@gmail.com';

		$("#contact-form").submit(function  () {
			orangePhotography.mailer.send(from, 
				to, 
				$('#subject').val(), 
				'A message from:' + $('#name').val() + '&lt;' + $('#email').val() + '&gt;<br/>' +  $('#message').val(),
				function  () {
					console.log('done');
				},
				function  () {
					console.log('error');
				})
			;
			event.preventDefault();
		});
	});

})(jQuery);