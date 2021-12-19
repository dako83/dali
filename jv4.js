//let age =50;
//let price=1.55555;
//let weigth=1.600;

let price=document.getElementById ("val1").value;
let weight=document.getElementById ("val2").value;

//let sum= price*weigth;
let mynumber=47;
let sum=Number (price)+Number(weight); //რიცხვში გადაყვანა
//console.log(typeof(age));
//console.log(price * weigth);
 //console.log (sum, sum.tofixed(3));

// console.log(sum);
 console.log(mynumber.toString() ); //რიცხვის სტრინგში გადაყვანა
  

 function mycard(link,img ,selector){
     //let img = "imege2/2"

 //let link = "https://getbootstrap.com/docs/5.1/components/card/"
 
 let card = `
 <div class="col-lg-4 pt-2">
 <div class="card pe-0 ps-0" style="width: 18rem; border: 1px solid whitesmoke">
 <img src="${img}" class="card-img-top" alt="...">
 <div class="card-body">
   <h5 class="card-title">Card title</h5>
   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <a href="${link}" target="_blank" class="btn btn-danger">Go somewhere</a>
 </div>
 </div>
 </div>
 `
 document.getElementById(selector).innerHTML = card
 

 }
 mycard("https://getbootstrap.com/docs/5.1/components/card/","imege2/2","inner");
 mycard("https://getbootstrap.com/docs/5.1/components/card/","imege2/2","inner2");
  
 //დოლარის კურსის გამოთვლა 

 //function convertor(val="GEL",count){
  // let USD=3.150;
   
 //  let resul=count/USD;
   //return resul.toFixed(2);

 //}
 //console.log(convertor("GEL",25));


//დოლარზე და ევროზე გამოთვლა 

 //function convertor(val="USD",count){
  //let USD=3.150;
  //let EUR=4.554;
  //let resul;
  //if(val=="USD"){
  // resul=count/USD;

//}
//if(val=="EUR"){
  // resul=count/EUR;
//
//}


//return resul.toFixed(2);
// }
//console.log(convertor("USD",25));






//ფუნქციით შეტყობინების გამოტანა

//function convertor (count, gift=false)


//{
  //if(count>100 && gift==true){
  //  alert("თქვენ გეკუთვნით საჩუქარი")
  //}
//}


//convertor(120, true)

//მნიშვნელობის დაბრუნება 

let mycalc=function (){
  return 25;
}

console.log(mycalc())