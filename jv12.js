
//let container=document.querySelector('.container')


document.querySelectorAll('.box').forEach(box=>{
    box.addEventListener('click', function(){
        this.children[1].classList.toggle('show')
    })
})
