export const apiRequest = async(url, method="GET", body=null, token=null)=>{
    const options = {
        method,
        headers: {"Content-type":"application/json"},
        body: (body)?JSON.stringify(body):undefined,
    };

    if(token){
        url += (url.includes("?")) ?"&" :"?" +`auth=${token}`;
    }

    const res = await fetch(url,options);
    return  res.json();
};