var res=document.getElementById("cat-res");
var btn=document.getElementById("cat");
btn.addEventListener("click",getDog);

function getDog(){
    fetch("https://random.dog/woof.json")
    .then((response)=>response.json())
    .then((data)=>{
        res.innerHTML=`<img src=${data.url} width=300 height=300 alt="dog"/>`;
    })
};