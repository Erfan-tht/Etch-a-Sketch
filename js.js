let userReqGrid = window.prompt("Enter grid Numbers in a row (1-32) ?")
let gridMaker = Number((512)/(userReqGrid))
let pixleMaker = gridMaker + "px"
let gridChild ; 
let contDiv = document.querySelector(".containers")
let targetDiv;
let isHolding = false
let eraser = document.querySelector("#Eraser")
let clear = document.querySelector("#Clear")
let dark = document.querySelector("#Dark")
let brush = document.querySelector("#Brush")
let brushHolding = false ;
let earserClicked = false ;
function creatGrids(userReqGrid) {
    if (userReqGrid >= 1 && userReqGrid <= 32 ) {
    for ( i = 0 ; i< (userReqGrid*userReqGrid) ; i++){
gridChild = document.createElement("div")
gridChild.setAttribute("class" , "gridDiv")
gridChild.style.width = `${pixleMaker}`
gridChild.style.height = `${pixleMaker}`
gridChild.style.backgroundColor = 'white'
contDiv.appendChild(gridChild) 
} } else if  ( userReqGrid < 1 || userReqGrid > 32) { 
     userReqGrid = window.prompt("wrong Entry !!! (1-32) ")
     creatGrids(userReqGrid)
     return
     

 }
};
creatGrids(userReqGrid)
colorChanger()
brush.addEventListener('click',() => {
earserClicked = false
colorChanger()
})
clear.addEventListener('click' , () =>{
contDiv.innerHTML = ''
colorChanger()
creatGrids(userReqGrid)
})
function colorChanger (){

contDiv.addEventListener('mousedown' , (e)=> {
    if (e.target.classList.contains('gridDiv')){
    isHolding = true
    if(!earserClicked){
    const r = Math.floor( Math.random()*255) 
    const g = Math.floor( Math.random()*255) 
    const b = Math.floor( Math.random()*255)  
   e.target.style.backgroundColor = `rgb(${r},${g},${b})`
}
else{e.target.style.backgroundColor = 'white'}
}
   targetDiv = e.target;
})
contDiv.addEventListener('mousemove' , (e)=> {
    if (isHolding && e.target.classList.contains('gridDiv') && targetDiv !== e.target){
        if(!earserClicked){
    const r = Math.floor( Math.random()*255) 
    const g = Math.floor( Math.random()*255) 
    const b = Math.floor( Math.random()*255)  
         e.target.style.backgroundColor = `rgb(${r},${g},${b})` 
        } 
         else  { e.target.style.backgroundColor = 'white' 
        } 
        
      
   targetDiv = e.target;} 
   
})
   document.addEventListener('mouseup' , ()=> {
    isHolding = false 
    targetDiv = null 
   });
   contDiv.addEventListener('mouseleave' , ()=> {
    isHolding = false 
    targetDiv = null 
   });
}


eraser.addEventListener('click' , ()  => { 
    earserClicked = true

});


