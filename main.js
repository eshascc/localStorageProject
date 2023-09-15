let allSpans = document.querySelectorAll(".button span");
let theinput = document.querySelector('.parent input')
let theresult = document.querySelector('.result > span');
let theinputval = theinput.value
allSpans.forEach(span=>{
    span.addEventListener('click',(e)=>{
        if(e.target.classList.contains('check-item')){
    checkitem()
    }
    if(e.target.classList.contains('add-item')){
        additem()
    }
    if(e.target.classList.contains('Delet-item')){
        Deletitem()
    }
    if(e.target.classList.contains('show-item')){
        showitem()
    }
    })
})

function acheckemptyinput(){
    if(theinputval == ''){
        theresult.innerHTML = '<span class="value"> please enter a valid search </span>'
        console.log('empty')
    }
}

function checkitem(){
    // acheckemptyinput()
    if(theinput.value !== ''){
   if(localStorage.getItem(theinput.value)){
    theresult.innerHTML = `<span class="value"> Found Local Storage Item Called ${theinput.value}</span>`
    theinput.value=''   
}else{
    theresult.innerHTML =`<span class="value"> No Local Storage Item With The Name ${theinput.value}</span>`
   }
           }else{
            acheckemptyinput()
           }
    }
 

function  additem(){
   if(theinput.value !== ''){
localStorage.setItem(theinput.value,'test')
theresult.innerHTML =`<span class="value"> The Item With The Name ${theinput.value} Has Been Added</span>`
theinput.value ='' 
}else{
    acheckemptyinput()
}
}
function  Deletitem(){
if(theinput.value !== ''){
if(localStorage.getItem(theinput.value)){
    localStorage.removeItem(theinput.value)
    theresult.innerHTML =`<span class="value"> The Item With The Name ${theinput.value} Has Been Deleted</span>`
    theinput.value =''
}else{
    theresult.innerHTML =`<span class="value"> The Item With The Name ${theinput.value} Not Found</span>`
}
}else{
    acheckemptyinput()  
}
}
function  showitem(){
    if(localStorage.length){
theresult.innerHTML=''
for(let [key,value] of Object.entries(localStorage)){
    theresult.innerHTML+= `<span class="key"> ${key}</span>`
}

}else{
    theresult.innerHTML ='<span> local storage is empty</span>' 
}
}