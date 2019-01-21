function Line(angle, cx, cy, r) {
  this.angle = angle;
  this.cx = cx;
  this.cy = cy;
  this.r = r;
  stroke(0);
  angleMode(DEGREES);
  line(cx, cy, cx + r * cos(angle), cy + r * sin(angle));
}
// 
// Line.prototype.initTrig = function(num) {
//   switch (num) {
//     case 1:
//       this.check =
//       break;
//     default:
//
//   }
// }
