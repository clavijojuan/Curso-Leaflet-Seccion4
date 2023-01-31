// creación de mapa

const map = L.map('mapa', {
    center: [ 3.703038, -74.866350 ],
    zoom: 5,
    zoomControl: true,
    attributionControl: true,
    keyboard: true,
    minZoom:3,
    maxZoom:10,
    maxBounds: [
        [ 24.246964554300938, -53.43750000000001], 
        [-17.308687886770024, -96.28417968750001]
    ]
});

// mapa base 

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// eventos 

map.on('click', (evento) => {
    const { latlng } = evento;
    const { lat, lng } = latlng;
    console.log(lat);
    console.log(lng);
});


map.on('zoomend', (evento) => {
    const zoom = evento.target._zoom;
    console.log(zoom)
})

map.on('moveend', (evento) => {
    // console.log(evento)
    // const centro = evento.target._lastCenter
    // console.log(centro);

    const centroMapa = map.getCenter();
    console.log(centroMapa)

})


// métodos 


// estado de mapa
const centroMapa = map.getCenter();
console.log(centroMapa)


const zoomActual = map.getZoom();
console.log(zoomActual);

const extension = map.getBounds();
console.log(extension);

const minZoom = map.getMinZoom();
console.log(minZoom);

// modificación del mapa


// setInterval(() => {
//     map.zoomIn();
//     map.zoomOut();
// }, 1000)

setTimeout(() => {
    // map.setView([3.401862, -76.236355], 10);
    // map.setZoom(10);
    // map.flyTo([3.401862, -76.236355], 10)
    map.setMinZoom(0);
    console.log(map.getMinZoom());
}, 3000)
