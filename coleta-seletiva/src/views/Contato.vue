<template>
  <v-container class="home">
    <h2 class="text-h5 text-center mb-3 mt-5">Ajuda e Suporte</h2>
    <div>
      <hr/>
    </div>
    <div>
      <p class="margem" id="sobre">Sobre</p>
    </div>

    <div class="margem">
      <p>Rede criada pelas desenvolvedoras Lilian Cristina, Tatiane Quirino e Ariane Medina com o objetivo de incentivar mais nossas comunidades brasileiras a ajudar o meio ambiente</p>
    </div>

    <div class="margem" id="termos">
      <p>Termos e Condicões</p>
    </div>
    <div class="margem">
      <p>Versão 1.0</p>
    </div>
    <div class="centro">
     <v-btn
      class="amarelo"
      outlined
    >
     Mande um E-mail
    </v-btn>
    </div>
    <div class="centro">
    <v-btn
      class="ma-2 verde"
      outlined
    >
      Ligar para o Suporte
    </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Contato"
};
</script>

<style scoped>

.margem{
    margin-left: 20px;
}

#sobre{
    margin-top:20px;
    color: #7CB342;
    font-size:20px;
}

#termos{
    color: #7CB342;
    font-size:20px;
}
.verde{
    color:#7CB342;
    border-radius: 20px;
    width:80%;
}
.amarelo{
    color:#FED11F;
    border-radius: 20px;
    margin-top:30%;
    width:80%;
}
.centro{
    text-align:center;
}
</style>

