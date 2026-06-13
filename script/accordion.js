console.log('Cargando Accordion...');
const dataAccordion = [{
  "title": "<strong>¿Quienes Somos?</strong>",
  "desc": "Fundada en 2026, MotoHub es el punto de encuentro definitivo para los apasionados de las dos ruedas. Combinamos una tienda de motocicletas de alta calidad con una plataforma informativa de confianza, ofreciendo reseñas, guías técnicas y consejos para que rodés con seguridad y libertad. No solo vendemos motos, construimos comunidad."
},
{
  "title": "<strong>Nuestra Misión</strong>",
  "desc": "Equipar a los motociclistas con los mejores vehículos del mercado y el conocimiento necesario para disfrutar de la ruta con total seguridad, transparencia y libertad."
},
{
  "title": "<strong>Nuestra Visión</strong>",
  "desc": "Ser la plataforma digital de referencia en el mundo del motociclismo, transformando la forma en que los pilotos investigan, compran y viven la cultura de las dos ruedas."
},
{
  "title": "<strong>Nuestros Valores</strong>",
  "desc": "<strong>• Comunidad:</strong> Nos mueve el espíritu de hermandad motera.<br><br> <strong>• Seguridad:</strong> Promovemos una conducción responsable con información clara y vehículos óptimos.<br><br> <strong>• Innovación:</strong> Te traemos siempre las últimas tendencias y tecnologías del mercado."
},
{
  "title": "<strong>¿Por qué elegir MotoHub?</strong>",
  "desc": "<strong>• Pasión real:</strong> Somos un equipo de motociclistas que entiende lo que necesitás.<br><br> <strong>• Transparencia:</strong> Información sin filtros para que comprés con total confianza.<br><br> <strong>• Soporte continuo:</strong> Te acompañamos antes, durante y después de tu compra con contenido de valor."
},
];


(function () {
    let ACCORDION = {
      init: function () {
        let _self = this;
        //llamanos las funciones
        this.insertData(_self);
        this.eventHandler(_self);
      },
  
      eventHandler: function (_self) {
        let arrayRefs = document.querySelectorAll('.accordion-title');
  
        for (let x = 0; x < arrayRefs.length; x++) {
          arrayRefs[x].addEventListener('click', function(event){
            console.log('event', event);
            _self.showTab(event.target);
          });
        }
      },

      showTab: function(refItem){
        let activeTab = document.querySelector('.tab-active');
  
        if(activeTab){
          activeTab.classList.remove('tab-active');
        }
  
        console.log('show tab', refItem);
        refItem.parentElement.classList.toggle('tab-active');
      },
  
      insertData: function (_self) {
        dataAccordion.map(function (item, index) {
          document.querySelector('.main-accordion-container').insertAdjacentHTML('beforeend', _self.tplAccordionItem(item));
        });
      },

      tplAccordionItem: function (item) {
        return(`<div class='accordion-item'>
        <p class='accordion-title'>${item.title}</p>
        <p class='accordion-desc'>${item.desc}</p>
      </div>`)},
    }
  
    ACCORDION.init();
  })();