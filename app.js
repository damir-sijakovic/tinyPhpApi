function sendSuccess(){
    var post = newPost();
    post.sendData('api.php/success', {helloPost:'helloPost'}, function(x){
        console.log(x);   
        document.getElementById('sendSuccess_data').innerHTML = x.success; 
    });
}

function sendSuccessQuery(){
    var post = newPost();
    post.sendData('api.php/queryString?imQuery=imString', {helloPost:'helloPost'}, function(x){
        console.log(x);   
        document.getElementById('sendSuccessQuery_data').innerHTML = JSON.stringify(x.success); 
    });
}

function sendFail(){
    var post = newPost();
    post.sendData('api.php/fail', {helloPost:'helloPost'}, function(x){
        console.log(x);   
        document.getElementById('sendFail_data').innerHTML = x.fail; 
    });
}

function sendError(){
    var post = newPost();
    post.sendData('api.php/badRouteName', {helloPost:'helloPost'}, function(x){
        console.log(x);   
        document.getElementById('sendError_data').innerHTML = x.error; 
    });
}
