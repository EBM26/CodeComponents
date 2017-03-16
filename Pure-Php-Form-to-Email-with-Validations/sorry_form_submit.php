
<?php 
		if(isset($_POST['submit'])) {
			$name = $_POST['name'];
			$visitor_email = $_POST['email'];
			$message = $_POST['message'];
			$phone = $_POST['phone'];
			$contact = $_POST['contacted'];
			$email_from = 'vnicholson@princetonnutrients.com';  
			$email_subject = "New Form submission";

			$email_body = '<html><body>';
			$email_body .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
			$email_body .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";
			$email_body .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
			$email_body .= "<tr><td><strong>Phone:</strong> </td><td>" . strip_tags($_POST['phone']) . "</td></tr>";
			$email_body .= "<tr><td><strong>Prefers to be contacted by:</strong> </td><td>" . strip_tags($_POST['contacted']) . "</td></tr>";
			$email_body .= "<tr><td><strong>Message:</strong> </td><td>" . strip_tags($_POST['message']) . "</td></tr>";

			$email_body .= "</table>";
			$email_body .= "</body></html>";
			$to = "vnicholson@princetonnutrients.com"; 
			$headers = "From: $email_from \r\n";
			$headers .= "Reply-To: $visitor_email \r\n";
			$headers .= "MIME-Version: 1.0\r\n";
			$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

		
			if(mail($to, $email_subject, $email_body, $headers)){
						header("Location:http://princetonnutrients.com/sorry.php?success-message=Your message has been sent successfully!");
					}else{
						header("Location:http://princetonnutrients.com/sorry.php");
					}
	
		}

		function test_input($data) {
			$data = trim($data);
			$data = stripslashes($data);
			$data = htmlspecialchars($data);
			return $data;
		}
				
											?>