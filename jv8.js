
let product= {
  wona:"5კგ",
  img:"https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg",
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



// მასივები 




 let list = ["Ford", "Mustang", 5.4, ["V6", "V8"], {variant:"boss 302", variant2:"Shelby", variant3:"Saalen", year:["2018, 2022"]}];
 

list. splice (3,0,"გამოდის");
list. splice (4,1,"v8");
 
list. splice (5,0,"ტიპის ძრავით, ასევე მისი  მოდიფიკაციებია");

let list2=Object.values(list[6]);
let list1 =list. splice(0,6)
let list3=list2.splice(3)
list3.splice(0,1,"2018 დან 2021 მდე")




list2.splice(2,1,'საუკეთესო მოდელები გამოდიოდა')


let nawauto = list1.concat(list2,list3);

let nawauto1=nawauto.toString();
console.log(nawauto1.replaceAll(","," "))  




//output : 1234.56

//console.log (nawauto1)
//console.log(list1)
//console.log(list2)
//console.log(list3)


//მასივი 

let myclass=["მეორე", 15,20,"მესამე","მეოთხე","მეორე", 30,"მეხუთე"]

myclass.push ("მეექვსე")
myclass.unshift ( "პირველი")
myclass.pop ()
myclass.shift ()
myclass.splice (2,0,"front-and")
myclass.splice(2,1,"back and")

//ყველა ელემენტი

//let findel= myclass.filter( el=> {
    // return  el=="მეორე";
    //})
      // console.log (findel)

//console.log (myclass)

//ერთი ელემენტი 

let findel= myclass.some( el=> {
  return  el=="30";
 })
    console.log (findel)

console.log (myclass)


//for 

let cars = ["Broccoli", "Cabbage", "Carrot", "Garlic", "Ginger", "Mushroom"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("cars").innerHTML = text;


