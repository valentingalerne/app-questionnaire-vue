<!-- Component Question, permet d'afficher la question appelée et ses choix de réponses -->
<template>
  <div>
    <!-- Affichage de la question -->
    <p>{{data.question}}</p>
    <div class="alignReponses">
      <!-- Affichage des 3 choix possibles -->
      <input type="radio" name="reponse" value="data.reponse[0].value">{{data.reponse[0].value}}<br>
      <input type="radio" name="reponse" value="data.reponse[1].value">{{data.reponse[1].value}}<br>
      <input type="radio" name="reponse" value="data.reponse[2].value">{{data.reponse[2].value}}<br>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/css/main.css';
</style>

<script>
// import du fichier json contenant les questions/réponses
import json from '../questions.json'
export default {
  name: 'data',
  props: {
    data: Object
  },
  data () {
    return {
      myJson: json
    }
  }
}
</script>
