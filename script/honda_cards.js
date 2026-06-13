console.log('Cards cargado correctamente');

const dataCards = [{
  "title": "Honda Monkey 124 cc",
  "url_image": "https://mundohonda.cr/cdn/shop/files/honda-monkey-minimoto-semifrontal-rojablanco_931b86bb-c720-45bc-870d-f52f738596c8.jpg?v=1773159744&width=2000",
  "desc": "<strong>Pequeña Guerrera del Asfalto</strong> <br><br> La Honda Monkey es una motocicleta compacta de estilo icónico y retro, equipada con un motor eficiente de 124 cc y una transmisión de 5 velocidades ideal para la ciudad. <br><br> Destaca por su ligereza de solo 104 kg y una baja altura de asiento de 775 mm, lo que garantiza una agilidad y maniobrabilidad excepcionales para cualquier piloto.<br><br> Además, incorpora tecnología moderna como iluminación Full LED, panel de instrumentos digital LCD y un chasis robusto con horquilla telescópica invertida.",
  "cta": "Ver Modelo",
  "link": "https://mundohonda.cr/products/monkey"
},
{
  "title": "Honda CRF450X",
  "url_image": "https://mundohonda.cr/cdn/shop/files/honda-crf450x-especiales-semifrontal-roja.jpg?v=1774230363&width=2000",
  "desc": "<strong> Una Maquina construida para ridear </strong> <br><br> La Honda CRF450X es una motocicleta de enduro de alto rendimiento diseñada para dominar terrenos todoterreno, equipada con un potente motor monocilíndrico de 449 cc con válvulas de titanio y una transmisión mecánica de 6 velocidades. <br><br> Destaca por su parte ciclo de nivel profesional, que incorpora una horquilla invertida Showa de 49 mm ajustable con 305 mm de recorrido, un brazo basculante Pro-Link trasero y frenos de disco hidráulicos de gran respuesta. <br><br> Además, viene lista para la acción extrema con extras premium de fábrica que incluyen tanque y válvulas de titanio, batería de litio liviana, doble radiador, protectores de puños y aros DirtStar de alta resistencia.",
  "cta": "Ver Modelo",
  "link": "https://mundohonda.cr/products/crf450x"
},
{
  "title": "Honda CBR650R E-Clutch",
  "url_image": "https://mundohonda.cr/cdn/shop/files/honda-cbr650reclutch-supersport-semifrontal-rojo.jpg?v=1774231375&width=2000",
  "desc": "<strong> Dejate llevar por su Potencia </strong> <br><br> La Honda CBR650R E-Clutch es una motocicleta deportiva de media cilindrada que destaca por su potente motor DOHC de 4 cilindros en línea y 649 cc, capaz de entregar unos emocionantes 93.8 hp a 12,000 rpm. <br><br> La gran revolución de este modelo es la incorporación de la tecnología exclusiva Honda E-Clutch en su transmisión de 6 velocidades, un sistema que permite gestionar el embrague de forma automática para arrancar y cambiar de marcha sin usar la maneta, manteniendo toda la deportividad de una caja mecánica. <br><br>Su parte ciclo de alto rendimiento asegura un control total gracias a una altura de asiento de 810 mm, un peso en orden de marcha de 211 kg, un tanque de 15.4 litros y un potente sistema de frenos con doble disco delantero de 310 mm, pinzas radiales Nissin de 4 pistones y ABS.",
  "cta": "Ver Modelo",
  "link": "https://mundohonda.cr/products/cbr650r-e-clutch"
}
];

(function () {
  let CARD = {
    init: function () {
      //console.log('card module was loaded');
      let _self = this;

      //llamanos las funciones
      this.insertData(_self);
      //this.eventHandler(_self);
    },

    eventHandler: function (_self) {
      let arrayRefs = document.querySelectorAll('.accordion-title');

      for (let x = 0; x < arrayRefs.length; x++) {
        arrayRefs[x].addEventListener('click', function (event) {
          console.log('event', event);
          _self.showTab(event.target);
        });
      }
    },

    insertData: function (_self) {
      dataCards.map(function (item, index) {
        document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
      });
    },

    tplCardItem: function (item, index) {
      return (`<div class='card-item' id="card-number-${index}">
            <img src="${item.url_image}"/>
            <div class="card-info">
              <p class='card-title'>${item.title}</p>
              <p class='card-desc'>${item.desc}</p>
              <div class="boton-cta">
              <a class='card-cta' target="blank" href="${item.link}">${item.cta}</a>
              </div>
            </div>
          </div>`)
    },
  }

  CARD.init();
})();