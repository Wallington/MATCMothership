[<?php
	$email = $_GET['email']; //when the page is request the server to post gathers the email data
	$name  = $_GET['name'];  //when the page is request the server to post gathers the full name data
	$subject = "requesting a VoZ Alpha Key";        //set the subject for email to be sent when approve by the code	 
	$message = "";	 //when the page is request the server to post gathers the message data
	$name = preg_replace('/[^a-zA-Z0-9_ %\[\]\.\(\)%&-]/s', '', $name);
	if (!preg_match("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/",$email)) 
	{
		$email = NULL;
	}
	//print($name . " " . $email . " " . $message);
	if($name != NULL && $email != NULL )
	{
		echo "{'serverState':'alert-success', message: 'Your message has been sent! Please wait for 1-2 business days.'}";
		//$message = wordwarp($message,70);
		mail("sean.obrien@foreverinteractive.com",$subject,$message . "\r\n" ."From: ". $name . "\r\n" . $email);
	}
	else
	{
		
		echo "{'serverState': 'alert-danger', 'message': 'Email or name was invaild please try again.' }";
		
	}
?>]