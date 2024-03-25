const colorTest = new RGB(20,50,100)
console.log(colorTest); // Проверка на инициализацию класса

colorTest.setColors(100,200,50)
console.log(colorTest); // Проверка на изменение свойств

//colorTest.setColors(1000,"5000",-1)
//console.log(colorTest); //Проверка на ошибку при неправильном вводе данных. При этих данных нам выбьет: "Некорректное значение цвета: " + value

const color1 = new RGB(255, 0, 0)
const color2 = new RGB(250, 10, 10)

console.log(color1.isSimilarTo(color2)); // выведет true

color1.setColors(10,20,50)
console.log(color1.isSimilarTo(color2)); // выведет false





