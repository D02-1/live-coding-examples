const rgbToHex = (r, g, b) =>
{
    const rHex = r.toString(16);
    const gHex = g.toString(16);
    const bHex = b.toString(16);
  
    return pad(rHex) + pad(gHex) + pad(bHex);
};
  
const pad = (hex) =>
{
    return (hex.length === 1 ? "0" + hex : hex);
}

const hexToRgb = (hex) =>
{
    var red   = parseInt(hex.substring(0, 2), 16);
    var green = parseInt(hex.substring(2, 4), 16);
    var blue  = parseInt(hex.substring(4, 6), 16);
  
    return [red, green, blue];
};

module.exports = { rgbToHex, hexToRgb };
