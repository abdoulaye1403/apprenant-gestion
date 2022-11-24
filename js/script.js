var form = document.getElementById('form')
var tableBody = document.querySelector('.table tbody')
var submitbtn = document.getElementById('submitbtn')

var id = document.querySelector('#id');
var nom = document.querySelector('#nom');
var postnom = document.querySelector('#postnom');
var prenom = document.querySelector('#prenom');
var pays = document.querySelector('#pays');
var genre = document.querySelector('#genre');
var github = document.querySelector('#github');

var editMode = false
var editionApprenant = null

editModeEnabled(editMode)
 console.log(id)
class Apprenants{
    constructor(id,nom,postnom,prenom,pays,genre,github){
             this.id = id
             this.nom = nom;
             this.postnom = postnom;
             this.prenom = prenom;
             this.pays = pays;
             this.genre = genre;
             this.github = github
    }
        
}
var apprenant1 = new Apprenants(1,'Toure','Mahamadou','Abdoulaye','Mali','Masculin','abdelraul@github.com');
var apprenant2 = new Apprenants(2,'Maiga','Houney','Aicha','Mali','Feminin','aicha@github.com')
var apprenants = [apprenant1,apprenant2]

function loadApprenantInTable() {
    tableBody.innerHTML = ''

    for (var apprenant of apprenants) {
        let temp = `<tr>
            <td>${apprenant.id}</td>
            <td>${apprenant.nom}</td>
            <td>${apprenant.postnom}</td>
            <td>${apprenant.prenom}</td>
            <td>${apprenant.pays}</td>
            <td>${apprenant.genre}</td>
            <td>${apprenant.github}</td>
            <td>
                <button  onclick="deleteApprenant(this)" class="btn btn-danger">Supprimmer</button>
            </td>
            <td>
                <button data-nom="${apprenant.nom}" data-id="${apprenant.id}"  
                data-postnom="${apprenant.postnom}"  data-prenom="${apprenant.prenom}"  data-pays="${apprenant.pays}"  data-genre="${apprenant.genre}"
                data-github="${apprenant.github}"  onclick="editApprenant(this)"  class="btn btn-warning"
                >
                Modifier</button>
            </td>
        </tr>`

        tableBody.innerHTML += temp
    }

    
}

loadApprenantInTable()

form.addEventListener('submit', function(e){
    e.preventDefault();
        idValue = id.value;
        nomValue = nom.value;
        postnomValue = postnom.value;
        prenomValue = prenom.value
        paysValue = pays.value;
        genreValue = genre.value;
        githubValue = github.value
    
    if(idValue==='' || nomValue==='' || postnomValue==='' || prenomValue==='' || paysValue==='' || genreValue==='' || githubValue===''){

        alert("Tous les champs doivent etre rempli")
                
    }else{
        var apprenant = new Apprenants(idValue,nomValue,postnomValue,prenomValue,paysValue,genreValue,githubValue);
        
        if(editMode) {
            updateApprenant(apprenant)
        }else {
            addApprenant(apprenant);
        }
            viderChamp();
                            
    }
})
  
function viderChamp(){
    id.value = '';
    postnom.value = '';
    nom.value= '';
    prenom.value = '';
    pays.value = '';
    genre.value= '';
    github.value = '';
}

function updateApprenant(apprenant) {
    apprenants.find((t) => t.id == editionApprenant.id).id = apprenant.id
    apprenants.find((t) => t.id == editionApprenant.id).nom = apprenant.nom
    apprenants.find((t) => t.id == editionApprenant.id).postnom = apprenant.postnom
    apprenants.find((t) => t.id == editionApprenant.id).prenom = apprenant.prenom
    apprenants.find((t) => t.id == editionApprenant.id).pays = apprenant.pays
    apprenants.find((t) => t.id == editionApprenant.id).genre = apprenant.genre
    apprenants.find((t) => t.id == editionApprenant.id).github = apprenant.github
    loadApprenantInTable()

      // init
     editModeEnabled(false)
 }

function addApprenant(apprenant) {
     apprenants.push(apprenant)
     loadApprenantInTable()
    }
    



function deleteApprenant(e){
    e.parentNode.parentNode.remove()
}

function editApprenant(e) {
    editModeEnabled(true)
    id.value = e.dataset.id
    nom.value = e.dataset.nom
    postnom.value = e.dataset.postnom
    prenom.value = e.dataset.prenom
    pays.value = e.dataset.pays
    genre.value = e.dataset.genre
    github.value = e.dataset.github
    editionApprenant = apprenants.find((t) => t.id == e.dataset.id)
}

function editModeEnabled(enabled) {
    if(enabled) {
        editMode = true
        submitbtn.innerText = "Modifier"
    } else {
        editMode = false
        submitbtn.innerText = "Ajouter"
        editionApprenant = null
        
    }
}
    
