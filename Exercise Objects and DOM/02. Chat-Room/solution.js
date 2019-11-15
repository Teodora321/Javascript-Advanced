function solve() {

   let button = document.getElementById('send');
   button.addEventListener('click', clickFunc);

   function clickFunc() {

      let messageElement = document.getElementById('chat_input');
      let messageElementValue = messageElement.value;

      if (messageElementValue !== '') {

         let typing = document.createElement('div');
         typing.className = 'message my-message';
         typing.textContent = messageElementValue;

         let chatMessage = document.getElementById('chat_messages');
         chatMessage.appendChild(typing);
         messageElement.value = '';

      }
   }


}
