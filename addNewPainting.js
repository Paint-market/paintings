function addNewPainting(paintings, newPainting) {
  newPainting["paintingId"] = paintings.paintings.length + 1

  paintings.paintings.push(newPainting)
  return paintings
}

module.exports = addNewPainting
