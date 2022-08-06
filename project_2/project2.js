let oriListLink = document.querySelectorAll('.ori-list-link');
let oriList2 = document.querySelectorAll('.ori-list2');
let ori = document.querySelector('.ori');

for(let i=0;i<oriListLink.length;i++){
  oriListLink[i].addEventListener('mouseenter', function(){
    oriList2[i].classList.add('active');
  });

   ori.addEventListener('mouseleave', function(){
    oriList2[i].classList.remove('active');
  });
}