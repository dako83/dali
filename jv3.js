

//let str = "tekla  barbare  lazare";

//let str2=str.toUpperCase(); //დიდ ასოებში გადაყვანა

//let str3=str.trim(); // მარჯვენა და მარცხენა სიცარიელე 

//let newstr= str.replace("barbare", "babiko"); // ჩანაცვლება სიტყვების 

//document.getElementById("output").innerHTML = str.includes("tekla");// შეიცავს თუ არა სტრინგი სიტყვას "tekla"

//document.getElementById("output").innerHTML = str.slice(7,14); //გამოიტანს სიტყვა რომელიც წერია შუაში

//document.getElementById("output").innerHTML = str.startsWith("lazare"); // იწყება თუ არა სტყვა "lazareti"

//console.log(str2);

//console.log(str3);

let img = "imege2/2"


let link = "https://getbootstrap.com/docs/5.1/components/card/"

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
document.getElementById("inner").innerHTML = card




