var orangePhotography = orangePhotography || {};

(function  ($) {
	orangePhotography.mailer = (function  () {
		var url = 'https://www.codolutions.com/mailermodule/send';
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
			block();
			orangePhotography.mailer.send($('#subject').val(), 
				'A message from:' + $('#name').val() + '&lt;' + $('#email').val() + '&gt;<br/>' +  $('#message').val(),
				function  () {
					unblock();
					console.log('done');
				},
				function  () {
					unblock();
					console.log('error');
				})
			;
			event.preventDefault();
		});
	});

    var blockUI = document.createElement("div");
    blockUI.setAttribute("id", "blocker");
    blockUI.innerHTML = '<div>Sending...<img src="http://www.socialups.com/static/images/fbinventory/ajax_loader.gif"></div>';
    document.body.appendChild(blockUI);
    
    
    var cover = document.getElementById("blocker").style.display = "none";
    
    var btn = document.getElementById("bloc");
    
    btn.onclick = block;
    
    function block()
    {
        document.getElementById("blocker").style.display = "";
    }
    function unblock(){
        document.getElementById("blocker").style.display = "none";
    }

})(jQuery);