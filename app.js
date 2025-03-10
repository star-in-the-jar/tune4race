const blurhash = require("blurhash");
console.log(blurhash)
function decodeBlurHash(hash) { 
	const pixels = blurhash.decode(hash, 32, 32); const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    const imageData = ctx.createImageData(32, 32);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
  }

  return canvas.toDataURL();
}

console.log(decodeBlurHash("L7CQGF00VpIA.lxHD$ozXRxDtm%M"))
