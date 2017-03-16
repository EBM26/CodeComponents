<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>PHP form to email</title>
	<link rel="stylesheet" href="css/style.css">
	<style>
		.contact-form{margin: auto; width: 888px; padding: 20px 45px 40px; position: relative; background-color: #f2f2f2; margin-bottom: 80px;}
		h1{font-size: 28px; margin: 0; font-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;}
		.fill{font-size: 18px; font-weight: 200; margin: 5px 0 15px;}
		.text-input{width: 235px; height: 25px; font-size: 14px; padding-left: 10px; border: 1px solid #d0d0d0; border-radius: 5px; margin: 0;}
		.text-area{font-size: 14px; border: 1px solid #d0d0d0; border-radius: 5px; padding: 10px; width: 875px; height: 175px; margin-bottom: 30px;}
		.submit{border: 1px solid #f59939; width: 245px; padding: 8px; border-radius: 5px; text-align: center; font-size: 16px; text-shadow: 0px 1px #fff;
			background: rgba(252,239,180,1);  font-weight: 600; display: block; margin: auto;
			background: -moz-linear-gradient(top, rgba(252,239,180,1) 0%, rgba(252,239,180,1) 6%, rgba(250,217,90,1) 32%, rgba(249,196,50,1) 51%, rgba(249,191,55,1) 71%, rgba(249,191,55,1) 100%);
			background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(252,239,180,1)), color-stop(6%, rgba(252,239,180,1)), color-stop(32%, rgba(250,217,90,1)), color-stop(51%, rgba(249,196,50,1)), color-stop(71%, rgba(249,191,55,1)), color-stop(100%, rgba(249,191,55,1)));
			background: -webkit-linear-gradient(top, rgba(252,239,180,1) 0%, rgba(252,239,180,1) 6%, rgba(250,217,90,1) 32%, rgba(249,196,50,1) 51%, rgba(249,191,55,1) 71%, rgba(249,191,55,1) 100%);
			background: -o-linear-gradient(top, rgba(252,239,180,1) 0%, rgba(252,239,180,1) 6%, rgba(250,217,90,1) 32%, rgba(249,196,50,1) 51%, rgba(249,191,55,1) 71%, rgba(249,191,55,1) 100%);
			background: -ms-linear-gradient(top, rgba(252,239,180,1) 0%, rgba(252,239,180,1) 6%, rgba(250,217,90,1) 32%, rgba(249,196,50,1) 51%, rgba(249,191,55,1) 71%, rgba(249,191,55,1) 100%);
			background: linear-gradient(to bottom, rgba(252,239,180,1) 0%, rgba(252,239,180,1) 6%, rgba(250,217,90,1) 32%, rgba(249,196,50,1) 51%, rgba(249,191,55,1) 71%, rgba(249,191,55,1) 100%);
			filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fcefb4', endColorstr='#f9bf37', GradientType=0 );}
		.submit:hover{background: #FFE757; cursor: pointer;}
		.submit:focus{outline: none;}
		.errorBox{position: absolute; top: -53px; right: 388px;}
		li{list-style: none;}
		#marg-right{margin-right: 35px;}
		.err{position: absolute; padding: 10px; color: red; display: none; font-size: 20px; margin: 0;}
		.nameErr{left: 294px; top: 68px;}
		.emailErr{left: 294px; top: 151px;}
		.messageErr{left: 384px; top: 480px;}
		.phoneErr{left: 294px; top: 235px;}
		.radioErr{left: 200px; top: 314px;}
		.success{position: absolute; font-size: 30px; color: #5cb85c; top: 450px; left: 225px;}
		.purple-text{font-size: 20px; color: #605da9; font-weight: bold; margin: 10px 0;}
		.sorry-content{width: 840px; margin-bottom: 25px;}
		.input-p{font-weight: bold;}
	</style>
		<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
	</head>
	<body>

			<div class="container">
			<?php $msg=$_GET['success-message']; ?>
				<form action="sorry_form_submit.php" method="post">
				<div class="contact-form">
					<p class="input-p">1. Please enter your name:</p><p class="err nameErr"></p>
					<input type="text" placeholder="Enter Name" class="text-input" name="name">
					<p class="input-p">2. Please enter your email:</p><p class="err emailErr"></p>
					 <input type="text" name="email" placeholder="Enter Email" class="text-input">
					 <p class="input-p">3. Please enter your phone number:</p><p class="err phoneErr"></p>
					<input type="text" placeholder="Enter Phone Number" class="text-input" name="phone">
					<p class="input-p">4. Would you rather be contacted by phone or email?</p>
					<input type="radio" name="contacted" value="phone"> Phone <input type="radio" name="contacted" value="email"> Email
					<p class="success"><?php echo $msg; ?></p>
					<p class="input-p">5. Enter anything you'd like us to know before we contact you:</p><p class="err radioErr"></p>
					<textarea placeholder="Enter Message" name="message" class="text-area" id="messages"></textarea>
					<p class="err messageErr"></p> 
					<input class="submit" type="submit" name="submit" value="Submit Feedback">
				</div>
				</form>
			</div>
			 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
			 <script>
			 	var validateEmail = function ( email ) {
			 		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			 		return re.test(email);
			 	}

			 	var formFunc = function () {
			 		var name    = $( "form input[name=name]" ).val()
			 		var email   = $( "form input[name=email]" ).val()
			 		var phone   = $( "form input[name=phone]" ).val()
			 		var radio   = $( "form input[name=contacted]:checked").val()
			 		var message = $( "form textarea" ).val()

			 		if ( name === "" ) {
			 			$( ".nameErr" ).html( "Please write your name" )
			 			$( ".nameErr" ).fadeIn( "slow" )
			 			event.preventDefault();
			 			return

			 		} else if ( validateEmail(email) === false ) {
			 			$( ".emailErr" ).html( "Please enter a valid email address" )
			 			$( ".emailErr" ).fadeIn( "slow" )
			 			event.preventDefault();
			 			return

			 		} else if ( phone.length < 9 || phone.length > 10 || isNaN(phone) ) {
					    $( ".phoneErr" ).html( "Please enter a valid phone number" )
					    $( ".phoneErr" ).fadeIn( "slow" )
					    event.preventDefault();
					    return

					 } else if (!radio){
			 			$( ".radioErr" ).html( "Please check which way you would rather be contacted with" )
			 			$( ".radioErr" ).fadeIn( "slow" )
			 			event.preventDefault();
			 			return

			 		} else if ( message === "" ) {
			 			$( ".messageErr" ).html( "Please write a clear message" )
			 			$( ".messageErr" ).fadeIn( "slow" )
			 			event.preventDefault();
			 			return
			 		}
			 	}

			 	$( "body" ).on( "click", "input[type=submit]", function(){
			 		formFunc()
			 	})



			// on focus to hide error message

			$( "body" ).on( "focus", "form input, form textarea", function(event) {
				$( ".err" ).fadeOut( "slow" )
			})
			 </script>
	</body>
	</html>