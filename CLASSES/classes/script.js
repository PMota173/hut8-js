class Button {
    constructor(text, backgroundColor) {
        this.text = text;
        this.backgroundColor = backgroundColor;
        return this.createButton();
    }
    createButton() {
        const button = document.createElement('button');
        button.innerText = this.text;
        button.style.backgroundColor = this.backgroundColor;
        button.onclick = () => {
            alert('Button clicked');
        }
        document.body.appendChild(button);
    }
    static blueButton(text) {
        return new Button(text, 'blue');
    }
} 

const newButton = Button.blueButton('hello');
