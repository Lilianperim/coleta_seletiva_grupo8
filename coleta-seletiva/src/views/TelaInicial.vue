<template>
  <!-- v-container fluid para o responsivo -->
  <v-container fluid class="pa-0">
    
    <v-carousel v-model="model" hide-delimiters large height="400px">
      <!-- v-carousel-item são os elementros do array coletas, :src="item.imagem" são as imagens -->
      <v-carousel-item v-for="(item, i) in coletas" :key="i" :src="item.imagem">
        <v-row class="fill-height" align="end" justify="center"> </v-row>
      </v-carousel-item>
    </v-carousel>
    <div class="texto">
      Para todos os tipos de pessoas que se interessam em ajudar o meio
      ambiente, o EcoGram é como uma rede social, mas diferente do Instagram,
      Facebook e outros,é uma rede focada em incentivar a prática de coleta
      seletiva, dando mais alcance aos existentes eventos e iniciativas perto de
      você, te dando a possibilidade de conhecer pessoas com o mesmo interesse
      ecológico e posteriormente dando gratificações para nossos membros mais
      ativos.
    </div>
    <div class="text-center">
      <!-- btn com navegação  @click="$router.push('pontos')" -->
      <v-btn @click="$router.push('pontos')" class="" color="success" dark
        >Pontos de coleta
      </v-btn>
      <br /><br />
      <v-btn @click="$router.push('contato')" color="success" dark>Eventos disponíveis </v-btn>
    </div>
    <br />
  </v-container>
</template>

<script>
export default {
  name: "TelaInicial",
  data: () => ({
    model: 0,
    coletas: [
      {
        id: 1,
        imagem:
          "https://www.ibiracu.es.gov.br/uploads/arquivos/noticias/68ea00374a74ad271f67405d9a91774c.jpg",
        texto:
          "A reciclagem transforma coisas em outras, o que é quase mágico.",
      },
      {
        id: 2,
        imagem:
          "https://www.sustentahabilidade.com/wp-content/uploads/2016/05/3rs.png",
        texto:
          "A reciclagem transforma coisas em outras, o que é quase mágico.",
      },
    ],
  }),
};
</script>

<style scoped>
.texto {
  padding: 10px;
  font-size: 12px;
  border: 1px solid green;
  margin: 10px;
  border-radius: 5px;
}
</style>