var HslUtil = {};

HslUtil.clamp = function (num, min, max) {
  return Math.min(Math.max(min, num), max);
};

HslUtil.parseHsl = function (string) {
  if (!string) {
    return null;
  }

  var hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
  var match = string.match(hsl);

  if (match) {
    return {
      h: ((parseFloat(match[1]) % 360) + 360) % 360,
      s: HslUtil.clamp(parseFloat(match[2]), 0, 100),
      l: HslUtil.clamp(parseFloat(match[3]), 0, 100)
    };
  }
  return null;
};

HslUtil.toHsl = function (hue) {
  return ['hsl(', hue, ', 100%, 50%)'].join('');
};
