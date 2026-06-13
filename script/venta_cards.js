console.log('Cards cargado correctamente');

const dataCards = [{
  "title": "Kawasaki",
  "url_image": "https://usados.crmotos.com/files/05-2026/ad17472/kawasaki-ninja-500-se-krt-1324156264_large.webp",
  "desc": "<strong>Ninja 500 SE KRT</strong> <br><br> <strong>Año:</strong> 2025 <br><br><strong>Version:</strong> Version SE Full Extras <br><br> <strong> Kilometraje: </strong> 2000KM <br><br> <strong> Precio: </strong> ₡ 5,000,000 <br><br>",
  "cta": "Ver Detalles",
  "link": "https://usados.crmotos.com/motos/motocicletas/pistera/kawasaki-ninja-500-se-krt-2025-17472.html"
},
{
  "title": "Yamaha",
  "url_image": "https://usados.crmotos.com/files/05-2026/ad17481/yamaha-2014-479024063_large.webp",
  "desc": "<strong> Raptor 700 </strong> <br><br> <strong>Año:</strong> 2014 <br><br><strong>Version:</strong> Version Full Extras <br><br> <strong> Kilometraje: </strong> Ilegible <br><br> Precio: </strong> ₡ 4,300,000 <br><br>",
  "cta": "Ver Detalles",
  "link": "https://usados.crmotos.com/motos/cuadras/deportivos/yamaha-2014-2014-17481.html"
},
{
  "title": "Honda",
  "url_image": "https://usados.crmotos.com/files/05-2026/ad17264/honda-cbr650r-830563533_large.webp",
  "desc": "<strong> CBR650R </strong> <br><br> <strong>Año:</strong> 2024 <br><br><strong>Version:</strong> Version Full Extras <br><br> <strong> Kilometraje: </strong> 4700KM <br><br> Precio: </strong> ₡ 5,000,000 <br><br>",
  "cta": "Ver Detalles",
  "link": "https://usados.crmotos.com/motos/motocicletas/pistera/honda-cbr650r-2024-17264.html"
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