import p5 from 'p5'

new p5(s => {

  s.setup = _ => s.createCanvas(640, 480)
  
  s.draw = _ => {
    s.mouseIsPressed
      ? s.fill(0)
      : s.fill(255)
    
    s.ellipse(s.mouseX, s.mouseY, 80, 80)
  }

})
