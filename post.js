/*

Optional argument 'obj' is fetch object. 
Optional argument 'headers' is array 'headers' in fetch object.
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

Return:
On success: {success:data}
On fail: On controller fail (for example: "Database data not found") return: {fail:'Database data not found'} 
On error: {error:'404, Not Found'}

*/

function newPost(obj=null, headers=null)
{    
    var private = {};  
    var public = {};    
      
    ///////   
       
    private.fetchObject = {};
    private.fetchObject.body = null;
    private.fetchObject.mode = (obj!==null && obj.mode!==null) ? obj.mode : 'cors';
    private.fetchObject.cache = (obj!==null && obj.cache) ? obj.cache : 'no-cache';
    private.fetchObject.credentials = (obj!==null && obj.credentials) ? obj.credentials : 'same-origin';
    private.fetchObject.redirect = (obj!==null && obj.redirect) ? obj.redirect : 'follow';
    private.fetchObject.referrerPolicy = (obj!==null && obj.referrerPolicy) ? obj.referrerPolicy : 'no-referrer';
    private.fetchObject.headers = (headers!==null) ? headers : {'Content-Type': 'application/json; charset=utf-8'};
    
    public.sendData = function (url, data, cb)
    {
        
        var send = async function (url = '', data = {})	
        {	
            const response = await fetch(url, {		
                method: 'POST',
                mode: private.fetchObject.mode,
                cache: private.fetchObject.cache,
                credentials: private.fetchObject.credentials,
                redirect: private.fetchObject.redirect,
                referrerPolicy: private.fetchObject.referrerPolicy,
                body: JSON.stringify(data),
                headers: private.fetchObject.headers,
            });

            if (response.status != 200){
                return {error: response.status +', '+ response.statusText};
            } 	
            
            return response.json();
        }
        
        send(url, data)
        .then(data => { 
            if (data.error)
            {
                cb(data);
            }
            else
            {
                cb(data); 
            }		
        });
                
    }
    
    return public;
}
