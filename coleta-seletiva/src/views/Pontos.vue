<template>
  <v-container>
    <v-card class="mx-auto card" max-width="80vw">
      <div class="borda">
        <h2 class="text-h5 text-center mb-3 mt-5 fonte">Pontos de Coleta</h2>
      </div>
      <v-combobox
        class="combox"
        v-model="chips"
        :items="items"
        chips
        clearable
        label="Categorias"
        multiple
        prepend-icon="mdi-filter-variant"
        solo
      >
        <template v-slot:selection="{ attrs, item, select, selected }">
          <v-chip
            v-bind="attrs"
            :input-value="selected"
            close
            @click="select"
            @click:close="remove(item)"
          >
            <strong>{{ item }}</strong>&nbsp;
          </v-chip>
        </template>
      </v-combobox>
      <v-list-item v-for="lista of ordernarLista" :key="lista.id">
        <v-list-item-icon size="24">
          <img class="img" :src="lista.imagem" :alt="lista.nome" />
        </v-list-item-icon>
        <v-list-item-title class="d-flex justify-center texto">{{ lista.nome }}</v-list-item-title>
        <span class="mr-3">{{ lista.pontos}}</span>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Lista",
  computed: {
    ordernarLista() {
      const ordernar = this.lista
        .slice(0)
        .sort((a, b) => (a.pontos > b.pontos ? -1 : 1));
      return ordernar;
    }
  },
  data() {
    return {
      lista: [],
      chips: [
        "Aço",
        "pilhas",
        "óleo de cozinha",
        "borracha",
        "capsulas de café",
        "isopor",
        "remédios",
        "raio-x",
        "entulhos"
      ],
      items: [
        "Aço",
        "pilhas",
        "óleo de cozinha",
        "borracha",
        "capsulas de café",
        "isopor",
        "remédios",
        "raio-x",
        "entulhos"
      ]
    };
  },

  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    }
  },

  created() {
    fetch(
      "https://it3kjy-default-rtdb.firebaseio.com/coletaSeletiva.json?print=pretty"
    ).then(res =>
      res.json().then(json => {
        this.lista = json;
      })
    );
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@700&display=swap");

.titulo {
  font-size: 20px;
}

.fonte {
  font-family: "Sulphur Point", sans-serif;
}

td {
  border: none;
}

.card {
  border-radius: 50px;
  border: 1px solid #7cb342;
  padding: 10px;
  margin-top: 30px;
}

.borda {
  border-bottom: 1px solid #7cb342;
}

.texto {
  margin-right: 20px;
}

.search {
  margin-top: 20px;
}

.img {
  width: 40px;
  height: 30px;
  border-radius: 20px;
}
.combox {
  margin-top: 30px;
}
</style>
