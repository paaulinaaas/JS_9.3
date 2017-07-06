var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops'
var dino = dinosaur.toUpperCase();

var correctText = text.replace('Velociraptor', dino);
var halfText = correctText.length/2;
console.log(halfText)
console.log(correctText.substr(0, 72));

// 9.3 toLowerCase() - przyklad do objasnienia
