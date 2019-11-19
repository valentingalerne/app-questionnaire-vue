<template>
  <div v-cloak>
    <h1>Questionnaire</h1>
    <template>
        <div>
            <div class="Question shadow" v-for="data in myJson.questions" :key="data.numQuestion">
                <Question :data="data"></Question>
            </div><br/>
            <button class="btn btn-outline-secondary" @click="addDB()">Envoyer le formulaire</button>
        </div>
    </template>
  </div>
</template>
<script>
import Question from '../components/Question.vue'
import json from '../questions.json'
import PouchDB from 'pouchdb'
var db = new PouchDB('questions')
var url = 'http://localhost:5984/test'

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
  mounted () {
    if (localStorage.idUser) {
      this.id = localStorage.idUser
    }
  },
  methods: {
    addDB: function () {
      var reponseValues = {
        id: this.id,
        tabReponses: null,
        idQuestion: null,
        reponseQuestion: null
      }
      db.put(reponseValues).then((doc, err) => {
        console.log(doc)
      })
      db.get(reponseValues.nom).then((doc, err) => {
        console.log(reponseValues.nom)
        console.log(doc)
      }).catch(function (err) {
        console.log(err)
      })
      db.replicate.to(url)
    }
  }
}
</script>
