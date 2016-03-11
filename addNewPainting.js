function addNewPainting(paintingsSample, newPainting) {
  var newPaintingId = paintingsSample.paintings.length + 1
  newPainting.paintingId = newPaintingId
  paintingsSample.paintings.push(newPainting)
  return paintingsSample
}

module.exports = addNewPainting
