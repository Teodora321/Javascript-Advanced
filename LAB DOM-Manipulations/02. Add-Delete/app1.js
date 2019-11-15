function addItem() {
    let addItem = document.getElementById('newText');
    let items = document.getElementById('items');
    let li = createElement('li', addItem.value + ' ');
    
    let aElementAttribute = { name: 'href', value: '#' };
    let aElementEventListener = { type: 'click', function: deleteItem };
    let deleteLink = createElement('a', '[Delete]', aElementAttribute, aElementEventListener);

    appendChilds(li, [deleteLink]);
    appendChilds(items, [li]);

    clearText(addItem);

    function deleteItem() { items.removeChild(this.parentNode); }
    
    function createElement(tagElement, text, attr, eListener) {
        let element = document.createElement(tagElement);
        element.textContent = text;
        if (attr) element.setAttribute(attr.name, attr.value);
        if (eListener) element.addEventListener(eListener.type, eListener.function);
        return element;
        
    }
    function clearText(element) { element.value = ''; };

    function appendChilds(parent, childs) {
        childs.forEach((child)=>parent.appendChild(child))
    }
}