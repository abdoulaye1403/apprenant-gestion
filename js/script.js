let id = document.getElementById("id");
let nom = document.getElementById("nom");
let postnom = document.getElementById('postnom');
let prenom = document.getElementById('prenom');
let pays = document.getElementById('pays');
let genre = document.getElementById('genre');
let github = document.getElementById('github');
var form = document.querySelector("#form");
let submitbtn = document.getElementById("submitbtn")


class Personnes{
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

class UI{
    static displaylist(){
        const personnes = [
           {
            id :2,
            nom : 'paul',
            postnom : 'henri',
            prenom:'jule',
            pays: 'cote',
            genre:'masculin',
            github: 'jule@hot.com'
           }
        ]

        personnes.forEach((personne) =>{
            UI.addInList(personne)
        })
    }

    static addInList(personne){
        let tableBody = document.querySelector('.table tbody')
        tableBody.innerHTML = ''
        
            let temp = `<tr>
                <td>${personne.id}</td>
                <td>${personne.nom}</td>
                <td>${personne.postnom}</td>
                <td>${personne.prenom}</td>
                <td>${personne.pays}</td>
                <td>${personne.genre}</td>
                <td>${personne.github}</td>
                <td>
                    <button>Supprimmer</button>
                    <button data-title="${personne.nom}" data-id="${personne.id}" onclick="editTask(this)">Modifier</button>
                </td>
            </tr>`
    
            tableBody.innerHTML += temp
            
            
    }

    static displayMessage(message){
        form.insertAdjacentHTML('beforebegin',`<div class = "alert alert-info">${message}</div>`)
        var alert = document.querySelector(".alert");
        var liste = document.querySelector('.liste')
        setTimeout(()=>{
            liste.removeChild(alert);
        }, 2000);
    }
}


      
//  document.addEventListener('DOMContentLoaded',UI.displaylist())

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
        UI.displayMessage("Tous les champs doivent etre rempli")
    }else{
           var personne = new Personnes(idValue,nomValue,postnomValue,prenomValue,paysValue,genreValue,githubValue);
           UI.addInList(personne)
    }

})

