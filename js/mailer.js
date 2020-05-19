$(document).ready(function() {

	$("#form").submit(function() {

if ($(".form-items-name").val() == "" || $(".form-items-phone").val() == "" ) {
alert ("Заповніть поля");
} else 
	 var x = document.getElementById("snackbar");
         x.className = "show";
		 setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize()
		}).done(function() {
		$(this).find("input").val("");
				$("#form").trigger("reset");
		});
		return false;
	});
	
});

