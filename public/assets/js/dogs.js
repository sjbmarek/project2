$(document).ready(function(){
	var dogId = 0;

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
					  console.log("we are hitting it");
	  				console.log(data);
				  });
				//   location.reload();

	});

// 	$("#comoSubmit").on("click", function(e) {
//     e.preventDefault();
// 	console.log("This was clicked");
//     var dogLocation = {
// 		parkName: "Como Dog Park",
// 		dogId: 1
// 	}

// 	console.log("this is location");
// 	console.log(dogLocation);

// 		$.post("/api/como/:id", dogLocation, function(data) {
// 	  console.log(data);
// 	  console.log("now are hitting como submit");
//     });
//     // location.reload();
//   });

	$("#comoSubmit").on("click", function (e) {
		e.preventDefault();
		console.log("this has been clicked");

		var id = dogId;
		var dogLocation = {
			parkName: "Como Dog Park"
		};

		// Send the PUT request.
		$.ajax("/api/como/" + id, {
			type: "PUT",
			data: dogLocation
		}).then(
			function () {
				console.log("we are here too");
			}
		);
	});


	$("#minnehahaSubmit").on("click", function (e) {
		e.preventDefault();
		console.log("this has been clicked");

		var id = dogId;
		var dogLocation = {
			parkName: "Minnehaha Dog Park"
		};

		// Send the PUT request.
		$.ajax("/api/minnehaha/" + id, {
			type: "PUT",
			data: dogLocation
		}).then(
			function () {
				console.log("we are here too");
			}
		);
	});

	$("#bootcampSubmit").on("click", function (e) {
		e.preventDefault();
		console.log("this has been clicked");

		var id = dogId;
		var dogLocation = {
			parkName: "Bootcamp Dog Park"
		};

		// Send the PUT request.
		$.ajax("/api/bootcamp/" + id, {
			type: "PUT",
			data: dogLocation
		}).then(
			function () {
				console.log("we are here too");
			}
		);
	});

	$("#doghouseSubmit").on("click", function (e) {
		e.preventDefault();
		console.log("this has been clicked");

		var id = dogId;
		var dogLocation = {
			parkName: "Doghouse"
		};

		// Send the PUT request.
		$.ajax("/api/doghouse/" + id, {
			type: "PUT",
			data: dogLocation
		}).then(
			function () {
				console.log("we are here too");
			}
		);
	});



});