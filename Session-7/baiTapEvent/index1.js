const btn = document.getElementById('btn');
const ex1 = document.getElementById('ex-1');
btn.onclick = function() {
  if(ex1.style.display == 'none')
  {
    ex1.style.display = 'block';
  } 
  else{
    ex1.style.display = 'none';
  }
}