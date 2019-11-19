<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container containerLogin shadow p-3 mb-5 bg-white rounded">
        <h3>Bienvenue sur l'app questionnaire</h3><br/>
        <div class="row">
          <div class="col-sm">
            <input v-model="prenom" class="inputPrenom" type="text" placeholder=  "Prénom" />
          </div>
          <span class="w-100"></span>
          <div class="col-sm">
            <input v-model="nom" type="text" placeholder=  "Nom" />
          </div>
          <span class="w-100"></span>
          <div class="col-sm">
            <input v-model="societe" type="text" placeholder=  "Société" />
          </div>
        </div>
        <router-link to="/questionnaire" ><button @click="addDB()">S'enregistrer</button></router-link>
        <!-- <button @click="addDB()">S'enregistrer</button> -->
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/css/main.css';
</style>

<script>
// @ is an alias to /src
// import Login from '@/components/Login.vue'
import PouchDB from 'pouchdb'
var db = new PouchDB('login') // Création de la connection à la BDD : 28/10/2019
var url = 'http://localhost:5984/projet_questionnaire' // Initialisation de l'url de ma base de données : 28/10/2019

export default {
  data () {
    return {
      nom: '',
      prenom: '',
      societe: ''
    }
  },
  name: 'home',
  components: {
  },
  methods: {
    addDB: function () {
      // var tempThis = this
      var now = Date.now().toString()
      var userValues = {
        _id: (this.prenom.substring(0, 1) + this.nom + now).toLowerCase(),
        nom: this.nom,
        prenom: this.prenom,
        societe: this.societe
      }
      db.put(userValues).then((doc, err) => {
        // tempThis.$router.push({ path: 'questionnaire', query: { userId: tempThis.id } })
        console.log(doc)
      })

      db.get(userValues._id).then((doc, err) => {
        console.log(userValues._id)
        console.log(doc)
      }).catch(function (err) {
        console.log(err)
      })
      db.replicate.to(url)
      localStorage.idUser = userValues._id
    }
  }
}

</script>
