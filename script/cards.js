console.log('Cards cargado correctamente');

const dataCards = [{
  "title": "Honda",
  "url_image": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg",
  "desc": "Explora nuestra gama de cuatrimotos y moticiletas Honda, diseñadas para ofrecer un rendimiento excepcional y una experiencia de conducción inigualable.",
  "cta": "Ver Modelos",
  "link": "./honda.php"
},
{
  "title": "Yamaha",
  "url_image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Yamaha-Logo.png",
  "desc": "Descrubre la potencia y la innovación de las motocicletas Yamaha, perfectas para los amantes de la velocidad y la aventura.",
  "cta": "Ver Modelos",
  "link": "./yamaha.php"
},
{
  "title": "Kawasaki",
  "url_image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Kawasaki_Logo_vert.svg",
  "desc": "Descubre la potencia y el rendimiento de las motocicletas Kawasaki, ideales para los entusiastas de la velocidad y la acción.",
  "cta": "Ver Modelos",
  "link": "./kawasaki.php"
},
{
  "title": "Venta de Motos",
  "url_image": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Online-shop_button.jpg",
  "desc": "Quieres comprar una moto? Tenemos las mejores ofertas para ti, con una amplia selección de modelos y precios competitivos. Encuentra la moto perfecta para ti hoy mismo.",
  "cta": "Ver Ofertas",
  "link": "./venta.php"
},
{
  "title": "Tours de Aventura",
  "url_image": ".img/cuatrimoto.jpg",
  "desc": "Ven a explorar el mundo sobre dos o cuatro ruedas con nuestros emocionantes tours de aventura. Descubre paisajes impresionantes, culturas fascinantes y experiencias inolvidables mientras recorres rutas diseñadas para los amantes de la motocicleta.",
  "cta": "Ver Tours",
  "link": "./tours.php"
},
{
  "title": "About Us",
  "url_image": "https://lsinet.co.uk/wp-content/uploads/2019/09/usa-1249880_1920.jpg",
  "desc": "Quieres saber más sobre nosotros? En Moto Hub, somos apasionados por las motocicletas y estamos dedicados a ofrecerte la mejor experiencia en ventas y tours de aventura. Con años de experiencia en la industria, nuestro equipo está comprometido a brindarte un servicio excepcional y ayudarte a encontrar la moto perfecta para ti.",
  "cta": "Saber Más",
  "link": "./about_us.php"
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