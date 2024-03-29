const colorTest = new RGB (100,200,30)
console.log(colorTest); // проверка на инициализацию объекта(работает)

//////////////////////////////////////////////////////////////////////
const color1 = new RGB (20,20,20)
const color2 = new RGB ("20","20","20")

let a = color2.add(color1)
console.log(a)

//console.log(color1.add(color2)); 
// здесь у нас создается новый объект с новыми значениями. 
//Т.к мы решили, что "ВСЕ математические операции должны возвращать НОВЫЙ объект, а не менять текущий."
//Это значит, если мы пропишем console.log(color1) Мы заметим, что color1 останется с параметрами (20,20,20)
//теперь проверим операцию присваивания, но для начала поменяем значение цвета у color2 на(40,40,40)
color2.setColors(40,40,40)
color1.set(color2)
console.log(color1) // теперь мы заметили, что color1 присвоил значение color2. Метод работает

console.log(color1.isSimilarTo(color2)) // возращает true т.к цвета похожи

console.log(color1.toString()) // выводит информацию про RGB в виде строки

console.log(color1.multiply(2))
//////////////////////////////////////////////////////////////////////
//Проверка ошибок (просто уберите комментарий )
//const colorTest2 = new RGB (-2,10,11)
//const colorTest2 = new RGB ("ad20",20,"100")
//const colorTest2 = new RGB ("100","20","30")
//colorTest2.add(2)







