<?php
// Ensure no HTML or other output has occurred before this point

// Retrieve the IP and port from the server environment
$ip = $_SERVER['SERVER_ADDR']; // or $_SERVER['HTTP_HOST'] for the full host
$port = $_SERVER['SERVER_PORT'];

// Construct the URL
$url = "https://$ip:$port";

// Redirect to the URL
header("Location: $url");
#http_response_code(204);
?>
