$(document).ready(function(){

	$("#submit").on("click", function(e){
		e.preventDefault();

		var dogRecord = {
			dogName: $("input[value='dog_name']").val().trim();,
			ownerName: $("input[value='owner_name']").val().trim(),
			dogComment: $("input[value='dog_comment']").val().trim(),
			dogPhoto: $("input[value='dog_photo_url']").val().trim()
		}

		console.log(dogRecord);

		$.post("/api/newDog", dogRecord,
	  			function(data){
	  				console.log(data);
	  			});

	});

});