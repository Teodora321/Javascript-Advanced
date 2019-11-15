function solve () {
   let buttons = [...document.querySelectorAll('.add-product')]
   buttons.forEach(b => b.addEventListener('click', add))
  
   document.querySelector('.checkout').addEventListener('click', checkout)
   let totalPrice = 0
   let list = {}
  
   let textArea = document.querySelector('textArea')
  
   function add () {
     let product = this.parentNode.parentNode
     let name = product.querySelector('.product-title').textContent
     let money = +product.querySelector('.product-line-price').textContent
     list[name] = name
     totalPrice += money
     textArea.value += `Added ${name} for ${money.toFixed(2)} to the cart.\n`
   }
  
   function checkout () {
     textArea.value += `You bought ${Object.values(list).join(
       ', '
     )} for ${totalPrice.toFixed(2)}.`
  
     buttons.forEach(b => b.removeEventListener('click', add))
     this.removeEventListener('click', checkout)
   }
 }