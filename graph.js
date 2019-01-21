function Graph(cx, cy, r) {
  this.lines = [];
  this.angleLines = [];
  this.cx = cx;
  this.cy = cy;
  this.r = r;
}

Graph.prototype.generate = function () {
  noFill();
  stroke(0);
  ellipse(this.cx, this.cy, this.r*2);
  let primes = getPrimes(9);
  primes.splice(0, 2);
  for (let i = 0; i < 24; i++){
    if(!primes.contains(i)){
      this.lines.push(new Line(i*15, this.cx, this.cy, this.r));
    }
  }
  this.angleLines = this.lines.getRandom(6);
  this.angleLines.forEach((line, index) => {
    // line.initTrig(index);
  })

}
//
// Graph.prototype.angles = function(){
//   let newLines = this.lines.splice();
//   for (let i = 0; i <= newLines.length; i++){
//     newLines.push
//   }
// }
