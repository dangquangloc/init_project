document.addEventListener('DOMContentLoaded',function(){
   var button = document.querySelectorAll('.button ul li');//lay thong tin button o html
   var slides =document.querySelectorAll('.slide ul li');//lau thong tin tat ca slide o html
   console.log(slides.length);
 // xu ly bat su kien nut
   for(var i =0;i<button.length;i++){
        button[i].addEventListener('click',function(){
            for(var j =0;j<button.length;j++){
                //xoa het cac nut co color gray truoc do
                button[j].classList.remove('act');
            }
            //doi mau nut thanh` gray khi bat su kien bam nut do
            this.classList.add('act');
            var local_now = 0;//set vi tri hien tai la 0
            var local = this;//set local lay button[i] hien tai
            for(var local_now =0;local = local.previousElementSibling;local_now++){};//dem phan tu truoc,neu co thi vitri + 1,khong co null thi vi tri se la 0
            // console.log(local_now); //vi tri cua nut button hien tai
            for(var k =0;k<slides.length;k++){
                slides[k].classList.remove('active');//khi click xoas het cac slide hien tai
            }
            slides[local_now].classList.add('active');
        })
    }// end xu ly bat su kien nut
    timeLoad();
     function timeLoad(){
        var time = setInterval(function(){
            var location = document.querySelector('.slide ul li.active')//lay thong tin hien tai cua class active
            var location_now = 0;//set vi tri hien tai la 0
            for(var location_now =0;location = location.previousElementSibling;location_now++){};//dem phan tu truoc,neu co thi vitri + 1,khong co null thi vi tri se la 0
             if(location_now < (slides.length-1)){
                for(var j =0;j<slides.length;j++){
                    slides[j].classList.remove('active');// sau 10s xoa slide hien tai
                    button[j].classList.remove('act');// sau 10s xoa button hien tai
                }
                 slides[location_now].nextElementSibling.classList.add('active');// cho slide ke tiep gia tri la active
                 button[location_now].nextElementSibling.classList.add('act');// cho button ke tiep gia tri la act
             }
             else{
                for(var j =0;j<slides.length;j++){
                    slides[j].classList.remove('active');// sau 10s xoa slide hien tai
                    button[j].classList.remove('act');// sau 10s xoa button hien tai
                }
                slides[0].classList.add('active');// cho slide ke tiep gia tri la active
                button[0].classList.add('act');// cho button ke tiep gia tri la act
             }
            
        },7000);
    }
})