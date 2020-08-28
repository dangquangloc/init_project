document.addEventListener('DOMContentLoaded',function(){
  var menu_push = document.getElementsByClassName('upper-nav');
  var list = document.getElementsByClassName('list');
  var aid = document.querySelector('.left-banner');
  var local_aid = aid.offsetTop;
  var grid = document.querySelector('.grid');
  var local_grid = grid.offsetTop;
  for(var i=0;i<menu_push.length;i++){
    menu_push[i].onclick =function(){
      var id_push = this.getAttribute('data-nav');
      var show = document.getElementById(id_push);
      if(show.classList[2]=='on'){
        show.classList.remove('on');
        show.classList.remove('down');
        this.classList.remove('on');
      }
      else{
        for(var i = 0;i<list.length;i++){
          list[i].classList.remove('down');
          list[i].classList.remove('on');
        }
        for(var i = 0;i<menu_push.length;i++){
          menu_push[i].classList.remove('on');
        }
        this.classList.add('on');
        show.classList.toggle('down');
        show.classList.toggle('on');
      }
    }
  }// end vong for click o menu
// animation cho Aid
  window.addEventListener('scroll',function(){
    console.log(pageYOffset);
    if((window.pageYOffset>=local_grid)&&(window.pageYOffset<(local_grid+300))){
      aid.classList.add('show');
    }
    else{
      aid.classList.remove('show');
    }
    
  })
})