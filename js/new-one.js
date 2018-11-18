var fireballSize = 22;
var getFireballSpeed = function (left) {
  return left ? 5 : 2;
};

var wizardSpeed = 3;
var wizardWidth = 70;
var getWizardHeight = function () {
  var wizardHeight = wizardWidth * 1.337;
  return wizardHeight;
};

var getWizardX = function (width) {
  var coordinateX = (width - wizardWidth) / 2;
  return coordinateX;
};

var getWizardY = function (height) {
  var coordinateY = height / 2;
  return coordinateY;
};



// Объявите переменную getFireballSpeed, которая будет управлять скоростью фаербола в зависимости от направления ветра в игре. Значением этой переменной должна быть функция c одним параметром — left (направление полёта фаербола), если параметр left — true, то фаербол летит по ветру и функция возвращает скорость равную 5, иначе он летит против ветра со скоростью 2.

// Установите скорость мага wizardSpeed равной 3.

// Установите ширину мага wizardWidth равной 70.

// Задайте переменной getWizardHeight функцию, которая возвращает пропорциональную высоту мага, то есть высота мага — это пропорция 1.337 * ширина мага.

//Определите функцию getWizardX c одним параметром — width. Игра будет вызывать вашу функцию и передавать в неё этот параметр (который обозначает ширину игровой области). Результат, возвращаемый вашей функцией, игра будет использовать, чтобы задать положение мага по горизонтали. Напишите функцию так, чтобы центр фигурки мага находился посередине игрового поля.

//Определите функцию getWizardY c одним параметром — height. Игра будет вызывать вашу функцию и передавать в неё этот параметр (который обозначает высоту игровой области). Результат, возвращаемый вашей функцией, игра будет использовать, чтобы задать положение мага по вертикали. Напишите функцию так, чтобы маг появлялся на высоте две трети игрового поля от земли.
