JQVMap.prototype.animateFill = function (path, next) {
  next = HslUtil.parseHsl(next);
  var current = HslUtil.parseHsl(path.getFill());

  if(!current || !next) {
    return null;
  }

  var delta = next.h - current.h;

  if(delta === 0) {
    return null;
  }

  var h,
      steps = [],
      stepSize = 1;

  for (var i = 0; i < Math.abs(delta); i = i + stepSize) {
    if (delta < 0) {
      h = current.h - i;
    } else {
      h = current.h + i;
    }

    steps.push(HslUtil.toHsl(h));
  }

  var s = steps.length,
      c = 0;

  function animate() {

    if(c === s) {
      path.setAttribute('original', steps[c - 1]);
      return;
    }

    path.setFill(steps[c]);
    c++;

    // request another loop of animation
    requestAnimationFrame(animate);
  }

  // start the animation
  requestAnimationFrame(animate);

  return true;
};
