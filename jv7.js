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


//ძებნა რომელიმე წევრის  forEach ( ციკლის შიგნით ბეჭდავს, არ ცვლის ორიგინალ მასივს )

//  let numbarsarr=["0","red","black","white","black"];
  // let naumber=[12,7,800,1200,6900,77,36,5]
      
  // numbarsarr.forEach (el => 
    //{console.log(el=="0");})

    
    //ყველაფერი 2 ზე  გადავამრავლეთ და ახალი მასივი შევქმენით map(ქმნის ახალს მასივს )
    
    let numbarsarr=["0","red","black","white","black"];
    let numar=[12,7,800,1200,6900,77,36,5];

    //let nwfor=numar.map(el=> {return el*2;
    //})
    //console.log(nwfor);

    // map -ს შეგვიძლია სამი პარამატრი ადავცეთ ( el, index, numar)

     // 1.მაგალითი 

    //let nwfor=numar.map(el,index,numar ) => {
     //{return `index: ${index} | value: ${el}`;
    //})
    //console.log(nwfor);
   
     // 2.მაგალითი 


      //if(index <=5) {return el;
    //}
   //})
    //console.log(nwfor);

    // includes('black') // ეძებს ელემენტს და აბრუნებს booleon  


    //for ფუნქცია 

     // for (let i=0;i<array.length;i++) {}
// მაგ1: array.length=8
     // for (let i=0;i<8;i++) {
       // console.log("text")

      //}
      //მაგ:2 

      //for (let i=0;i<numar.length;i++){
        //console.log(numar[i])
     // }
      //მაგ:3

     // let myaraat=[];
     /// for (let i=0; i<numar.length;i++)
      //{myaraat.push(numar[i]*5)} //push ის მესვებოით ჩაიწერა numar ის ელემენტები 
     // console.log(myaraat)

      მაგ:4 

     // let myaraat=false;

     // for(let i=0;i<numar.length;i++) {
       // if(numar[i]==12) {
        //  myaraat=true} else{myaraat=false}}
      
     // console.log(myaraat)


      // მაგალითი 

      let Users=[
         {
           name:"გიორგი",
           email:"admin@mail.com",
           isAdmin:true,
           phone:555888888,
           avatar:"imege2/1.png",
           age:25
         },
         {
          name:"ზურა",
          email:"admin@mail.com",
          isAdmin:false,
          phone:555888888,
          avatar:"imege2/1.png",
          age:50
        },
        {
          name:"ნიკა",
          email:"admin@mail.com",
          isAdmin:false,
          phone:555888888,
          avatar:"imege2/1.png",
          age:60
        },
        {
          name:"მარი",
          email:"admin@mail.com",
          isAdmin:true,
          phone:555888888,
          avatar:"imege2/1.png",
          age:18


              },]


        function shesacvleli(id)
       
        {
           admincard.innerHTML='';
          let Usersfilter;
          if (id == 1) {
            Usersfilter=Users.filter (el=>
             {return el.isAdmin==true;
            })
          }else if(id==2){
            Usersfilter=Users.filter(el=>{
              return el.isAdmin==false;
            })
          }else{Usersfilter=Users;
          }


         filterdata(Usersfilter);
        }


        function search(text){
          admincard.innerHTML='';
          let Usersfilter;

          Usersfilter=Users.filter(el =>{
            return !el.name.search(text)})
        

            document.getElementById("ჩანაწერის რაოდენობა").innerHTML = `${Usersfilter.length} ჩანაწერის რაოდენობა`

      filterdata(Usersfilter);}

      function filterdata(Usersfilter){Usersfilter.forEach(element => {
          let role;
         if (element.isAdmin) {
            role= `<span class="badge bg-success">ადმინ</span>`;}
  

           else {role =`<span class="badge bg-danger">მომხმარებელი</span>`;
       }
         

          admincard.innerHTML +=`<div class="col-lg-4 mb-3"><div class="card" style="width: 18rem;">

        <img src="${element.avatar}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.email}</p>
          ${role}
         </div>
        </div>
        </div>`

        });
      }


      //IF პირობა 
       // == შედარების ოპერატორი 
       //= მინიჭების ოპერატორი 
       // === ადრის მნიშვნელობას და ტიპებს 
       if (1 == 1)  {

       }
       console.log(1 === "1");
       console.log(1 <"1");
       console.log(1 <="1");
       console.log(1 !== "1"); // პირობის შებრუნება 

       //მაგ: 

       let nime1=2;
       let nime2=0;
       if(nime1>0) { console.log("true")}

      else{console.log("false")}

      
      //თარიღები 
      //let d =new Date ();
      //let day=d.getDate(); //დღევანდელი თარიღი 
      //console.log(day); 
//მაგ 1:

    // let d =new Date (20/12/1998);
     // let day=d.getDate(); //კონკრეტული თარიღი  რა დღეა
     // console.log(day); 
//მაგ 2:
//let d =new Date ();
//let day=d.getDate();
//let month=d.getMonth() +1;
//d.setFullYear(d.getFullYear()+1)// თარიღის მინიჭება 
//let years=d.getFullYear() ;
//console.log(`ახლა არის ${years} წლის ${month}თვე`);

//მაგ 3: // დღეების რაოდენობია გამოტანა 


// let startdata = Date.parse('2021/12/31') -  Date.parse('2021/12/1'); // დღეების რაოდენობია გამოტანა 

// let dey = Math.floor( startdata / (1000*60*60*24));// 1 დღის მილიწამი

// console.log(dey);

// let inc = 10;

// setInterval(() => {

    // let d = new Date();

    // years.innerHTML = d.getFullYear() + "/";
    // month.innerHTML = d.getMonth() + 1 + "/";
    // dey.innerHTML = d.getDate() + "/";
    // hour.innerHTML  = d.getHours() + "|";
    // minute.innerHTML  = d.getMinutes() + ":";
    // secend.innerHTML  = d.getSeconds()  ;
// inc++; // inc ანუ 10 იანს დაამატებს თითოს და ესე გააგრძელებს გამოტანას, inc-- პირიქით დააკლებს 


 //console.log(inc)

//  }, 1000);

 // ან ოპერატორი ||, ენდის ნიშანი &&

// if (1>1 || 2>1) {
  // console.log("asd1")
// }else if (2>8){
  // console.log("asd2")
// }else if (5 == 8){
  // console.log("asd2")
// }else {console.log("asd4") }




let l = 1 == 1 ? 'm' : 's';

if (1 ==1) {
    l = "m"
}else{
    l = "s"
}

// console.log(l)

// ელემენტები 

let ids = document.getElementById("years"); // ელემნტის ძებნა ჰტმლში 

let clasname = document.getElementsByClassName("col-lg-2");

let csssel = document.querySelectorAll(".col-lg-2");

let csssels = document.querySelector(".col-lg-2");

let tag = document.getElementsByTagName("div");


for (let o = 0; o < tag.length; o++) {
  const element = tag[o];
  element.addEventListener("click", function(){
      console.log(this.innerText);
  })
}



ids.innerHTML = "bdsflk"


//
