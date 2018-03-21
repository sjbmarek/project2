$(document).ready(function(){

	var indexHTML = 
	"<!-- Intro copy --> <div class='index row pt-1'> <div class='col'> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p> </div> </div> <!-- Intro graphic --> <div class='index row pt-1'> <div class='col'> <img class='intro-graphic' src='http://via.placeholder.com/750x350' alt='logo'> </div> </div> <!-- Button section --> <div class='index row pt-2'> <div class='col'> <button type='button' class='btn btn-primary signup'>Sign-up</button> <button type='button' class='btn btn-primary login'>Log In</button> </div> </div>";

	var loginHTML =
	"<form><div class='form-group'> <label for='exampleFormControlInput1'>Email address</label> <input type='email' class='form-control' id='exampleFormControlInput1' placeholder='name@example.com'> </div> <div class='form-group'> <label for='exampleFormControlSelect1'>Example select</label> <select class='form-control' id='exampleFormControlSelect1'> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> </select> </div> <div class='form-group'> <label for='exampleFormControlSelect2'>Example multiple select</label> <select multiple class='form-control' id='exampleFormControlSelect2'> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> </select> </div> <div class='form-group'> <label for='exampleFormControlTextarea1'>Example textarea</label> <textarea class='form-control' id='exampleFormControlTextarea1' rows='3'></textarea> </div> </form>";

	$('.bg').append(indexHTML);

	$('.login').on('click', function(){
		$('.index').fadeOut();
		$('.bg').append(loginHTML);
	});

});