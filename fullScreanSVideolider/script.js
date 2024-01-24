let slids =document.querySelectorAll('.slidecontianer');
let index=0;

function next(){
slids[index].classList.remove('active');
index=(index +1) % slids.length;
slids[index].classList.add('active');
}
function prev(){
  slids[index].classList.remove('active');
  index=(index -1 + slids.length) % slids.length;
  slids[index].classList.add('active');
  }