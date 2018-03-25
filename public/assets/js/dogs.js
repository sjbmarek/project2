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
	var dogId = 1; //Set back to 0
	       console.log(dogId);

	$("#submit").on("click", function(e){
		e.preventDefault();

        // Get Elements
        var uploader = document.getElementById("uploader");
        var fileButton = document.getElementById("dog_file");

        // Get file
        var file = fileButton.files[0];
        console.log(file);

        // Create storage ref
        var storageRef = firebase.storage().ref("profile_pics/" + file.name);

        // Upload file
        var task = storageRef.put(file);

        var dogImage = "";
   

        // Update progress bar
        task.on("state_changed",
            function progress(snapshot) {
                // var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // uploader.value = percentage;
                console.log(snapshot);
            },

            function error (err) {
            },

            function complete() {
                console.log("COMPLETE!");

                // Once complete - get the stored image URL
                // var dogURL = storageRef.getDownloadURL().then(function(url));
                storageRef.getDownloadURL().then(function(url) {

                    dogImage = url;
                    console.log("dog,dog,dog");
                    console.log(dogImage);

					var dogRecord = {
						dogName: $("input[name='dog_name']").val().trim(),
						ownerName: $("input[name='owner_name']").val().trim(),
						// dogComment: $("input[name='dog_comment']").val().trim(),
						dogPhoto: dogImage
					}

					console.log(dogRecord);


					$.post("/api/newDog", dogRecord,
	  					function(data){
					  	console.log("we are hitting it");
	  					console.log(data);
					});
				  // location.reload();
				  localStorage.setItem("name", "mike");
				  window.location.href = "/dashboard";

            });

        });

        // get url for picture link
        // var dogURL = storageRef.getDownloadURL();
        // console.log(dogURL);


  //       var dogRecord = {
		// 	dogName: $("input[name='dog_name']").val().trim(),
		// 	ownerName: $("input[name='owner_name']").val().trim(),
		// 	dogComment: $("input[name='dog_comment']").val().trim(),
		// 	dogPhoto: dogImage
		// }

		// console.log(dogRecord);

		// $.post("/api/newDog", dogRecord,
	 //  			function(data){
		// 			  console.log("we are hitting it");
	 //  				console.log(data);
		// 		});
				  // location.reload();

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

		var id = 1; //switch back to dogId
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