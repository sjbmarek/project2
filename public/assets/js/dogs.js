var test = ["dogs.js is connected"];
console.log(test);

// Initialize Firebase
//========================================================================
var config = {
    apiKey: "AIzaSyCq24OblNHStJVOzNsdYFoaMVfQQF5PVn0",
    authDomain: "pupcrawl-fea80.firebaseapp.com",
    databaseURL: "https://pupcrawl-fea80.firebaseio.com",
    projectId: "pupcrawl-fea80",
    storageBucket: "pupcrawl-fea80.appspot.com",
    messagingSenderId: "142821736229"
};
firebase.initializeApp(config);

$(document).ready(function(){

	$( "#dog_file" ).change(function() {
	  $(".photo-upload").attr("src", "/assets/img/dog-photo-green.svg");

	  if ($(".dogNameInput").val() !== "" && $(".ownerNameInput").val() !== "" && $("#dog_file").val() !== "") {
	  	$("#submit").fadeIn();
	  };

	});

	// Grab Local storage
	var myDogName = localStorage.getItem("myDogName");
	var myDogCommentLocal = localStorage.getItem("myDogComment");
	var myDogUrl = localStorage.getItem("myDogUrl");

	$("#my-dog-name-dashboard").text(myDogName);
	$("#my-dog-status-dashboard").text(myDogCommentLocal);
	$(".dashboard-user-dog").attr("src", myDogUrl);

	var dogId = 1; //Set back to 0
	       console.log(dogId);

	$("#submit").on("click", function(e){
		e.preventDefault();

		// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

	// 	var lati = [44.9790446, 44.9060055, 44.9816093];
	// 	var long = [-93.1589169, -93.2006303, -93.1811714];
	// 	var shortDistance = 100000000;
	// 	var index = -1;

	// 	function distance(lon1, lat1, lon2, lat2) {
	// 	var R = 6371; // Radius of the earth in km
	// 	var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
	// 	var dLon = (lon2-lon1).toRad();
	// 	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	// 	Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
	// 	Math.sin(dLon/2) * Math.sin(dLon/2);
	// 	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	// 	var d = R * c; // Distance in km
	// 	return d;
	// }

	// * Converts numeric degrees to radians 
	// if (typeof(Number.prototype.toRad) === "undefined") {
	// 	Number.prototype.toRad = function() {
	// 		return this * Math.PI / 180;
	// 	}
	// }

	// window.navigator.geolocation.getCurrentPosition(function(pos) {
	// 	console.log(pos); 
	// 	for (var i=0; i<long.length; i++){
	// 		distanceAway=distance(pos.coords.longitude, pos.coords.latitude, long[i], lati[i]);
	// 		console.log("DISTANCE AWAY " + distanceAway);
	// 		if (distanceAway<shortDistance){
	// 			shortDistance = distanceAway;
	// 			index = i;
	// 			console.log("INDEX " + index);
	// 	    // index is the indicator of the closest park, 0 is como, 1 is minnehaha, 2 is bootcamp
	// 	};

	// };

	// });


		// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        // Get Elements
        var uploader = document.getElementById("uploader");
        var fileButton = document.getElementById("dog_file");

        // Get file
        var file = fileButton.files[0];
        console.log(file);

        // Create storage ref
        var storageRef = firebase.storage().ref("profile_pics/" + Date.now() + file.name);

        // Upload file
        var task = storageRef.put(file);

        var dogImage = "";
   

        // Update progress bar
        task.on("state_changed",
            function progress(snapshot) {
                console.log(snapshot);
            },

            function error (err) {
            },

            function complete() {
                console.log("COMPLETE!");

                // Once complete - get the stored image URL
                storageRef.getDownloadURL().then(function(url) {

                    dogImage = url;
                    localStorage.setItem("myDogUrl", dogImage);
                    localStorage.setItem("myDogName", $("input[name='dog_name']").val().trim());
                    localStorage.setItem("myDogComment", "Woof! Woof!");
                    console.log("dog,dog,dog");
                    console.log(dogImage);

					var dogRecord = {
						dogName: $("input[name='dog_name']").val().trim(),
						ownerName: $("input[name='owner_name']").val().trim(),
						dogPhoto: dogImage
					}

					console.log(dogRecord);


					$.post("/api/newDog", dogRecord,
	  					function(data){
					  	console.log("we are hitting it");
	  					console.log(data);
					});
				  window.location.href = "/dashboard";

            });

        });

	});

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
		window.location.href = "/como";
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
		window.location.href = "/minnehaha";
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

		window.location.href = "/bootcamp";
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

		window.location.href = "/dashboard";
	});

	//COMMENT UPDATE CODE TO HTML
  $("#commentSubmit").on("click", function(e) {
    e.preventDefault();
    console.log("this is Comment Submit");
    var id = dogId;
    var myDogComment = $("input[name=comment]").val().trim();
    localStorage.setItem("myDogComment", myDogComment);
    var dogRecord = {
      dogComment: $("input[name=comment]").val().trim()
    };
    // Send the PUT request.
    $.ajax("/api/comment/:id" + id, {
      type: "PUT",
      data: dogRecord
    }).then(function() {
      console.log("Comment Sent");
      $("#my-dog-status-dashboard").text(localStorage.getItem("myDogComment"));
      location.reload();
    });
  });
});
