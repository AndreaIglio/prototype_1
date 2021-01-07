$(document).ready(function (){
  // store the element in el
  let el = document.getElementById("hamburger");
  let menu = document.getElementById('hamburger_div');

  /*
   * Add a listener for click event
   * Which will trigger function 'navbarMobile'
   * On mouse click
   */

  el.addEventListener('click', navbarMobile);


    function navbarMobile (){

     if(menu.style.display == 'inline'){
         menu.style.display = 'none';
     }
     else {
         menu.style.display = 'inline';
     }
    }

})