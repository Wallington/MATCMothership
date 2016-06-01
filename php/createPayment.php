<?php

	function getBaseUrl()
    {
        $protocol = 'http';
        if ($_SERVER['SERVER_PORT'] == 443 || (!empty($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) == 'on')) {
            $protocol .= 's';
            $protocol_port = $_SERVER['SERVER_PORT'];
        } else {
            $protocol_port = 80;
        }
        $host = $_SERVER['HTTP_HOST'];
        $port = $_SERVER['SERVER_PORT'];
        $request = $_SERVER['PHP_SELF'];
        return dirname($protocol . '://' . $host . ($port == $protocol_port ? '' : ':' . $port) . $request);
    }



	//Create the payment to PayPal
	
	//first we need load the SDK Package
	require 'autoload.php';
	
	$apiContext = new PayPal\Rest\ApiContext
	(
		new PayPal\Auth\OAuthTokenCredential
		(
			'Affx3loVsR2jp8I6ydiao3QhQTnv0KFdtQAYHWss0D3YbeI6WJpo21mwn_RlXBJPDLvnrHSNG9CzMjzr', //ClientID
			'EFGAkh4HSqn8ntud7eBC4P44hR5my_yUfGIBP_A54QrQHMnlFCg2Gnk5BuqYrm0i2VFuLsSUKvCejpFB' //ClientSecret
		)
	);
	
	$apiContext->setConfig(array("mode" => "sandbox"));
	
	$payer = new PayPal\Api\Payer();
	
	$payer->setPaymentMethod("PayPal");
	
	
	
	//here is my initial string 
	$items = $_GET['items']; 
	//try to decode it 
	$items = json_decode($items, true); 
	//if getting error test with this.
	/*if (json_last_error() === JSON_ERROR_NONE) 
	{ 
		print("It ready to use");
		print($json[1]['name']);
		//do something with $json. It's ready to use 
	} else 
	{
		print("yep, it's not JSON."); 
		//yep, it's not JSON. Log error or alert someone or do nothing 
	} */ 

	//print($items[0]['name']);
	$basket = array(); //set the payPal basket
	
	$subTotal = 0.00; //set up the Subtotal 
	
	//echo print_r($items);
	
	for($i = 0; $i < count($items); $i++) //enter all the data
	{
		$item = new PayPal\Api\Item();
		$item->setName($items[$i]['name']);
		$item->setQuantity((float)$items[$i]['copy']);
		$item->setCurrency('USD');
		$item->setPrice($items[$i]['price'] );
		$basket[$i] = $item;
		$subTotal = ((((float)$items[$i]['price']) * $items[$i]['copy']) + $subTotal);
		
			
	}
	//print_r($basket);
	//echo $subTotal;
	
	
	
	$items = new PayPal\Api\ItemList();
	$items->setItems($basket);
	
	// setting up details like shipping, tax and sub sutotal
	$detail = new PayPal\Api\Details();
	$detail->setShipping(0);
	$detail->setTax(0);
	$detail->setSubtotal($subTotal);
	
	//setting up the amomunt
	$amount = new PayPal\Api\Amount();
	$amount->setCurrency("USD");
	
	$amount->setTotal($subTotal);
	
	//setting up the transaction
	$transaction = new PayPal\Api\Transaction();
	$transaction->setAmount($amount);
	$transaction->setItemList($items);
	$transaction->setDescription("Purchasing the follow Founder Packs: ");
	$transaction->setInvoiceNumber(uniqid());
	
	$redirectUrls = new PayPal\Api\RedirectUrls();
	$redirectUrls->setReturnUrl(getBaseUrl() . "?paypalSuccess=true");
	$redirectUrls->setCancelUrl(getBaseUrl() . "#/founder");
	
	$payment = new PayPal\Api\Payment();
	$payment->setIntent("sale");
	$payment->setPayer($payer);
	$payment->setRedirectUrls($redirectUrls);
	$payment->setTransactions(array($transaction));
	
	//print_r ($payment->create($apiContext)); 
	$request = clone $payment;
	try
	{
		$payment->create($apiContext);
	}
	catch(PayPal\Exception\PayPalConnectionException $ex)
	{
		echo $ex->getData();
		print "<br><br>" . $request;
		exit(1);
	}
		
	header("Location: " .$payment->getApprovalLink());
?>