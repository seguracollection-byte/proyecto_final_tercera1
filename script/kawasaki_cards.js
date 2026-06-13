console.log('Cards cargado correctamente');

const dataCards = [{
  "title": "Kawasaki Ninja ZX-10R",
  "url_image": "https://kawasaki-la-administration.com//ContentStorage/KLA/ProductTrimGroup/64/7adef2bd-c8ea-4b60-9e10-8772182a8a7a.jpg?w=750",
  "desc": "<strong>Enamorate de su velocidad</strong> <br><br> La Kawasaki Ninja ZX-10R es una motocicleta supersport con auténtico ADN de competición, equipada con un motor de cuatro cilindros en línea de 998 cc y refrigeración líquida que entrega una impresionante potencia de más de 190 hp.<br><br>Destaca por su parte ciclo de nivel profesional que incorpora componentes de suspensión Showa Balance Free totalmente ajustables, un chasis de aluminio de gran agilidad y un paquete de frenos Brembo de alto rendimiento con pinzas monobloque M50.<br><br>Además, integra tecnología y aerodinámica de vanguardia con alerones integrados en su carrocería, instrumentación TFT a color de 5 pulgadas con conectividad smartphone y un robusto paquete electrónico gestionado por IMU que incluye control de tracción y de salida.",
  "cta": "Ver Modelo",
  "link": "https://costarica.kawasaki-la.com/en-la/motorcycle/ninja/supersport/ninja-zx-10r"
},
{
  "title": "Kawasaki KX 450",
  "url_image": "https://kawasaki-la-administration.com//ContentStorage/KLA/Products/8841/da686e45-71eb-478e-8d03-9a444bf078f2.png?w=675",
  "desc": "<strong> Para el Campeon dentro nuestro </strong> <br><br> La Kawasaki KX450 es una motocicleta de motocross de competición pura y alto rendimiento, impulsada por un potente motor monocilíndrico de 449 cc de 4 tiempos refrigerado por líquido y una transmisión de 5 velocidades con embrague hidráulico.<br><br>Destaca por su avanzada parte ciclo que incorpora un chasis perimetral de aluminio de gran agilidad, suspensiones Showa de nivel profesional con horquilla invertida de 49 mm ajustable y un potente sistema de frenos firmado por Brembo en el tren delantero.<br><br>Además, integra tecnología de vanguardia para la pista que incluye control de tracción (KTRC), control de salida (Launch Control), mapas de motor seleccionables desde el manillar y conectividad inalámbrica mediante la aplicación Rideology para ajustar la moto desde el celular.",
  "cta": "Ver Modelo",
  "link": "https://costarica.kawasaki-la.com/en-la/motorcycle/kx/full-size-mx/kx-450f/2026-kx450"
},
{
  "title": "Kawasaki BruteForce 450 4x4",
  "url_image": "https://kawasaki-la-administration.com//ContentStorage/KLA/ProductTrimGroup/2033/4faa5027-f09c-4c29-a1c9-095c1d316caa.jpg?w=750",
  "desc": "<strong> Enamorate de su fuerza 4x4 </strong> <br><br> El Kawasaki Brute Force 450 4x4 es un cuadraciclo (ATV) utilitario y recreativo de tamaño mediano, impulsado por un motor monocilíndrico de 443 cc refrigerado por líquido y una transmisión automática CVT con freno de motor para descensos controlados.<br><br>Destaca por su excelente capacidad todoterreno gracias a su sistema de tracción 4x2/4x4 seleccionable bajo demanda con bloqueo de diferencial delantero, una suspensión independiente de largo recorrido en las cuatro ruedas y una altura libre al suelo de 235 mm.<br><br>Además, viene equipado de fábrica para el trabajo exigente y la aventura con un receptor de enganche de 2 pulgadas listo para remolcar hasta 476 kg, robustas parrillas de carga delantera y trasera con cubiertas plásticas y un moderno sistema de iluminación Full LED.",
  "cta": "Ver Modelo",
  "link": "https://costarica.kawasaki-la.com/en-la/atv/atv-utility-recreation/utility-recreation/brute-force-450-4x4"
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