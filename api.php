<?php
/*
* Return data as JSON.
*/
header('Content-type:application/json;charset=utf-8');


/*
* If request method is GET return 405
*/
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode(['forbidden'=> "Method Not Allowed"]);  
    http_response_code(405);
    die();
}


/*
// Un-comment for Cross-Origin Request Headers
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
*/


/*
* Get route part of URL.
*/
$requestUri = $_SERVER['REQUEST_URI'];

/*
* If route is matched do..., else return 404.
*/
if ($requestUri === '/api.php/success')
{
    /*
    * Get post data
    */
    
    $postData = json_decode(file_get_contents('php://input'));
        
    /*
    * On controller success return: {success:'data'} 
    */
    echo json_encode(['success'=> 'someSuccessData => ' .  json_encode($postData)]);  
    die();  
}
if ($requestUri === '/api.php/queryString?imQuery=imString')
{
    /*
    * Handle query string
    */
    
    $queries = array();
    parse_str($_SERVER['QUERY_STRING'], $queries);
    
    echo json_encode(['success'=> $queries]);  
    die();  
}
else if ($requestUri === '/api.php/fail')
{
    /*
    * On controller fail (for example: "Database data not found") return: {fail:'Database data not found'} 
    */
    echo json_encode(['fail'=> 'someFailData']); 
    die(); 
}
else
{
    http_response_code(404);
    die();
}
