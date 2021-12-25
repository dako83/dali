let product= {
    wona:"5კგ",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2VESUVkl1-L09AuBV7U3SNZLr_ZB9iqw2_4ARQUg3G7m5Mnf6QqQCtYEf-xmMr23tpo&usqp=CAU",
    raodenoba:"50 ",
    fasi:"5 ლარი",
 
      checkadmin:function(){
      if(this.raodenoba>0)
      {return `<span class="badge bg-success">მარაგშია: ${product.raodenoba} ცალი </span>`;}
    
  
      return `<span class="badge bg-success">არ არის მარაგაში</span>`;}
  }
  
 
  

  mycards.innerHTML=`<div class="card" style="width: 18rem;">
  
  <img src="${product.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> რაოდენობა :${product.raodenoba} ცალი</h5>
    <p class="card-text">ფასი:${product.fasi}</p>
    ${product.checkadmin()}
  </div>
  </div>`
  
  let key=Object.keys(product);
  let val=Object.values(product);
  let all=Object.entries (product);
  
  console.log(all);
  

  //მასივი


  // მაგალითი რისთვის შეიძლება გამოგვადგეს მასვი 

  //let button1=document.getElementsByClassName('btn-success')[0].addEventListener("click", function(){
   //   let colors=this.classList[1];
   //   document.body.classList.add(colors.replace('btn','bg'))
    
  //});
 // let button2=document.getElementsByClassName('btn-warning')[0].addEventListener("click", function(){
   // let colors=this.classList[1];
    //document.body.classList.add(colors.replace('btn','bg'))
    
 // });
  //let button3=document.getElementsByClassName('btn-primary')[0].addEventListener("click", function(){
    //let colors=this.classList[1];
   // document.body.classList.add(colors.replace('btn','bg'))
  
    //}) ;
  //let button4=document.getElementsByClassName('btn-danger')[0].addEventListener("click", function(){
    //let colors=this.classList[1];
    //document.body.classList.add(colors.replace('btn','bg'))
 
//});


// ზემოთ რაც წერია დავწერეთ ქვემოთ ( button მასივის მიხედვით )

//let button=document.getElementsByClassName('btn');

//for (let i=0; i<button.length;i++) 
//{const btn=button[i];
   // btn.addEventListener("click", function(){
       // document.body.classList.add(btn.classList[1].replace('btn','bg'))
    
//})

//}
 
// მასივი 



  //let numbersarr=[1,2,3,4,5];
  //numbersarr. splice (3,0,"naw mamber","სდდდ");


  //console.log(numbersarr)

  //*array / array mchhad

 // numbersarr.push ახალი წევრის დამატება ბოლოში

// numbersarr.unshift ელემენტის დამატება თავში 
// numbersarr.pop () ბოლო ელემენტის წაშლა მასიშვი 
  //*/
 // numbersarr.shift პირველი ელემენტის დაშლა მასივში 
 //numbersarr. splice შლის რამდენიმეს მასივიდან   numbersarr. splice (1,3);
 //numbersarr. splice (3,0,"naw mamber");სამი პარამატრეის შემდეგ დაამატებს ახლს 
 // numbersarr. splice (3,0,"naw mamber","სდდდ"); შლის/ამატებს გადაცემული ინდექსიის მიხედვით 

 
 //ოპერაციები მასივებზე :

 //let numar=[15,7,800,1200,6900,77,36,5];

 //numar.sort(); //სორტირება

 //numar.reverse(); მასივის შებრუნება 
 
 //let arstr=numar.reverse().toString(); მსივის სტრიგად გადაქცევა


 //console.log(arstr.replaceAll(","," "))  მძიიემების ამოშლა სტრინგებში 



 // ზრდადობით დალაგება 


 //let numar=[15,7,800,1200,6900,77,36,5];

 //let arstr = numar.sort(mysort); //    სორტირება

 //function mysort(a,b) {
    // return a-b
   // }
    //console.log (arstr)
    //console.log (arstr[numar.length-1]) უდიდესი ელემენტის ამოჭრა


    //კლებადობით დალაგება:



    //let numar=[15,7,800,1200,6900,77,36,5];

 //let arstr = numar.sort(mysort); 

 //function mysort(a,b) {
    // return b-a
   // }
    //console.log (arstr)



    //რაიმე რიცხვზე მეტის ძებნა ( ახლოს მდებარე ესეთს დააბრუნებს )



   // let numar=[15,7,800,1200,6900,77,36,5];

    //let findel = numar.find( el=> {
       // return el>7
   // })
    //   console.log (findel)
   

       // ყველა ელემენტის დაბრუნბე (filter ) რომელიც აკმაყოფილებს პირობას ყველა რიცხვს აბრუნებს (ფილტრი ანუ ქმნის ახალ მასივს)

     // let numar=[15,7,800,1200,6900,77,36,5];

   // let findel= numar.filter( el=> {
   //     return el>1000 && el<5000;
   // })
     //  console.log (findel)
   

           // ყველა ელემენტის დაბრუნბე (filter ) რომელიც აკმაყოფილებს    და არის მსგავსი 
           //პირობას ყველა რიცხვს აბრუნებს 


     // let numar=["red","black","white","black"];

    // let findel= numar.filter( el=> {
      //  return el =="black";
   //  })
      // console.log (findel)



// თუ ერთ ერთ წევრი მაინც აკმაყოფილებს მოცემულ პირობას ბრუნდებ true 



      // let numar=["red","black","white","black"];

     //  let findel= numar.some( el=> {
           //return el =="black";
    //   })
        //  console.log (findel)



          // ყველა უნდა აკმაფილებდეს პირობას რომ დაბრუნდეს true




  