<template>
  <!-- <div id="app">
  <div id="nav">
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
</div>
<router-view/>
</div> -->
<form id="main" v-cloak>
  <div class="wrapper">
    <h2>Bienvenue sur l’app questionnaire </h2>
    <i class="fas fa-user-circle"></i><input type="text" placeholder=  "Prénom" /><br/>
    <i class="fas fa-user-circle"></i><input type="text" placeholder="Nom" /><br/>
    <input type="text" placeholder="Société" /><br/>
    <div class="box a">A</div>
    <div class="box b ">B</div>
    <div class="box c">C</div>
    <div class="box d">D</div>
  </div>
</form>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  display: grip;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 120px 135px 100px;
  grid-gap: 10px;
  background-color: #fff;
}

.box {
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  /*padding: 20px;*/
  font-size: 150%;
}

.a {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
}

.d {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 3;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
