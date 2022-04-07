var count = 0;
var countElement = document.getElementById("countName");
//var btnclick = document.querySelector("#btn-click");
//btnclick.addEventListener("click",clickEventHandler )
//
//
//function clickEventHandler() {
//    
//}
var countIncrement = document.querySelector("#count-increment");
countIncrement.addEventListener("click",buttonClicked)
function buttonClicked(){
    count = count+1;
    console.log(count);
    countElement.textContent = count;
    document.querySelector("#countName").style.fontSize =80+ count +"px"
    }
var countDecrement = document.querySelector("#count-decrement");
countDecrement.addEventListener("click",buttonClick)
function buttonClick(){
    count=count-1;
    console.log(count);
    countElement.textContent = count;console.log(count);
    countElement.textContent = count; 
}
var countReset =  document.querySelector("#btn-reset");
countReset.addEventListener("click",buttonClear)
function buttonClear(){
    count=0;
    console.log(count);
    countElement.textContent = count;
}





