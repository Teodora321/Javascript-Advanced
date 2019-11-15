function solve() {
   let button = document.getElementById('searchBtn');
   button.addEventListener('click', search);

   let selected = document.getElementsByClassName('select');
   if(selected.length>0){
      Array.from(selected).forEach(tr=>tr.classList.remove('select'));
   }

   function search(){
      let inputElement = document.getElementById('searchField');
      let inputValue = inputElement.value;

      let elements = Array.from(document.querySelector('table tbody').children);

      elements.forEach(e => {
         Array.from(e.children).forEach(child=>{
            if(child.textContent.includes(inputValue)){
               e.classList.add('select')
            }
         });
      });
   }
}