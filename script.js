let spent=0;
const list=document.getElementById('list');
document.getElementById('add').onclick=()=>{
const p=document.getElementById('product').value;
const price=Number(document.getElementById('price').value||0);
if(!p)return;
spent+=price;
document.getElementById('spent').textContent=spent+' DH';
document.getElementById('remaining').textContent=(2000-spent)+' DH';
const li=document.createElement('li');
li.innerHTML=`<input type="checkbox"> ${p} - ${price} DH`;
list.appendChild(li);
document.getElementById('product').value='';
document.getElementById('price').value='';
};
