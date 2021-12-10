var url="https://breakingbadapi.com/api/quote/random";
async function getQuote(){
    var result=document.getElementById("res");
    result.innerHTML="";
    await fetch(url).then(data=>data.json()).then(data=>result.innerHTML+=`${data[0].quote_id}<br>${data[0].quote}<br>${data[0].author}<br>${data[0].series}`).catch(err=>console.log(err));    
    
}