$(document).ready(function(){

	$("#submit").on("click", function(e){
		e.preventDefault();

		var dogRecord = {
			dogName: $("input[name='dog_name']").val().trim(),
			ownerName: $("input[name='owner_name']").val().trim(),
			dogComment: $("input[name='dog_comment']").val().trim(),
			dogPhoto: $("input[name='dog_photo_url']").val().trim()
		}

		console.log(dogRecord);

		$.post("/api/newDog", dogRecord,
	  			function(data){
	  				console.log(data);
	  			});

	});

});