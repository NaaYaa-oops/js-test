
class Component{
    constructor(selector){
        this.$el = document.querySelector(selector)
    }
    show(){
        this.$el.style.display = 'block'
    }
    hide(){
        this.$el.style.display = 'none'
    }
}

class Box extends Component{
    constructor(options){
        super(options.selector)    
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

class Circle extends Box{
    constructor(options){
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})
const box2 = new Box({
    selector: '#box2',
    size: 140,
    color: 'blue'
})

const circle1 = new Circle({
    selector: '#circle1',
    size: 180,
    color: 'blue',
})