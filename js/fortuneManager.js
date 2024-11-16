class FortuneManager {
    constructor(quoteBoxId) {
        this.fortuneStyles = [
            new FortuneStyle({
                fontFamily: "Verdana",
                fontColor: "#4CAF50", // Material Green 500
                bgColor: "#F1F8E9", // Light Green 50
                fontSize: "13px"
            }),
            new FortuneStyle({
                fontFamily: "Roboto",
                fontColor: "#2196F3", // Material Blue 500
                bgColor: "#E3F2FD", // Light Blue 50
                fontSize: "14px"
            }),
            new FortuneStyle({
                fontFamily: "Georgia",
                fontColor: "#FFC107", // Material Amber 500
                bgColor: "#FFF8E1", // Amber 50
                fontSize: "15px"
            }),
            new FortuneStyle({
                fontFamily: "Courier New",
                fontColor: "#F44336", // Material Red 500
                bgColor: "#FFEBEE", // Red 50
                fontSize: "16px"
            })
        ]
        this.fortunes = [
            new Fortune({
                text: "Happiness is a journey, not a destination.",
                fortuneStyle : this.fortuneStyles[0]
            }),
            new Fortune({
                text: "Success is not final, failure is not fatal.",
                fortuneStyle : this.fortuneStyles[1]
            }),
            new Fortune({
                text: "Keep your face always toward the sunshine.",
                fortuneStyle : this.fortuneStyles[2]
            }),
            new Fortune({
                text: "The best way to predict your future is to create it.",
                fortuneStyle : this.fortuneStyles[3]
            })
        ];

        this.quoteBox = document.getElementById(quoteBoxId);
    }

    setButtonColors(button, idx){
        const fortuneStyle = this.fortuneStyles[idx];
        button.style.background = fortuneStyle.bgColor;
    }

    displayRandomFortune() {
        const randomIndex = Math.floor(Math.random() * this.fortunes.length);
        const fortune = this.fortunes[randomIndex];
        const style = this.fortuneStyles[randomIndex]

        console.log(`This is beinbg called, ${fortune.text}`)

        
        this.quoteBox.innerHTML = 
        `
            <div class="flex-row-justified">
                <div style="width: 100%; align-items: center;">${fortune.text} </div>
                <div class="button-container">
                    <button class="clickable-card" index="0" ></button>
                    <button class="clickable-card" index="1" ></button>
                    <button class="clickable-card" index="2" ></button>
                    <button class="clickable-card" index="3" ></button>
                </div>
            </div>
        `

        this.quoteBox.style.fontSize = style.fontSize;
        this.quoteBox.style.fontColor = style.fontColor;
        this.quoteBox.style.backgroundColor = style.bgColor;
        this.quoteBox.style.fontFamily = style.fontFamily;
        this.quoteBox.style.borderColor = this.adjustBrightness(style.bgColor, 0.8)
    }

    changeStyle(index) {
        const idx = index;

        const fortuneStyle = this.fortuneStyles[idx];
        
        this.quoteBox.style.backgroundColor = fortuneStyle.bgColor;
        this.quoteBox.style.borderColor = this.adjustBrightness(fortuneStyle.bgColor, 0.8);
        this.quoteBox.style.fontFamily = fortuneStyle.fontFamily
        this.quoteBox.style.fontSize = fortuneStyle.fontSize
    }

    adjustBrightness(color, factor) {
        const r = Math.min(255, Math.floor(parseInt(color.slice(1, 3), 16) * factor));
        const g = Math.min(255, Math.floor(parseInt(color.slice(3, 5), 16) * factor));
        const b = Math.min(255, Math.floor(parseInt(color.slice(5, 7), 16) * factor));
        return `rgb(${r}, ${g}, ${b})`;
    }
}

