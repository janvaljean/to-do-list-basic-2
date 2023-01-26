let input = document.querySelector('#todo-input');
let add = document.querySelector('#todo-button');
let toplam = document.querySelector('#toplam');
let tamamlanan = document.querySelector('#tamamlanan');
let liste = document.querySelector('#todo-ul');
toplam = 0
tamamlanan = 0
//add new elements
console.log(toplam)

add.onclick = () => {

    liste.innerHTML += `<li class="newLi">
    <i class="fa-solid ok fa-check"></i>
    <p class="par">${input.value}</p>
    <i class="far fa-trash-alt"></i>
    </li>`;
    toplam ++
    console.log(toplam);
    document.querySelector('#toplam').textContent = toplam;


    document.querySelectorAll('.fa-trash-alt').forEach(listItem => {
        listItem.addEventListener('click', function () {
            var li = this.parentNode
            li.remove()
            toplam --;
            toplam.textContent = toplam;
            
        }) })  
    
    let par =  document.querySelector(".par")   
    document.querySelectorAll('.fa-check').forEach(listItem => {
         listItem.addEventListener('click', function () {
            par = this.parentNode
            par.style.textDecoration = "line-through";
            if (par.style.textDecoration = "line-through"){
                tamamlanan ++
            }
            
        document.querySelector('#tamamlanan').textContent = tamamlanan;

      })
      listItem.addEventListener('dblclick', function () {
            par = this.parentNode
            par.style.textDecoration = "none";
      

    })
 })




}




    










// add.onclick = () => 


//     for (let i = 0; i < liste.length; i++) 
        
//         let paragraf = document.createElement('p');
//         let newLi = document.createElement('li');

//         newLi[i].innerHTML += '<i class="fa-solid ok[i] fa-check"></i>';
//         paragraf[i].innerText = input.value;
//         liste.appendChild(newLi[i]).appendChild(paragraf[i]);
        
//         paragraf[i].innerHTML += '<i class="far fa-trash-alt[i]"></i>';

//         document.querySelector(".ok[i]").onclick = () => 
//             paragraf[i].style.textDecoration= 'line-through';
//        
//         document.querySelector(".fa-trash-alt[i]").onclick = () => 
//             liste.removeChild(newLi[i]);
            
//               

    
// 
    








