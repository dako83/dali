

let butt=document.querySelector ('.togh');
let froms=document.querySelector ("input")

butt.addEventListener ('click',function(){

// მინიჭება რედაქირება ატრიბუტის 

    froms.setAttribute ('type','password') 
//forms.type="password";

//ატრიბუტის წაკითვა 
// froms.type

//ატრიბუტის განულება 
//froms.type=''


// ატრიბუტის წაშლა 
//froms.removeAttribute ('type');

//console.log()


// მნიშვნელობის გამოტანა 
console.log (froms.getAttribute('data-id'))
})

let togll=document.querySelector ('#basic-addon1');
let toghinp=document.querySelector('#myinp');
let icon=document.querySelector ('.bi')


togll.addEventListener ('click', function(){

    if(icon.classList[1] == "bi-eye-slash-fill") {
        icon.classList.replace('bi-eye-slash-fill','bi-eye-fill')}
        else { icon.classList.replace('bi-eye-fill','bi-eye-slash-fill')}
       

  if(toghinp.type =="password") {
      toghinp.type='text'}
      else {toghinp.type='password'}
  }
)

// სტილები , მაგ : ზედა მაგალიშტში პაადიინგის გაკეთება 
toghinp.style.padding= "25px" ;
toghinp.style.backgroundColor="#0000"


let product=[
    {
      name:"გიორგი",
      email:"admin@mail.com",
      isAdmin:true,
      price:18,
      avatar:"imege2/1.png",
      age:25,
      weight:[154,65,88,90,221]
    },
    {
     name:"ზურა",
     email:"admin@mail.com",
     isAdmin:false,
     price:18,
     avatar:"imege2/1.png",
     age:50,
     weight:[154,65,88,90,221]
   },
   {
     name:"ნიკა",
     email:"admin@mail.com",
     isAdmin:false,
     price:18,
     avatar:"imege2/1.png",
     age:60,
     weight:[154,65,88,90,221]
   },
   {
     name:"მარი",
     email:"admin@mail.com",
     isAdmin:true,
     price:18,
     avatar:"imege2/1.png",
     age:18,
     weight:[154,65,88,90,221]


         },]
        
         product.forEach((el,index) => {

            let wightall='';
            el.weight.forEach (wiegh=>{
                wightall +=`<button class="btn btn-info m-2"data-weight="${wiegh}" data-id="${index}">${wiegh} გრამი</button >`;

            })
            apps.innerHTML +=`<div class="col-lg-4 mb-3"><div class="card" >
  
          <img src="${el.avatar}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${el.name}</h5>
            <h5 class="card-title" id="myid${index}" data-price="${el.price}">${el.price} ლ</h5>
            ${wightall}
           </div> 
          </div>
          </div>`
          
         // res.addEventListener("click", function(){
    //numb = 0
    //nums.innerText = numb;
             
         })

         let allbtn=document.querySelectorAll ('.btn');

         allbtn.forEach(btns => {
             btns.addEventListener('click', function(){
             let weight=this.getAttribute('data-weight');
             let id=this.getAttribute ('data-id');
             let outprice=document.getElementById('myid'+id);
             console.log(weight)
             outprice.innerText=`${weight*outprice.getAttribute('data-price')} ლ`
        
        })

    });


    document.querySelectorAll('.btnround').forEach(els=>{
      els.addEventListener('click', function(){
        let color = this.style.backgroundColor;
        document.body.style.transition = "all .6s"
        document.body.style.backgroundColor = color
      })
    })
    
    

    
    //dec.addEventListener("click", function(){
       // nums.innerText = --numb;
    let inp = document.querySelector('#testinpuits');
    
    inp.addEventListener('input', function(){
      let val = this.value;
      let upper = false;
    
      //  სპეციალური სიმბოლო
      let ss = val.search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gi)
    
      val = val.split("");
      // დიდი ასო გადამოწმება
      let findupp = val.some(el=>{
        return el == el.toUpperCase();
      })
    
      // რიხვის გადამოწმება
      let findnum = val.find(el=>{
        return el * 2  ;
      })
    
      let outdiv = document.querySelector('#created');

      let ind = 0;
    
      
      let buttonnew = document.querySelector("#nwel").addEventListener("click", function(){
      // html ტეგის შექმნა
      let ul = document.createElement('ul');
      let li = document.createElement('li');
      });
         
      li.innerText = `(${ind}) ლისთის კონტენტი`
li.classList.add('bg-dark', 'text-white', 'p-3')
ul.appendChild(li)

// html შექმნილი ტეგის გენერირება 
outdiv.appendChild(ul);

ind++;

//ul.addEventListener("dblclick", function(){
 // this.remove();
//})

    })


