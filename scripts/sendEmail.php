<?php
	$email = $_GET['email'];
	$name = $_GET['name'];
	$subject = $_GET['subject'];
	$message = $_GET['message'];
	
	$feedback = 'alert';
	$eMessage = 'Following need to be fix: ';
	$error = false;
	
	if(!filter_var($email, FILTER_VALIDATE_EMAIL)) 
	{
		
		$error = true;
		$eMessage += 'Email is not validate '; 
	}
	
	if(empty($name))
	{
		$eMessage += 'Your full name is empty';
		$error = true;	
	}
	
	if(empty($message))
	{
		$eMessage += 'Your Message is empty';
		$error = true;
	}
	
	$emailMessage = 'There some is try to contact you about:' .$subject. '<br/>There name is: ' . $name . '<br/>There message: ' . $message; 
	
	if(!$error)
	{
		$feedback = 'alert alert-success';
		$eMessage = "Your message has been sent. Please wait for 1 to 2 business days before try again.";
		mail('contact@foreverinteractive.com',$subject, $emailMessage);	
	}
	else
	{
		$feedback = 'alert alert-danger';
		
		
	}
	echo '[{"' . 'serverMessage' . '": "' . $eMessage . '","serverFeedback":"'. $feedback . '"}]';	
?>