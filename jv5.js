
// fahrenhei

   function convertor5(fahrenheit){

   let resul=(5/9)*(fahrenheit-32);
   return resul.toFixed(2);
  
 }
 console.log(convertor5(52));


 document.getElementById("output").innerHTML =convertor5(52);




// ორი რიცხვის ნამრავლი 

function convertor2(num1, num2){

    let resul=num1*num2;
    
    //return resul.toFixed(1);//ათეულეამდე
    //return resul.toFixed(2);// ასეულებამდე
     return resul.toFixed(0);// ერთეულებამდე 
   
  }
  console.log(convertor2(1.5, 2.35));




// "bootstrap card" html - ში 

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
document.getElementById(selector).innerHTML =  card


}
mycard("https://getbootstrap.com/docs/5.1/components/card/","imege2/2","inner");
mycard("https://getbootstrap.com/docs/5.1/components/card/","imege2/2","inner2");


 
 
// სტრინგში გაფილტრავს სიტყვა "html" და დააბრუნებს ახალ სტრინგს  "html" 



 function convertor3(word){
  let str = "I study word";
  let newstr= str.replace("word", ' ');
  return newstr;
 }
    console.log(convertor3("html"));
    
 //ობიქტები

 let User= {
  name:"admin",

  email:"admin@info.ge",
  role:2,
  
  checkadmin:function(){
    if(this.role == 1)
    {return true;}
  

    return false;
  },
}

//User.role=2;

let key=Object.keys(User);
let val=Object.values(User);
let all=Object.entries (User);

console.log(all)




