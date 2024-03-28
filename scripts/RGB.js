class RGB {
    #red;
    #green;
    #blue;

    constructor(red, green, blue) {
        this.setColors(parseInt(red), parseInt(green), parseInt(blue))
    }

    #validateColor = (value) => {
        if (isNaN(value) || value < 0 || value > 255) {
            throw new Error("Некорректное значение цвета: " + value)
        }
    }

    #validateObject = (otherColor) => {
        if (!(otherColor instanceof RGB)) {
            throw new Error("Некорректный тип объекта: " + otherColor)
        }
    }

    setColors = (red, green, blue) => {
        this.#validateColor(red)
        this.#validateColor(green)
        this.#validateColor(blue)

        this.#red = red
        this.#green = green
        this.#blue = blue

        return this
    }

    add = (otherColor) => {
        this.#validateObject(otherColor)

        const newRed = this.#red + otherColor.#red
        const newGreen = this.#green + otherColor.#green
        const newBlue = this.#blue + otherColor.#blue
    
        return new RGB(newRed, newGreen, newBlue)
    }
    
    subtract = (otherColor) => {
        this.#validateObject(otherColor)
        
        const newRed = this.#red - otherColor.#red
        const newGreen = this.#green - otherColor.#green
        const newBlue = this.#blue - otherColor.#blue
    
        return new RGB(newRed, newGreen, newBlue)
    }
    multiply = (factor) => {
        const newRed = Math.min(Math.round(this.#red * factor), 255)
        const newGreen = Math.min(Math.round(this.#green * factor), 255)
        const newBlue = Math.min(Math.round(this.#blue * factor), 255)

        return new RGB(newRed, newGreen, newBlue)
    }
    
    isSimilarTo = (otherColor) => {
        this.#validateObject(otherColor)

        const deltaRed = Math.abs(this.#red - otherColor.#red)
        const deltaGreen = Math.abs(this.#green - otherColor.#green)
        const deltaBlue = Math.abs(this.#blue - otherColor.#blue)
    
        return deltaRed <= 10 && deltaGreen <= 10 && deltaBlue <= 10
    }
    
    set = (otherColor) => {
        this.#validateObject(otherColor)

        this.#red = otherColor.#red
        this.#green = otherColor.#green
        this.#blue = otherColor.#blue
    }

    toString = () => {
        return `RGB(${this.#red}, ${this.#green}, ${this.#blue})`
    }
}
