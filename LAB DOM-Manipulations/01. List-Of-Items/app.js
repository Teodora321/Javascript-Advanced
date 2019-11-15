function addItem() {
    let itemToAdd = document.getElementById('newItemText').value;
    let parent = document.getElementById('items');

    let newLi = document.createElement('li');
    newLi.textContent = itemToAdd;
    parent.appendChild(newLi);
  
}