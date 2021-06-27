var text = document.getElementById('txtArea');
var SaveBtn = document.getElementById('saveBtn');
let SavedNotes = localStorage.getItem("SajiloNotes");
let title = document.getElementById('title');
notesObj = [];
let htmlDocs;



setTimeout(() => {

    if (SavedNotes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(SavedNotes);
        for (var a = 0; a <= notesObj.length - 1; a++) {


            main.innerHTML +=

                `<div id="noteCard" class="col-sm-6 my-4">
            <div class="card">
            <div class="card-body">
            <h5 class="card-title">${notesObj[a].title}</h5>
            <p id="message" class="card-text">${notesObj[a].txt}</p>
            <hr>
            <p class="card-text">Created Date: ${notesObj[a].date}</p>
               
            <a href="#" onclick="deleteNote(this.id)" class="btn btn-outline-danger" id="${a}"> <i class="fas fa-trash"> </i> Delete</a>
            </div>
            </div>`;



        }
    }



}, 0);




SaveBtn.addEventListener('click', () => {


    title.value = title.value.replace(">", "&gt;");
    title.value = title.value.replace("<", "&lt;");
    text.value = text.value.replace(">", "&gt;");
    text.value = text.value.replace("<", "&lt;");







    notesObj.push({ title: title.value, txt: text.value, date: Date() });







    showItems();
    text.value = "";
    title.value = "";


















})


function showItems() {








    var main = document.getElementById('main');
    main.innerHTML = "";


    for (var a = 0; a <= notesObj.length - 1; a++) {


        main.innerHTML +=
            `<div id="noteCard" class="col-sm-6 my-4">
        <div class="card">
        <div class="card-body">
        <h5 class="card-title">${notesObj[a].title}</h5>
        <p id="message${a}" class="card-text">${notesObj[a].txt}</p>
        <hr>
        <p  class="card-text">Created Date: ${notesObj[a].date}</p>
        <a href="#" onclick="deleteNote(this.id)" class="btn btn-outline-danger" id="${a}"> <i class="fas fa-trash"> </i> Delete</a>
        </div>
        </div>`;



    }
    localStorage.setItem("SajiloNotes", JSON.stringify(notesObj));


}



function deleteNote(id) {

    value = id;
    notesObj.splice(id, 1);
    showItems();

    localStorage.removeItem("SajiloNotes");
    localStorage.setItem("SajiloNotes", JSON.stringify(notesObj));





}