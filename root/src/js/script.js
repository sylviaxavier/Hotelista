let bgImages = [
    '/root/images/banner/area_livre.jpg',
    '/root/images/banner/galeria_arquitetura.jpg',
    '/root/images/banner/parque_aquatico.jpg',
    '/root/images/banner/quadra_tenis.jpg',
    '/root/images/banner/recreacao.jpg'
]

const sorteio = parseInt(Math.random()* bgImages.length)
document.querySelector('#banner').style.backgroundImage=`url(${bgImages[sorteio]})`

console.log(sorteio)