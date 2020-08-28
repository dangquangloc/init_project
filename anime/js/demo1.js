var body = document.querySelector('.main');
body.onclick =function (){
    var boy = document.querySelectorAll('.list');
     for(var i =0;i<boy.length;i++){
       boy[i].classList.remove('down');
     }
   }