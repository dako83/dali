//let childiv=document.querySelector('#test').parentElement;// გვისელექტებს მშობელ ელემენტს
let container=document.querySelector('.container').children;//გვისელექტებს მშობელ ტეგს

  //console.log(childiv);
  //console.log(container[0].children)
  //მესამე ელემენტის (დივის)დასელექტება

  //let container=document.querySelector('.container');  
  //console.log(container.children[0].children[2].children[0]);

  //მეზობლები ქვედა (next), ზედა (previous)

//let next=document.querySelector('#sibls').nextElementSibling;

//console.log(next)

// ზედა და ქვედა მეზობელი 
let next=document.querySelector('#sibls').nextElementSibling;
let prev=document.querySelector('#sibls').previousElementSibling;
let allsib=document.querySelector('#sibls').parentElement.children;

//console.log(allsib);

let p = document.querySelector('.col-lg-5').children;
    
h
