var form = document.getElementById('form')
var tableBody = document.querySelector('.table tbody')
let submitbtn = document.getElementById('submitbtn')

let editMode = false
let editionApprenant = null

editModeEnabled(editMode)

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
    var idValue = document.querySelector('#id').value;
     var nomValue = document.querySelector('#nom').value;
     var postnomValue = document.querySelector('#postnom').value;
     var prenomValue = document.querySelector('#prenom').value;
     var paysValue = document.querySelector('#pays').value;
     var genreValue = document.querySelector('#genre').value;
     var githubValue = document.querySelector('#github').value;
     if(idValue==='' || nomValue==='' || postnomValue==='' || prenomValue==='' || paysValue==='' || genreValue==='' || githubValue===''){

                  alert("Tous les champs doivent etre rempli")
                
             }else{
        
                     
                 var apprenant = new Apprenants(idValue,nomValue,postnomValue,prenomValue,paysValue,genreValue,githubValue);
        
               
        
                 if(editMode) {
                    updateApprenant(apprenant)
                } else {
                    addApprenant(apprenant);
                }
                    
        
                     
                     viderChamp();
                
                 }
})


    
    
function viderChamp(){
              document.querySelector('#id').value = '';
              document.querySelector('#nom').value = '';
              document.querySelector('#postnom').value = '';
              document.querySelector('#prenom').value = '';
              document.querySelector('#pays').value = '';
              document.querySelector('#genre').value = '';
              document.querySelector('#github').value = '';
}

function updateApprenant(apprenant) {
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
    document.querySelector('#nom').value = e.dataset.nom
    document.querySelector('#postnom').value = e.dataset.postnom
    document.querySelector('#prenom').value = e.dataset.prenom
    document.querySelector('#pays').value = e.dataset.pays
    document.querySelector('#genre').value = e.dataset.genre
    document.querySelector('#github').value = e.dataset.github
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
        viderChamp()
    }
}
    
