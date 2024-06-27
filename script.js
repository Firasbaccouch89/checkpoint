let bx-star = documegent.getElmentsByclassName("bx-star")
console.log("bx-star",heart_btn);
for(let i =0; i < bx-star.length;i++){
    bx-star[i].addEventlistener("click",fonction (){
if(bx-star[i].style.color == "white"){
    bx-star[i].style.color="yellow";
}else{
    bx-star[i].style.color="white";
}
    
})
}


