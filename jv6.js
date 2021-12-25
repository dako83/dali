let User= {
  name:"admin",
  img:"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photo.png",

  email:"admin@info.ge",
  role:2,
  
  checkadmin:function(){
    if(this.role==1)
    {return `<span class="badge bg-success">ადმინ</span>`;}
  

    return `<span class="badge bg-success">მომხმარებელი</span>`;}
}

//User.role=2;

let key=Object.keys(User);
let val=Object.values(User);
let all=Object.entries (User);



mycards.innerHTML=`<div class="card" style="width: 18rem;">


<img src="${User.img}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${User.name}</h5>
  <p class="card-text">${User.email}</p>
  ${User.checkadmin()}
</div>
</div>`


