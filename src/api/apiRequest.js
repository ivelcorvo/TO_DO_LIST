export const apiRequest = async(url, method="GET", body=null)=>{
    const options = {
        method,
        headers: {"Content-type":"application/json"},
        body: (body)?JSON.stringify(body):undefined,
    };

    const res = await fetch(url,options);
    return  res.json();
};