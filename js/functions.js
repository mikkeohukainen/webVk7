import { Circle } from "./class/Circle.js"
import { Line } from "./class/Line.js"
import { Rectangle } from "./class/Rectangle.js"
import { Square } from "./class/Square.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const x_input = document.querySelector('#x')
const y_input = document.querySelector('#y')
const draw_button = document.querySelector('button')
const radio_form = document.querySelector('form')
const lineW_input = document.querySelector('input[type=number]')
const colorInput = document.querySelector('input[type=color]')

const updateUI = (label3, label4) => {
    document.querySelector('div#third label').innerHTML = label3

    if (label4 !== undefined) {
        document.querySelector('div#fourth label').innerHTML = label4
        document.querySelector('div#fourth label').style.display = "inline-block"
        document.querySelector('div#fourth input').style.display = "inline-block"
    }
    else {
        document.querySelector('div#fourth label').style.display = "none"
        document.querySelector('div#fourth input').style.display = "none"
    }
}

radio_form.addEventListener('click', () => {
    const shape = radio_form['shape'].value
    switch (shape) {
        case 'line':
            updateUI('x2', 'y2')
            break
        case 'circle':
            updateUI('width: ')
            break
        case 'rectangle':
            updateUI('width: ', 'height: ')
            break
        case 'square':
            updateUI('width: ')
            break
    }
})

draw_button.addEventListener('click', () => {
    const shape = radio_form['shape'].value
    switch (shape) {
        case 'line':
            drawLine()
            break
        case 'circle':
            drawCircle()
            break
        case 'rectangle':
            drawRectangle()
            break
        case 'square':
            drawSquare()
            break
    }
})

const drawLine = () => {
    const x = x_input.value
    const y = y_input.value
    const x2 = document.querySelector('div#third input').value
    const y2 = document.querySelector('div#fourth input').value
    const lineWidth = lineW_input.value
    const line = new Line(x, y, x2, y2)
    line.lineWidth = lineWidth
    line.color = colorInput.value
    line.draw(ctx)
}

const drawCircle = () => {
    const x = x_input.value
    const y = y_input.value
    const width = document.querySelector('div#third input').value
    const lineWidth = lineW_input.value
    const circle = new Circle(x, y, width/2)
    circle.lineWidth = lineWidth
    circle.color = colorInput.value
    circle.draw(ctx)
}

const drawRectangle = () => {
    const x = x_input.value
    const y = y_input.value
    const w = document.querySelector('div#third input').value
    const h = document.querySelector('div#fourth input').value
    const lineWidth = lineW_input.value
    const rect = new Rectangle(x, y, w, h)
    rect.lineWidth = lineWidth
    rect.color = colorInput.value
    rect.draw(ctx)
}

const drawSquare = () => {
    const x = x_input.value
    const y = y_input.value
    const w = document.querySelector('div#third input').value
    const lineWidth = lineW_input.value
    const square = new Square(x, y, w)
    square.lineWidth = lineWidth
    square.color = colorInput.value
    square.draw(ctx)
}
