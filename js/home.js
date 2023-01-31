
console.log("hello world");
document.querySelector(".settings-box div").onclick =function(){
    document.querySelector(".settings-box").classList.toggle("open");
};


let colors = document.querySelectorAll(".settings ul li");
console.log(colors);
   
colors.forEach(li=>{

    li.addEventListener("click",(e)=>{
    
    document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
});
});


let skillPage = document.querySelector(".skills-page");
let skills = document.querySelectorAll(".skills-page .skills .skill-box .skill-progess span");
console.log(skills); 



window.onscroll = function(){
if(window.scrollY>=skillPage.offsetTop - 300){
    skills.forEach(skill =>{
    skill.style.width = skill.dataset.skill;
 

    })
}
}



let main =document.querySelectorAll(".mywork .img1");



main.forEach(img=>{
    img.addEventListener("click",(e)=>{
//creat overlay when the img is clicked
        let overlay =document.createElement("div");
        overlay.className ="layover";
  
        document.body.appendChild(overlay);
//creat pupo box
let pupoBox  =document.createElement("div");
pupoBox.className ="pupo";
/////////////////////////////////////////////////
//////////////////////////////////////////////////
//creat img
let pupoImage =document.createElement("img");
pupoImage.src =img.src;
pupoBox.appendChild(pupoImage);
document.body.appendChild(pupoBox);
//checking
//creat the close span
let button =document.createElement("span");
let buttonText =document.createTextNode("x");
button.appendChild(buttonText);  
button.className ="button";
pupoBox.appendChild(button)
   });
});
//close pupoBox
document.addEventListener("click",function(e){
if(e.target.className =="button"){
e.target.parentNode.remove();
document.querySelector(".layover").remove();
}
});






let ourGallery =document.querySelectorAll(".aims .img3");

console.log(ourGallery);



ourGallery.forEach(img=>{
    img.addEventListener("click",(e)=>{
//creat overlay when the img is clicked
        let overlay =document.createElement("div");
        overlay.className ="layover";
  
        document.body.appendChild(overlay);
//creat pupo box
let pupoBox  =document.createElement("div");
pupoBox.className ="pupo";
/////////////////////////////////////////////////
//////////////////////////////////////////////////
//creat img
let pupoImage =document.createElement("img");
pupoImage.src =img.src;
pupoBox.appendChild(pupoImage);
document.body.appendChild(pupoBox);
//checking
//creat the close span
let button =document.createElement("span");
let buttonText =document.createTextNode("x");
button.appendChild(buttonText);  
button.className ="button";
pupoBox.appendChild(button)
   });
});
//close pupoBox
document.addEventListener("click",function(e){
if(e.target.className =="button"){
e.target.parentNode.remove();
document.querySelector(".layover").remove();
}
});
/////////////////////////////////////////////////////
