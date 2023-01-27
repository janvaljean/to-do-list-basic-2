let liste = [];

let total = 0

let completed = 0

const listeInput = document.querySelector('#todo-input');

const listeUl = document.querySelector('#todo-ul');

const listeButton = document.querySelector('#todo-button');

const toplam = document.querySelector('#toplam');

//! add button click event
//?tasks
//line 23 --if input is empty , add button is disabled
//line 26 - double element is disabled

 

listeButton.onclick = () => {
    if (!listeInput.value) {
        alert("please add a task");

    }else if (liste.includes(listeInput.value)){
        return
    }else{
        liste.push(listeInput.value);
        total += 1;

        showListe();  
    } 






}



//! this function shows the list that was created
//input clearing
// total changes
const showListe = () => {
        listeUl.innerHTML += `<li class="list-item">
        <i class="fa fa-check fa-lg"></i>
        <p>${listeInput.value}</p>
        <i class="fa fa-trash-alt"></i>
        </li>`;
        listeInput.value = "";
        // total changes
        toplam.textContent = total;


    //! check logo entered
    createCheckButton();
    //! trash logo entered
    createSilButton();



}

const createCheckButton = () => {
//! when check button is clicked
    document.querySelectorAll('.fa-check').forEach(a => {
        a.onclick = () => {
            // a.parentElement.classlist.toggle("checked") one click  come one click go with toggle
            //! if parent of a has class "checked" , remove it else add it
            // we have in css checked class



            if (a.parentElement.classList.contains("checked")){
                a.parentElement.classList.remove("checked")
                completed -= 1;


            }else{
                a.parentElement.classList.add("checked")
                completed += 1;
                document.querySelector('#tamamlanan').textContent = completed;


            }

}

})
}



const createSilButton = () => {
    //! when trash button is clicked
    //trash logo in list
        document.querySelectorAll('.fa-trash-alt').forEach((a) => {
            a.onclick = () => {

            //! delete only screen
            a.parentElement.remove();
            
            //!delete from list
            liste = liste.filter((e) => e!== a.parentElement.querySelector('p').textContent);
 // 2.way   liste = liste.filter((e) => e!== a.closest(".list-item").querySelector('p').textContent
        // a.previousElementSibling.remove(); ----->  a= trash logo , siblings = p and i  
            //a.previousElementSiblingElement.textContent

            //a.nextElementSibling.remove();
            total -= 1;
            toplam.textContent = total;

            if(a.parentElement.classList.contains("checked")){

                completed -= 1;
                document.querySelector('#tamamlanan').textContent = completed;
            }

    
}})}
    