JQVMap.prototype.setColors = function (key, color) {
  if (typeof key === 'string') {
    this.countries[key].setFill(color);
    this.countries[key].setAttribute('original', color);
  } else {
    var colors = key;

    for (var code in colors) {
      if (this.countries[code]) {
        var path = this.countries[code],
            newColor = colors[code];

        var res = this.animateFill(path, newColor);
        if(!res) {
          path.setFill(newColor);
          path.setAttribute('original', newColor);
        }
      }
    }
  }
};
