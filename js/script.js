

 // class apprenant 
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

 // class interface apprenant
class ApprenantInterface{
    
    // methode ajouter un apprenant
    static addInListApprenant(apprenant){
        var tableBody = document.querySelector('.table tbody')
        tableBody.innerHTML = ''
            var temp = `<tr>
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
                    <button class="btn btn-warning">Modifier</button>
                </td>
            </tr>`
    
            tableBody.innerHTML += temp        
            
        }

// // methode afficher message d'erreur
    static alertMessage(message){
        form.insertAdjacentHTML('beforebegin',`<div class = "alert alert-info">${message}</div>`)
        var alert = document.querySelector(".alert");
        var liste = document.querySelector('.liste')
        setTimeout(()=>{
            liste.removeChild(alert);
        }, 2000);
        }
    
        // methode vider les champs
        static viderChamp(){
             document.querySelector('#id').value = '';
             document.querySelector('#nom').value = '';
             document.querySelector('#postnom').value = '';
             document.querySelector('#prenom').value = '';
             document.querySelector('#pays').value = '';
             document.querySelector('#genre').value = '';
             document.querySelector('#github').value = '';
        
        }
}

  document.addEventListener('DOMContentLoaded',ApprenantInterface.ApprenantList);

// // ajouter un apprenant
var form = document.querySelector("#form");
form.addEventListener('click',function(e){
    // empecher une erreur
    e.preventDefault()

    // recuperer les champs
    var idValue = document.querySelector('#id').value;
    var nomValue = document.querySelector('#nom').value;
    var postnomValue = document.querySelector('#postnom').value;
    var prenomValue = document.querySelector('#prenom').value;
    var paysValue = document.querySelector('#pays').value;
    var genreValue = document.querySelector('#genre').value;
    var githubValue = document.querySelector('#github').value;

    // verifier si les champs ne sont pas vide

    if(idValue==='' || nomValue==='' || postnomValue==='' || prenomValue==='' || paysValue==='' || genreValue==='' || githubValue===''){

        // afficher le message d'erreur
       ApprenantInterface.alertMessage("Tous les champs doivent etre rempli")
    }else{

        //    creer un apprenant
        var apprenant = new Apprenants(idValue,nomValue,postnomValue,prenomValue,paysValue,genreValue,githubValue);

       

        //    ajouter un apprenant dans la liste
           ApprenantInterface.addInListApprenant(apprenant)

        //    vider les champs
           ApprenantInterface.viderChamp();
        
        }
    })

    var tableBody = document.querySelector(".table tbody")
    tableBody.addEventListener('click',(e)=>{
        e.preventDefault();
        var tr = e.target.parentElement.parentElement;
        tableBody.removeChild(tr)
        
    })



    
