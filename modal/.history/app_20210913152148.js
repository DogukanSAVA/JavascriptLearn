const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click',function(){  
modal.classList.add("open-moda");


})



closeBtn.addEventListener("click",function(){     
          modal.classList.remove("open-modal");
          
});