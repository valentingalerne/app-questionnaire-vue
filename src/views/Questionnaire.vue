<template>
  <div v-cloak>
    <h1>Questionnaire</h1>
    <template>
        <div>
            <!-- For permettant de boucler sur toutes les questions stockees dans le json -->
            <div class="Question shadow" v-for="data in myJson.questions" :key="data.numQuestion">
                <Question :data="data"></Question>
            </div><br/>
            <!-- Bouton pour envoyer les reponses du questionnaire, PAS FONCTIONNEL -->
            <button class="btn btn-outline-secondary" @click="addDB()">Envoyer le questionnaire</button>
        </div>
    </template>
  </div>
</template>
<script>
import Question from '../components/Question.vue'
import json from '../questions.json'
import PouchDB from 'pouchdb'
var db = new PouchDB('questions')
var url = 'http://localhost:5984/projet_questionnaire'

export default {
  data () {
    return {
      myJson: json,
      id: '',
      tabReponses: [ { 'id': 0, 'reponse': '' } ],
      idQuestion: '',
      reponseQuestion: ''
    }
  },
  components: {
    Question
  },
  // Récupération de l'id de l'utilisateur passé en localStorage
  mounted () {
    if (localStorage.idUser) {
      this.id = localStorage.idUser
    }
  },
  methods: {
    // Fonction devant ajouter les réponses sélectionnées par l'utilisateur en BDD, NON FONCTIONNEL
    addDB: function () {
      var reponseValues = {
        id: this.id,
        tabReponses: null,
        idQuestion: null,
        reponseQuestion: null
      }
      db.put(reponseValues).then((doc, err) => {
        // console.log(doc)
      })
      db.get(reponseValues.nom).then((doc, err) => {
        // console.log(reponseValues.nom)
        // console.log(doc)
      })
      db.replicate.to(url)
    }
  }
}
</script>
