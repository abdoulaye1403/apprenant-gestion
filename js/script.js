 id = document.getElementById("id");
 nom = document.getElementById("nom");
 postnom = document.getElementById('postnom');
 prenom = document.getElementById('prenom');
 pays = document.getElementById('pays');
 genre = document.getElementById('genre');
 github = document.getElementById('github');
var form = document.querySelector("#form");
let submitbtn = document.getElementById("submitbtn")
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
class ApprenantInterface{
    static addInListApprenant(apprenant){
        let tableBody = document.querySelector('.table tbody')
        tableBody.innerHTML = ''
            let temp = `<tr>
                <td>${apprenant.id}</td>
                <td>${apprenant.nom}</td>
                <td>${apprenant.postnom}</td>
                <td>${apprenant.prenom}</td>
                <td>${apprenant.pays}</td>
                <td>${apprenant.genre}</td>
                <td>${apprenant.github}</td>
                <td>
                    <button class = "btn btn-danger">Supprimmer</button>
                </td>
                <td>
                    <button data-title="${apprenant.nom}" data-id="${apprenant.id}" onclick="editTask(this)" class="btn btn-warning">Modifier</button>
                </td>
            </tr>`
    
            tableBody.innerHTML += temp
            
            
        }

    static alertMessage(message){
        form.insertAdjacentHTML('beforebegin',`<div class = "alert alert-info">${message}</div>`)
        var alert = document.querySelector(".alert");
        var liste = document.querySelector('.liste')
        setTimeout(()=>{
            liste.removeChild(alert);
        }, 2000);
        }
    }

form.addEventListener('click',function(e){
    e.preventDefault()
    var idValue = id.value;
    var nomValue = nom.value;
    var postnomValue = postnom.value;
    var prenomValue = prenom.value;
    var paysValue = pays.value;
    var genreValue = genre.value;
    var githubValue = github.value;

    if(idValue==='' || nomValue==='' || postnomValue==='' || prenomValue==='' || paysValue==='' || genreValue==='' || githubValue===''){
        ApprenantInterface.alertMessage("Tous les champs doivent etre rempli")
    }else{
           var apprenant = new Apprenants(idValue,nomValue,postnomValue,prenomValue,paysValue,genreValue,githubValue);
           ApprenantInterface.addInListApprenant(apprenant)
        }
    })

