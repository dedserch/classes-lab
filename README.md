# Описание класса RGB

❤️ **Студенческий номер 2322297** ❤️ 

Этот класс `RGB` представляет собой модель цвета в формате RGB и обеспечивает возможность выполнения различных операций с цветами.

## Описание класса

### Основные операции

1. **Создание экземпляра:** Класс `RGB` позволяет создавать объекты, представляющие цвет в формате RGB, используя значения красного (`red`), зеленого (`green`) и синего (`blue`) компонентов.

2. **Операции над цветами:**
   - `add(otherColor)`: Сложение цветов.
   - `subtract(otherColor)`: Вычитание цветов.
   - `multiply(factor)`: Умножение цвета на число.
   - `isSimilarTo(otherColor)`: Определение схожести цветов.
   - `set(otherColor)`: Метод присваивания.
   - `setColors(red,green,blue)`: Метод позволяющий поменять цвет экземпляра

### Метод `isSimilarTo()`

Метод `isSimilarTo()` определяет, насколько два цвета схожи друг с другом. Схожесть определяется по Евклидовому расстоянию в трехмерном пространстве компонентов цвета (RGB). Меньшее расстояние указывает на более схожие цвета.

Можно изменить порог схожести, регулируя значения допустимой разницы для каждой компоненты цвета.

### Заметки

- Значения цветов ограничены от 0 до 255.
- При создании экземпляра класса или изменении цвета, значения автоматически проверяются на корректность.
- В случае некорректных значений или типа объекта генерируется исключение.

Этот класс обеспечивает простой и эффективный способ работы с цветами в формате RGB, позволяя выполнять различные операции и анализировать их схожесть.
