<template>
  <div class="app-top-bar">

    <v-app-bar app color="white">
      <v-app-bar-nav-icon class="menu" @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="titulo">
          Eco<span>Gram</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="green--text text--lighten-2">
    
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Início
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Contato
              </v-list-item-title>
            </v-list-item>
         

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  name: 'AppTopBar',
  data() {
    return {
      drawer: false,
      group: null,
    }
  }
}
</script>

<style scoped>
.app-top-bar a {
  text-decoration: none;
}

.titulo{
    color: #7CB342;
}

.menu{
    color:black;
}
span{
  color:black;
}
</style>