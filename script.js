let create=document.getElementById("create");
let textinput=document.getElementById("textarea");
//  console.log(textinput.classList);
let con=document.getElementById("c1");
const containers=document.getElementsByClassName("container");
// console.log(containers);


for(let i=0;i<containers.length;i++)
{
    containers[i].addEventListener("dragover",(event)=>{
        event.preventDefault();
    })
    containers[i].addEventListener("drop",()=>{
        containers[i].appendChild(title)
    })
}

const addtext=()=>{
    create.classList.add("hide");
    // console.log(textinput.className)
    textinput.classList.remove("hide");
    textinput.focus();
}
const title=document.createElement("div");

function addnewissue(cardTitle){
    title.className="card";
    title.innerText=cardTitle;
    con.appendChild(title);
    create.classList.toggle("hide");
    textinput.classList.toggle("hide");
    console.log(con);
}

textinput.addEventListener("keyup",(event)=>
{
   
   
if(event.keyCode===13)
{
   
    const value=textinput.value;
    if(value=="")
    {
        alert("please enter something");
    }
    else{
        addnewissue(value);
    }
}
});
title.draggable="true";
title.addEventListener("drag",(e)=>{
    console.log("abc")
});
create.addEventListener("click",addtext);
