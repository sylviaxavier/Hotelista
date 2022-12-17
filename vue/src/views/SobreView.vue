<template>
  <main>
      <section>
        <div class="hero">
          <img
            class="imagem-paisagem"
            :src="image"
            alt="Fachada do hotel"
          />
          <img
            class="imagem-retrato"
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
import image from "../assets/home/fachada - paisagem.png"
import image1 from "../assets/home/fachada - retrato.png"
import imageQuartoSimples from "../assets/quartos/simples.png"
import imageQuartoMedio from "../assets/quartos/medio.png"
import imageBanheiro from "../assets/quartos/banheiro.png"
import imageQuartoLuxo from "../assets/quartos/luxo.png"
import imageQuartoMedio2 from "../assets/quartos/medio2.png"
import imageQuartoLuxo2 from "../assets/quartos/luxo2.png"
export default {
  data:function (){
    return{
      image: image,
	    //image1: image1
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
</style>