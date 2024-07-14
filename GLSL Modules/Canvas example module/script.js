class CanvasPaint{
    constructor(canvas){
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
    }
}

class Paint{
    constructor(canvas){
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
    }

    draw(){
        this.ctx.fillStyle = "#000000"
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
    }

    clear(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }

    setColor(color){
        this.ctx.fillStyle = color
    }

    setLineWidth(width){
        this.ctx.lineWidth = width
    }

    setLineCap(cap){
        this.ctx.lineCap = cap
    }

    setLineJoin(join){
        this.ctx.lineJoin = join
    }

    setLineDash(dash){
        this.ctx.setLineDash(dash)
    }

    beginPath(){
        this.ctx.beginPath()
    }

    closePath(){
        this.ctx.closePath()
    }

    moveTo(x,y){
        this.ctx.moveTo(x,y)
    }

    lineTo(x,y){
        this.ctx.lineTo(x,y)
    }

    quadraticCurveTo(cpx,cpy,x,y){
        this.ctx.quadraticCurveTo(cpx,cpy,x,y)
    }

    bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y){
        this.ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y)
    }

    arcTo(x1,y1,x2,y2,radius){
        this.ctx.arcTo(x1,y1,x2,y2,radius)
    }           

    rect(x,y,width,height){
        this.ctx.rect(x,y,width,height)
    }

    fill(){
        this.ctx.fill()
    }

    stroke(){
        this.ctx.stroke()
    }
}

var canvas = document.querySelector("canvas")
var paint = new Paint(canvas)
paint.draw()
paint.setColor("#FF0000")
paint.setLineWidth(5)
paint.setLineCap("round")
paint.setLineJoin("round")
paint.setLineDash([5,10])
paint.beginPath()
paint.moveTo(100,100)
paint.lineTo(200,200)
paint.quadraticCurveTo(200,200,300,300)
paint.bezierCurveTo(300,300,400,400,500,500)
paint.arcTo(500,500,600,600,100)
paint.rect(100,100,100,100)
paint.fill()
paint.stroke()
