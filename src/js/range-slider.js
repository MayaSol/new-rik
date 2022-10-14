var sliderCatalog = document.querySelector('.range-slider--catalog');
console.log(sliderCatalog);
console.log(sliderCatalog.noUiSlider);
sliderCatalog.noUiSlider.on('update', function(values, handle) {
  console.log('!!!');
});
