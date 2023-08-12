let btn =document.querySelector('.btn');
let dise =document.querySelector('.dise')
let dise2 =document.querySelector('.dise2')

let diseIcon =[
    '1.png','2.png','3.png','4.png','5.png','6.png',        
]

dise.innerHTML =`<img class='img img1' src="1.png" alt="">`
dise2.innerHTML =`<img class='img img1' src="2.png" alt="">`

// console.log(dise[0])

btn.addEventListener('click',()=>{

let random =()=>{
    let num =Math.floor(Math.random()*7)
    let num2 =Math.floor(Math.random()*7)
   


 
    if(0<num){
        dise.innerHTML =`<img class='img img1' src="${num}.png" alt="">`
        dise2.innerHTML =`<img class='img img1' src="${num2}.png" alt="">`
      
        
    }else{
        return false;
    }





}
random();


})