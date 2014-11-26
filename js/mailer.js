var orangePhotography = orangePhotography || {};

(function  ($) {
	orangePhotography.mailer = (function  () {
		//var url = 'https://www.codolutions.com/mailermodule/send';
		//var url = 'https://codolutionsdev.azurewebsites.net/mailermodule/send';
		var url = 'http://localhost:3000/mailermodule/send';
		var sendfun = function  (subject, html, done, error) {
			var data = {
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

		$("#contact-form").submit(function  () {
			orangePhotography.mailer.send($('#subject').val(), 
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