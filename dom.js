// ღილაკის დაჭერით გამოსვლა ტეხსტის 


//let but1=document.getElementById("but1");
//let but2=document.getElementById("but2");

//but1.addEventListener("click",function(){ 
    //console.log(this.innerText)
   // document.getElementById("text").innerText=this.innerText
//  })

  //but2.addEventListener("click",function(){ 
    //console.log(this.innerText)
   // document.getElementById("text").innerText=this.innerText
//})


// ზედა მაგალითი სხვანაიარად 
let btn=document.querySelectorAll (".btn");
let reset=document.querySelector ("#reset"); // გასუფთავება

reset.addEventListener("click", function(){
    document.getElementById("text").innerText = ''
})



btn.forEach(el=> {el.addEventListener("click",function()
{document.getElementById("text").innerText+=this.innerText})

})

// mag:

let input=document.querySelector ('#mycontrol');
let msg=document.querySelector ('small');

input.addEventListener('keyup', function(){
    let values = this.value;

      // this.classList.add('border-success'); //კლასის დამატება
    // this.classList.remove('border-lg'); //კლასის წაშლა
    // this.classList.replace('border-lg', 'border-success'); // კლასის ჩანაცვლება
    // this.classList.contains('border-lgs')  // ამოწმებს გვაქვს თუ  კლასი  აბრუნებს boolean
    //this.classList.toggle('border-success'); წაშლა დამატეა 




    if (values == '') {
        msg.innerText = 'ველის შევსება სავალდებულოა!';
        msg.classList.add('text-danger');
    }else if(values.length > 0 && values.length < 11){
        msg.innerText = 'შეიყვანეთ სპეციალური სიმბოლოები!';
        msg.classList.add('text-warning');
    }else{
        msg.innerText = 'ok!';
        msg.classList.add('bg-success', 'text-white');
    }

})
//მაგ:


let modalopen = document.querySelector('.modals');
let modalcontent = document.querySelector('.mymodal');

let closes = document.querySelector('.closes');

// modal open
modalopen.addEventListener("click", function(){
    modalcontent.classList.toggle("show");

    if (modalopen.innerText == "ფანჯრის გახსნა") {
        modalopen.innerText = "ფანჯრის დახურვა"
    }else{
        modalopen.innerText = "ფანჯრის გახსნა"
    }

})

//modal close
closes.addEventListener("click", function(){
    modalcontent.classList.remove("show")
})


let preload = document.querySelector('.preloader');
  window.addEventListener("load", function(){
setTimeout(() => {

    preload.classList.add('loaded')

}, 2000);

}) 

document.addEventListener("click", function(e){
  if (e.target.classList[0] == undefined) {
    modalcontent.classList.remove("show");
  }
}) 

