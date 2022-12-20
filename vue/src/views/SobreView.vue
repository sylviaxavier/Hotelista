<template>
  <main>
      <section>
        <div class="hero">
          <img
            class="imagem-paisagem"
            :src="imageSobre"
            alt="Fachada do hotel"
          />
          <img
            class="imagem-retrato1"
            :src="image1"
            alt="Fachada do hotel"
          />
          <h1 class="hero-titulo-background white">Sobre o Hotelista</h1>
        </div>
        <p class="sobre-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat
          aliquid, molestias vero magni eaque quo tempore in error omnis cumque
          natus dignissimos. Neque eligendi, est itaque, consequuntur libero eos
          ab ut ad quas ullam sapiente at quasi minima doloremque hic. Id
          dolores totam soluta facere omnis ducimus ipsum. Minus qui quaerat
          ratione, tenetur ab quas delectus vel, laborum ducimus quibusdam
          voluptas modi debitis enim ipsa nemo illo quia! Veniam voluptas
          recusandae praesentium sunt sequi in quisquam numquam ea cum amet?
          Velit ea pariatur minus dolor placeat perferendis omnis esse alias eos
          necessitatibus incidunt repellat maxime, quo quibusdam quam molestias.
        </p>
      </section>
      <section class="margin-bottom">
        <div class="acomodacoes-home-wrap">
          <h1 class="titulo-home2">Os Quartos</h1>
          <div class="galeria-home">
            <img :src="imageQuartoSimples" alt="Quarto Simples" />
            <img :src="imageQuartoMedio" alt="Quarto Médio" />
            <img :src="imageBanheiro" alt="Banheiro" />
            <img :src="imageQuartoLuxo" alt="Quarto de Luxo" />
            <img :src="imageQuartoMedio2" alt="Quarto Médio" />
            <img :src="imageQuartoLuxo2" alt="Quarto de Luxo" />
          </div>
        </div>
        <p class="sobre-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          explicabo debitis modi quidem cum repudiandae deserunt quis inventore
          eligendi earum adipisci, beatae quod aliquam perspiciatis amet ipsum
          unde repellendus maiores possimus natus magni molestias reprehenderit
          architecto. Magni fugiat reiciendis odit ducimus quod possimus,
          ratione accusantium voluptatem maxime, consequatur perferendis
          numquam?
        </p>
      </section>
    </main>
</template>
<script>
import image1 from "../assets/home/fachada - retrato.png"
import imageSobre from "../assets/sobre/hero1.png"
import imageQuartoSimples from "../assets/quartos/simples.png"
import imageQuartoMedio from "../assets/quartos/medio.png"
import imageBanheiro from "../assets/quartos/banheiro.png"
import imageQuartoLuxo from "../assets/quartos/luxo.png"
import imageQuartoMedio2 from "../assets/quartos/medio2.png"
import imageQuartoLuxo2 from "../assets/quartos/luxo2.png"
export default {
  data:function (){
    return{
      image1: image1,
	    imageSobre: imageSobre,
	    imageQuartoSimples: imageQuartoSimples,
      imageQuartoMedio: imageQuartoMedio,
      imageBanheiro: imageBanheiro,
      imageQuartoLuxo: imageQuartoLuxo,
      imageQuartoMedio2: imageQuartoMedio2,
      imageQuartoLuxo2: imageQuartoLuxo2,
    }
  },
  name:'SobreView'
}
</script>
<style>
.sobre-desc {
	margin: 5vh 5%;
	padding: 0 1em;
	text-align: justify;
	column-count: 2;
	column-gap: 2em;
	border-top: 1px solid #c0c0c0;
	padding: 1vh;
}
/* PADRÕES */
.margin-top {
  margin-top: 20vh;
}

.margin-bottom {
  margin-bottom: 20vh;
}

h1 {
  color: #333333;
  font-size: xx-large;
  font-weight: normal;
  padding: 1rem;
  text-align: center;
}

.imagem-retrato1 {
  display: none;
}

.imagem-paisagem {
  display: block;
  width: 100%;
  height: 100%;
  margin-left: -1%;
}
.hero img {
  width: 100vw;
  margin-right: 0%;
  border-bottom: 4px solid #333333;
  z-index: -1;
}

.hero-titulo {
  margin: 0;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hero-titulo-background {
  margin: 0;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
}

.hero-sobre {
  position: absolute;
  bottom: 15%;
  left: 10%;
  right: 10%;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2em;
  font-size: medium;
}

.hero-opcoes {
  position: absolute;
  bottom: 5%;
  left: 10%;
  right: 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: medium;
  width: 80%;
  color: white;
}

.hero-opcoes div {
  padding: 2em;
  text-align: justify;
  background-color: rgba(0, 0, 0, 0.5);
}
@media (max-width: 600px) and (orientation: portrait) {
  /* PADRÕES */
  .imagem-retrato1 {
    display: block;
	  width: 100%;
  	height: 100%;
  }
  .imagem-paisagem {
 	 display: none;
	}

  .hero-titulo-background {
    padding: 0.25rem;
    margin-left: 3%;
  }

  .sobre-desc {
    column-count: 1;
  }
}
</style>