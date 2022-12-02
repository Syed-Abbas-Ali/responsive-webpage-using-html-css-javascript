
// var menu=document.querySelector(".menu");

// menu.addEventListener('click',function(z){
//     if(z=1 && menu.style.left==="0%"){
//         menu.style.left="100%";
        
//     }
//     else{
//         menu.style.left="0%";
//     }
// })

function dropdown(z){
    var menu=document.querySelector(".menu");
    if(z=1 && menu.style.left==="0%"){
        menu.style.left="100%";
        
    }
    else{
        menu.style.left="0%";
    }
}
var kk=document.querySelector(".dropdown");
kk.addEventListener("click",function(){
    this.classList.toggle("change");
})

// let kkr=document.querySelectorAll(".btn");
// kkr.foreach(kkr=>kkr.addEventListener("click",()=>{
//     var p=document.querySelectorAll(".text");
//     p.classList.toggle("text2")
// }))

var mm=document.querySelectorAll(".text");
mm.forEach(kkr=> {kkr.addEventListener("click",
()=>{

    kkr.classList.toggle("text2");
}
)
    
});

// function alertt(){
//     alert("hello")
// }
// setTimeout(alertt,4000)




// document.querySelector(".btn").addEventListener("click",function(){
//     document.querySelector(".text").classList.toggle("text2")
// })


// function myFunction(x) {
//     x.classList.toggle("change");
//   }
function Rot(y) {
    y.classList.toggle("rotat");
  }
  

// function cc(b){
//     var q1=document.getElementById("q1");
//     var q2=document.getElementById("q2");
//     var q3=document.getElementById("q3");


//     switch(true){
//         case(b==1 && q1.style.display==="none"):
//         q1.style.display="block";
//         q2.style.display="none";
//         q3.style.display="none";
//         break;

        
//         case(b==2 && q2.style.display==="none"):
//         q2.style.display="block";
//         q1.style.display="none";
//         q3.style.display="none";
//         break;

//         case(b==3 && q3.style.display==="none"):
//         q3.style.display="block";
//         q1.style.display="none";
//         q2.style.display="none";
//         break;

//         default:
//             q1.style.display="none";
//             q2.style.display="none";
//             q3.style.display="none";
//     }
// }

