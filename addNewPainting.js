function addNewPainting (paintingsSample, newPainting) {
  // I think this function assumes the newPainting will already have some value in the paintingID field, and change it to 1 interger
  // larger than largest paintingID in the paintings object. -Dominic  
  console.log('Before! ', paintingsSample.paintings.length)
  console.log(newPainting)
  var newPaintingId = paintingsSample.paintings.length + 1
  
  newPainting.paintingId = newPaintingId
  paintingsSample.paintings.push(newPainting)
  console.log('After! ', paintingsSample.paintings.length)
  console.log(newPainting)
  return paintingsSample
}

module.exports = addNewPainting
