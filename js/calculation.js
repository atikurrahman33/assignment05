function handleCard(target){
    const selectedItemContainer=document.getElementById('selectedItem')
    
   const itemName= target.parentNode.childNodes[1].childNodes[3].innerText;
   const li=document.createElement("li");
   li.innerText=itemName;
   selectedItemContainer.appendChild(li);


    const value=target.parentNode.childNodes[1].childNodes[5].childNodes[1].innerText;
    const balanceElement=parseFloat(value) ;
   const totalBalance=document.getElementById('totalValue');
   const balanceString=totalBalance.innerText;
   const balanceInt=parseFloat(balanceString);
   const total=balanceElement+balanceInt;
   totalBalance.innerText=total;  
}






