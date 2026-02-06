/*TODO-list:
1) CLick counter removal, button that start counting from 0 again;
3) Working nav-buttons; 
2) Comment sectioń, publib place where webpage visitors can leave a message what should i add next;
*) Dark mode

*/





let count = 0 

const button = document.querySelector("#cookieBtn")
const counting = document.querySelector("#counter")

button.addEventListener('click', function(){
  count = count + 1,
   counting.textContent =  "Clicks: " + count
})
