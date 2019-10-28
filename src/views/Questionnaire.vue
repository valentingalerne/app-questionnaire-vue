<template>
  <div v-cloak>
    <!-- <Question /> -->
    <h1>Questionnaire</h1>
    <h3>Question 1</h3>
    <!-- <p>{{question}}</p> -->
    <p>{{question[numQuestion].question}}</p>
    <router-link to="/questionnaire" ><button @click="getDB()">Valider</button></router-link>
      <!-- <p>{{question[numQuestion].numeroReponse[1]}}</p>
      <p>{{question[numQuestion].numeroReponse[2]}}</p> -->
  </div>
</template>
<script>
import PouchDB from 'pouchdb'
var db = new PouchDB('questions')
var url = 'http://localhost:5984/questions'
db.replicate.from(url)

export default {
  data () {
    return {
      numQuestion: 0,
      question: [],
      reponse: []
    }
  },
  created: function () {
    this.getDB()
  },
  methods: {
    getDB: function () {
      // var nbQuest = 1
      // this.$router.push({ path: 'questionnaire/' + nbQuest, query: { userId: this.id } })
      var tempThis = this
      db.get('257056bced3d4cbf5b171d032e00d69b').then(function (doc) {
        console.log(doc)
        tempThis.question = doc.questions
      }).catch(function (err) {
        console.log(err)
      })
      db.replicate.to(url)
      tempThis.numQuestion += 1
    }
  }
}
</script>
