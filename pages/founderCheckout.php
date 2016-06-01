<?php
	//first we need load the SDK Package
	require '../php/autoload.php';
	
	$apiContext = new PayPal\Rest\ApiContext
	(
		new PayPal\Auth\OAuthTokenCredential
		(
			'Affx3loVsR2jp8I6ydiao3QhQTnv0KFdtQAYHWss0D3YbeI6WJpo21mwn_RlXBJPDLvnrHSNG9CzMjzr', //ClientID
			'EFGAkh4HSqn8ntud7eBC4P44hR5my_yUfGIBP_A54QrQHMnlFCg2Gnk5BuqYrm0i2VFuLsSUKvCejpFB' //ClientSecret
		)
	);
	
	$paymenetId = $_GET['paymentId'];
	$payment = PayPal\Api\Payment::get($paymenetId, $apiContext); //were proccessing the payment to accept the payment from paypal
	
	$exectution = new PayPal\Api\PaymentExecution();
	$exectution->setPayerId($_GET['PayerID']);
	
	
?>
<div layout="row">
	<div class="panel panel-voz-default">
    	<div class="panel-heading">
        
        </div>
        <div class="panel-body">
        	<?php
				try
				{
					$result = $payment->execute($exectution,$apiContext);
					
					try
					{
						$payment->get($paymentId,$apiContext);	
					}
					catch(PayPal\Exception\PayPalConnectionException $ex)
					{
						echo $ex->getData();
						print "<br><br>" . $request;
						exit(1);
					}
				}
				catch(\PayPal\Exception\PayPalConnectionException $ex)
				{
					echo '<div class="alert alert-danger">ERROR: Please try again!" <a href="founder.php" class="btn btn-default">Click here to try again</a></div>';
					exit(1);
				}
				
				if($_GET['token'] != NULL)
				{
					echo '<div class="alert alert-success">Your Founder Items has been cancelled.</div>';
				}
				else
				{
					echo '<div class="alert alert-success">Your Founder Items has been reserved. "Thank You!"</div>';
				}
			?>
        </div>
    </div>
</div>