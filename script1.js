var url="https://61b20c42c8d4640017aaf155.mockapi.io/users";
var dis=document.getElementById("Display");



//Read opertaion using HTTP method GET
function getData(){   
    var data=fetch(url,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        }
    }).then(response=>response.json());    
     return data;
    
        }      
//getData();
function displayUsers(){
    let users=getData();
    console.log(users);
let uList=document.getElementById("users-list");
uList.innerHTML="";
for(var i in users){
    uList.innerHTML+=`<img src=${users[i].avatar}/>    
<h2>${users[i].name}</h2>`;
console.log(i.name);
}    
}

//Create opertaion using HTTP method POST
function CreateData(){
    let d=document.getElementById("dataadd");
    let data1={  
       name:document.getElementById("add-name").value,
       avatar:document.getElementById("add-url").value
};
    fetch(url,{
        method:"POST",
        body:JSON.stringify(data1),  
        headers:{
            "Content-Type":"application/json",
        }     
    })
    .then(Response=>Response.json())
    .then(data1=>d.innerHTML=`${data1.name}`)
    .catch(err=>console.log(err));
}
//CreateData();

// //Update opertaion using HTTP method PUT/PATCH
// function updateData(){
// let data={ 
//     Name:"Arul",
//     email:"arul@gmail.com"
// };
//     fetch(url+"/19",{
//     method:"PUT",
//     body:JSON.stringify(data),
//     headers:{
//         "Content-Type":"application/json",
//     }
//     })
//     .then(Response=>Response.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err)); 
// }
//updateData();

//Delete opertaion using HTTP method DELETE

function deleteData(){
    fetch(url,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(Response=>Response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err)); 
}
// deleteData();