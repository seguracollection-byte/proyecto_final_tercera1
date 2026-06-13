console.log('Cards cargado correctamente');

const dataCards = [{
  "title": "Yamaha YZF-R3 FI",
  "url_image": "https://static.wixstatic.com/media/57335c_e1885b5fb89a4c01b4f1c3a147c817e5~mv2.jpg/v1/fill/w_1065,h_1065,al_c,q_85,enc_avif,quality_auto/57335c_e1885b5fb89a4c01b4f1c3a147c817e5~mv2.jpg",
  "desc": "<strong>Diseñada para el Asfalto</strong> <br><br> La Yamaha YZF-R3 es una motocicleta superdeportiva ligera con ADN de competición, equipada con un motor bicilíndrico de 321 cc con inyección electrónica y refrigeración líquida que entrega unos ágiles 42 hp. <br><br> Destaca por su parte ciclo de alto rendimiento gracias a una suspensión delantera con horquilla invertida KYB de 37 mm, transmisión de 6 velocidades y frenos de disco hidráulicos en ambas ruedas asistidos con sistema ABS. <br></br>Además, combina a la perfección la agresividad de su carrocería de inspiración R1 con la practicidad para el día a día, ofreciendo un panel LCD multifunción con conectividad para smartphone y un peso total en orden de marcha de solo 169 kg.",
  "cta": "Ver Modelo",
  "link": "https://www.yamahacostarica.com/product-page/yzf-r3-1"
},
{
  "title": "Yamaha YZ450F",
  "url_image": "https://static.wixstatic.com/media/b4a6cf_e6f5fac695b641778b2db0c9448f4a56~mv2.png/v1/fill/w_708,h_708,al_c,q_90,enc_avif,quality_auto/b4a6cf_e6f5fac695b641778b2db0c9448f4a56~mv2.png",
  "desc": "<strong> Una Maquina construida el barro </strong> <br><br> La Yamaha YZ450F es una motocicleta de motocross de competición pura, equipada con un potente motor de 450 cc de culata invertida, arranque eléctrico y una transmisión de 5 velocidades de engranaje constante.<br><br>Destaca por su chasis de viga de aluminio bilateral rediseñado y un sistema de suspensiones KYB totalmente ajustable que ofrece 310 mm de recorrido delantero y 315 mm trasero para máxima tracción.<br><br>Además, incorpora tecnología de vanguardia como la aplicación Power Tuner para ajustar el motor desde el celular, control de tracción y un peso en orden de marcha ultra ligero de tan solo 109 kg.",
  "cta": "Ver Modelo",
  "link": "https://www.yamahacostarica.com/product-page/yz450f"
},
{
  "title": "Yamaha Raptor 700R SE",
  "url_image": "https://static.wixstatic.com/media/b4a6cf_f0e4841341bc444d8304977576209fbb~mv2.png/v1/fill/w_712,h_709,al_c,q_90,enc_avif,quality_auto/b4a6cf_f0e4841341bc444d8304977576209fbb~mv2.png",
  "desc": "<strong> Dejate llevar por su Potencia en 4 Ruedas </strong> <br><br> El Yamaha Raptor 700R es el cuadraciclo deportivo de gran calibre más vendido del mercado, equipado con un potente motor de 686 cc con inyección electrónica y una transmisión manual de 5 velocidades más reversa.<br><br>Destaca por su avanzado chasis híbrido de acero y aluminio, que lo convierte en el modelo más ligero de su clase (191 kg en orden de marcha) sin sacrificar la rigidez ni la durabilidad en los terrenos más exigentes.<br><br>Además, incorpora una suspensión de nivel profesional inspirada en el YFZ, con horquilla doble independiente en la parte delantera y un sistema Monocross trasero que aseguran un control total y un manejo sumamente cómodo en la ruta.",
  "cta": "Ver Modelo",
  "link": "https://www.yamahacostarica.com/product-page/raptor-700-r"
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