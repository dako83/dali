

document.querySelectorAll('.tabbtn').forEach(tab=>{
    tab.addEventListener('click', function(){
         document.querySelector('.alltab button.active').classList.remove('active');
         document.querySelector('.mytab.active').classList.remove('active');
         this.classList.add('active')
         document.querySelector(this.getAttribute('data-id')).classList.add('active')
    })
}) 