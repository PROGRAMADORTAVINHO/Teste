/* 1º Carrocel  */
let time = 2000, //o tempo que eu quero de rotação
    currentImageIndex = 0, // a primeira imagem é zero
    images = document.querySelectorAll("#slider img"); // pegas as imagens
    max = images.length; // máximo de imagens que existe pra mim 

function nextImage() { //ele vai puxar a próxima imagem

    images[currentImageIndex].classList.remove("selected");
    //remover a classe do elemento atual , para as outras imagens
    //irem adicionando 
    currentImageIndex++; //incrementamos uma imagem para ela ir trocando

    if(currentImageIndex >= max)
    // se o meu create imageindex for maior ou igual ao meu máximo de imagem
    //eu reseto ele, e ele volta para a sua posição 0
    //(e então nosso banner fica rotativo)
        currentImageIndex = 0;
    images[currentImageIndex].classList.add("selected");
}

function start() { 
    //setInterval vai executar uma função a cada momento
    setInterval(() => {
        // troca de imagem
        nextImage(); //usando a função de troca de imagem que eu criei
    }, time)
}

window.addEventListener("load", start);

/* 2º Carrocel  */
function activateCarousel(index) {
  const slides = document.querySelectorAll(".slide");
  const slide = slides[index];

  if (slide.classList.contains("active")) {
    return;
  }

  slide.classList = "slide active";

  if (slides[index - 2] != undefined) {
    slides[index - 2].classList = "slide lhidden";
  }
  if (slides[index - 1] != undefined) {
    slides[index - 1].classList = "slide lqueue";
  }
  if (slides[index + 1] != undefined) {
    slides[index + 1].classList = "slide rqueue";
  }
  if (slides[index + 2] != undefined) {
    slides[index + 2].classList = "slide rhidden";
  }
}

function initializeCarousel() {
  const slides = document.querySelectorAll(".slide");
  for (let index = 0; index < slides.length; index++) {
    const slide = slides[index];
    slide.classList.add("rhidden");
    slide.addEventListener("click", () => {
      activateCarousel(index);
    });
  }
  slides[0].classList = "slide active";
  slides[1].classList = "slide rqueue";
}

initializeCarousel();
/*Mapa*/
let h2 = document.querySelector('h2');
var map;

var map = L.map('map', {
  center: [51.505, -0.09],
  zoom: 13
});

var marker = L.marker([51.5, -0.09]).addTo(map);
  
function success(pos){
    console.log(pos.coords.latitude, pos.coords.longitude);
    
    if (map === undefined) {
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
    } else {
        map.remove();
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
    }
    var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
        .bindPopup('Your Location!')
        .openPopup(); 
        var icon = L.icon({
            iconUrl: 'green.png',
            iconSize:     [32, 37], // size of the icon
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor:  [-0, -76] // point from which the popup should open relative to the iconAnchor
            
        });
        
        /*var icone = L.icon({
            iconUrl: 'recycle.png',
            iconSize:     [64, 74], 
            iconAnchor:   [32, 74], 
            popupAnchor:  [-0, -76] 
        });*/
        
        
        /*var iconi = L.icon({
            iconUrl: 'recycle.png',
            iconSize:     [32, 37], 
            iconAnchor:   [22, 94],  
            popupAnchor:  [-0, -76] 
        });*/
        

        // Local de descarte de ixo
        L.marker([-23.641448, -46.699999], {icon}).addTo(map).openPopup();
        L.marker([-23.648045, -46.702382],{icon}).addTo(map).openPopup();
        L.marker([-23.645936, -46.703012], {icon}).addTo(map).openPopup();
        L.marker([-23.646948, -46.706370], {icon}).addTo(map).openPopup();
        L.marker([-23.648265, -46.705861], {icon}).addTo(map).openPopup();
        L.marker([-23.650379, -46.702626], {icon}).addTo(map).openPopup();
        L.marker([-23.647129, -46.697212], {icon}).addTo(map).openPopup();
        L.marker([-23.647060, -46.699208], {icon}).addTo(map).openPopup();
        L.marker([-23.642293, -46.702352], {icon}).addTo(map).openPopup();
        L.marker([-23.644259, -46.700625], {icon}).addTo(map).openPopup();
        L.marker([-23.644269, -46.704525], {icon}).addTo(map).openPopup();
        L.marker([-23.645431, -46.705522], {icon}).addTo(map).openPopup();
        L.marker([-23.646635, -46.705973], {icon}).addTo(map).openPopup();
        L.marker([-23.536358, -46.638349], {icon}).addTo(map).openPopup();
        L.marker([-23.663834, -46.650062], {icon}).addTo(map).openPopup();
        L.marker([-23.573114, -46.724250], {icon}).addTo(map).openPopup();
        L.marker([-23.645737, -46.730996], {icon}).addTo(map).openPopup();
        L.marker([-23.595231, -46.561042], {icon}).addTo(map).openPopup();
        L.marker([-23.561699, -46.540282], {icon}).addTo(map).openPopup();
        L.marker([-23.688457, -46.615438], {icon}).addTo(map).openPopup();
        L.marker([-23.561161, -46.564709], {icon}).addTo(map).openPopup();
        L.marker([-23623171, -46.682229], {icon}).addTo(map).openPopup();
        L.marker([-23.536398, -46.638308], {icon}).addTo(map).openPopup();
        L.marker([-23.775542, -46.610238], {icon}).addTo(map).openPopup();
        L.marker([-23.531667, -46,559732], {icon}).addTo(map).openPopup();
        L.marker([-23.775480, -46610368], {icon}).addTo(map).openPopup();
        L.marker([-23.650384, -46.532511], {icon}).addTo(map).openPopup();
        L.marker([-23.638662, -46.524627], {icon}).addTo(map).openPopup();
        L.marker([-23.560028, -46.536674], {icon}).addTo(map).openPopup();
        L.marker([-23.615785, -46.790370], {icon}).addTo(map).openPopup();
        L.marker([-23.499273, -46.620242], {icon}).addTo(map).openPopup();
        L.marker([-23.450080, -46.516907], {icon}).addTo(map).openPopup();
        L.marker([-23.668464, -46.88268], {icon}).addTo(map).openPopup();
        L.marker([-23.513118, -46.656217], {icon}).addTo(map).openPopup();
        L.marker([-23.499459, -46.681663], {icon}).addTo(map).openPopup();
        L.marker([-23.43829, -46.582558], {icon}).addTo(map).openPopup();
        L.marker([-23.512449, -46.864092], {icon}).addTo(map).openPopup();
        L.marker([-23.627561, -46.599890], {icon}).addTo(map).openPopup();
        L.marker([-23.547857, -46.548068], {icon}).addTo(map).openPopup();
        L.marker([-23.594833, -46.555496], {icon}).addTo(map).openPopup();
        L.marker([-23.647599, -46.496654], {icon}).addTo(map).openPopup();
        L.marker([-23.475369, 46.591744], {icon}).addTo(map).openPopup();
        L.marker([-23.669218, -46.546356], {icon}).addTo(map).openPopup();
        L.marker([-23.630693, -46.526727], {icon}).addTo(map).openPopup();
        L.marker([-23.741100, -46.684536], {icon}).addTo(map).openPopup();
        L.marker([-23.652955, -46.649020], {icon}).addTo(map).openPopup();
        L.marker([-23.563894, -46.653983], {icon}).addTo(map).openPopup();
        L.marker([-23.514635, -46.573699], {icon}).addTo(map).openPopup();
        L.marker([-23.607008, -46.550339], {icon}).addTo(map).openPopup();
        L.marker([-23.462641, -46.426466], {icon}).addTo(map).openPopup();


};
L.icon = function (options) {
    return new L.Icon(options);
};


function error(err){
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: false,
    timeout: 5000
});

const findMyState = () => {
    const status = document.querySelector('.status');

    const success = (position) => {
        console.log(position)
        const latitude = position.coors.latitude;
        const longitude = position.coors.longitude;
        
        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

        fetch(geoApiUrl)
        .then(res => res.json())
        .then(data => {
            status.textContent = data.principalSubdivision

        })
    }
    const error =() =>{
        status.textContent = 'Unable to retrieve your location';
    }
    navigator.geolocation.getCurrentPosition(success, error); 
}
document.querySelector('.find-state').addEventListener('click', findMyState);
