<template>
  <html>
    <body>
      <header>
        <AdminNavBar />
      </header>
      <main>
        <section>
          <div class="hero">
            <img
              class="imagem-paisagem"
              :src="require('../assets/admin/reception1.png')"
              alt="sino da recepçao"
            />
            <h1 class="hero-titulo white">Sua melhor escolha de vista</h1>
            <div class="hero-sobre">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              sapiente reprehenderit corporis, nulla voluptatem esse. Temporibus
              necessitatibus ex soluta atque fuga amet architecto tempora
              cumque!
            </div>
          </div>
        </section>
        <section>
          <div class="acomodacoes-home-wrap">
            <h1 class="titulo-home2">Nossas Acomodações</h1>
            <div class="galeria-home">
              <img :src="imageQuartoSimples" alt="Quarto Simples" />
              <img :src="imageQuartoMedio" alt="Quarto Médio" />
              <img :src="imageBanheiro" alt="Banheiro" />
              <img :src="imageQuartoLuxo" alt="Quarto de Luxo" />
              <img :src="imageQuartoMedio2" alt="Quarto Médio" />
              <img :src="imageQuartoLuxo2" alt="Quarto de Luxo" />
            </div>
          </div>
          <div class="button-wrap">
            <a class="button button-home" href="#Serviços">
              <div class="button-text">Veja as acomodações reservadas</div>
              <p class="button-arrow">→</p>
            </a>
          </div>
        </section>
        <section>
          <div class="margin-top hero">
            <img
              class="imagem-paisagem"
              :src="imageGastronomia"
              alt="Área de jantar"
            />
            <img
              class="imagem-retrato1"
              :src="imageGastronomia1"
              alt="Área de jantar"
            />
            <div>
            <h1 class="hero-titulo-background white">Opções gastronômicas</h1>
            <div class="hero-opcoes">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate commodi repudiandae tempora consequatur! Sunt iusto
                temporibus nisi sint voluptate fugiat.
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                molestiae, amet sequi deleniti quis optio voluptate. Ipsa quis
                deserunt recusandae.
              </div>
            </div>
          </div>
          </div>
        </section>
        <section>
          <h1 class="footer-title">Tenha um ótimo trabalho!</h1>
        </section>
      </main>
    </body>
    <footer>
      <AdminFooter/>
    </footer>
  </html>
</template>
<script>
//import HomeView from "../views/HomeView.vue"
import AdminNavBar from "../components/AdminNavBar.vue";
import AdminFooter from "@/components/AdminFooter.vue";
import image from "../assets/home/fachada - paisagem.png";
import image1 from "../assets/home/fachada - retrato.png";
import imageQuartoSimples from "../assets/quartos/simples.png";
import imageQuartoMedio from "../assets/quartos/medio.png";
import imageBanheiro from "../assets/quartos/banheiro.png";
import imageQuartoLuxo from "../assets/quartos/luxo.png";
import imageQuartoMedio2 from "../assets/quartos/medio2.png";
import imageQuartoLuxo2 from "../assets/quartos/luxo2.png";
import imageGastronomia from "../assets/home/gastronomia - paisagem.png";
import imageGastronomia1 from "../assets/home/gastronomia - retrato.png";

export default {
  name: "HomeAdmin",
  components: {
    AdminNavBar,
    AdminFooter
  },
  data() {
    this.$route.path === "/homeAdmin"
      ? (this.showNavigation = false)
      : (this.showNavigation = true);
    return{
      image: image,
      image1: image1,
      imageQuartoSimples: imageQuartoSimples,
      imageQuartoMedio: imageQuartoMedio,
      imageBanheiro: imageBanheiro,
      imageQuartoLuxo: imageQuartoLuxo,
      imageQuartoMedio2: imageQuartoMedio2,
      imageQuartoLuxo2: imageQuartoLuxo2,
      imageGastronomia: imageGastronomia,
      imageGastronomia1: imageGastronomia1,
    }
  },
};
</script>
<style>

.imagem-paisagem2 {
  display: block;
  width: 100%;
  height: 100%;
  margin-left: -1%;
}
.hero-sobre2 {
  position: absolute;
  bottom: 15%;
  left: 10%;
  right: 10%;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2em;
  font-size: medium;
}
.hero-titulo-background2 {
  margin: 0;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
