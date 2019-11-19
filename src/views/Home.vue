<template>
  <div class="home">
    <div class="container containerLogin shadow p-3 mb-5 bg-white rounded">
        <h3>Bienvenue sur l'app questionnaire</h3><br/>
        <div class="row">
          <div class="col-sm">
            <!-- Input prenom de l'utilisateur -->
            <input v-model="prenom" class="inputPrenom" type="text" placeholder=  "Prénom" />
          </div>
          <span class="w-100"></span>
          <div class="col-sm">
            <!-- Input nom de l'utilisateur -->
            <input v-model="nom" type="text" placeholder=  "Nom" />
          </div>
          <span class="w-100"></span>
          <div class="col-sm">
            <!-- Input société de l'utilisateur -->
            <input v-model="societe" type="text" placeholder=  "Société" />
          </div>
        </div>
        <!-- Bouton pour enregistrer les informations saisies par l'utilisateur -->
        <router-link to="/questionnaire" ><button @click="addDB()">S'enregistrer</button></router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/css/main.css';
</style>

<script>
import PouchDB from 'pouchdb'
var db = new PouchDB('login') // Création de la connection à la BDD
var url = 'http://localhost:5984/projet_questionnaire' // Initialisation de l'url de la BDD

export default {
  // valeurs à enregistrer dans la BDD
  data () {
    return {
      nom: '',
      prenom: '',
      societe: ''
    }
  },
  name: 'home',
  methods: {
    addDB: function () {
      // Temps en millisecondes
      var now = Date.now().toString()
      var userValues = {
        // id unique (première lettre du prénom + le nom + le temps en millisecondes)
        _id: (this.prenom.substring(0, 1) + this.nom + now).toLowerCase(),
        // Récupération du nom saisie par l'utilisateur
        nom: this.nom,
        // Récupération du prenom saisie par l'utilisateur
        prenom: this.prenom,
        // Récupération de la société saisie par l'utilisateur
        societe: this.societe
      }
      // Objet userValues en cache
      db.put(userValues).then((doc, err) => {
        // console.log(doc)
      })

      db.get(userValues._id).then((doc, err) => {
        // console.log(userValues._id)
        // console.log(doc)
      }).catch(function (err) {
        console.log(err)
      })
      // On insère les données en BDD
      db.replicate.to(url)
      // On passe l'id de l'utilisateur en localStorage, pour le récupérer dans la page du questionnaire
      localStorage.idUser = userValues._id
    }
  }
}

</script>
