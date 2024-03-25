class RGB {
    #red
    #green
    #blue
    constructor(red,green,blue){
        this.#validateColor(red)
        this.#validateColor(green)
        this.#validateColor(blue)

        this.#red = red
        this.#green = green
        this.#blue = blue
    }
    #validateColor = (value) => {
        if (isNaN(value) || value < 0 || value > 255) {
          throw new Error("Некорректное значение цвета: " + value);
        }
    }
    setColors = (red,green,blue) => {
        this.#validateColor(red)
        this.#validateColor(green)
        this.#validateColor(blue)

        this.#red = red
        this.#green = green
        this.#blue = blue
    }
    isSimilarTo = (otherColor) => {
        const deltaRed = Math.abs(this.#red - otherColor.#red)
        const deltaGreen = Math.abs(this.#green - otherColor.#green)
        const deltaBlue = Math.abs(this.#blue - otherColor.#blue)

        return deltaRed <= 10 && deltaGreen <= 10 && deltaBlue <= 10
    }
}