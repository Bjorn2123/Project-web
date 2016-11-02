// ik roep alle elementen aan met de class heart en sla ze op in een variabele. //
var hearts = document.querySelectorAll('.heart');

// lopen door alle elementen//
for (var i = 0; i < hearts.length; ++i) {
    
    
  // voeg een event toe aan elk item in de hearts lijst  
  hearts[i].addEventListener('click', function () {
      this.classList.toggle('loved');
  }, false);

}