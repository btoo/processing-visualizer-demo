import p5 from 'p5'

new p5(s => {

  const np = 300
  let startcol

  s.setup = _ => {
    s.createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
    s.background(255)
    s.noFill()
    s.noiseSeed(s.random(100))
    startcol = s.random(255)
  }

  s.draw = _ => {
    // s.background(51);
    s.beginShape()
    var sx, sy;
    for (var i = 0; i < np; i++) {
      var angle = s.map(i, 0, np, 0, s.TWO_PI);
      var cx = s.frameCount * 2 - 200;
      var cy = s.height / 2 + 50 * s.sin(s.frameCount / 50);
      var xx = 100 * s.cos(angle + cx / 10);
      var yy = 100 * s.sin(angle + cx / 10);
      var v = s.createVector(xx, yy);
      xx = (xx + cx) / 150; yy = (yy + cy) / 150;
      v.mult(1 + 1.5 * s.noise(xx, yy));
      s.vertex(cx + v.x, cy + v.y);
      if (i == 0) {
        sx = cx + v.x;
        sy = cy + v.y;
      }
    }
    s.colorMode(s.HSB);
    var hue = cx / 10 - startcol;
    if (hue < 0) hue += 255;
    s.stroke(hue, 100, 120);
    s.strokeWeight(0.1);
    s.vertex(sx, sy);
    s.endShape();
    if (s.frameCount > s.width + 500) {
      s.noLoop();
    }
  }

})