const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', (e) => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});


// $(document).ready(function(){
//     $("#burger").click(function(){
//         $("#menu").fadeToggle("slow");
//     });
//   });