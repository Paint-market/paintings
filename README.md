[![Stories in Ready](https://badge.waffle.io/Paint-market/paintings.png?label=ready&title=Ready)](https://waffle.io/Paint-market/paintings)

# Paintings
## Paintings API  v1

## URL
App is deployed to https://paint-market-paintings.herokuapp.com/ . App will be re-deployed automatically whenever there is a pull request accepted into master that passes all the tests.

##View All paintings in database

[GET] request /v1/paintings

**what status comes back?**

If successful, return a status code of 200.

A paintings object of an array of painting objects is returned in JSON format:

For example:

```{
paintings: [
{
paintingId: 1,
creatorId: 11,
ownerId: 111,
title: "depressed",
image: "https://www.flickr.com/photos/imagomundiphoto/25636563386/",
price: 5
},
{
paintingId: 2,
creatorId: 22,
ownerId: 222,
title: "disturbed",
image: "https://www.flickr.com/photos/imagomundiphoto/25636574156/",
price: 20
},
{
paintingId: 3,
creatorId: 33,
ownerId: 333,
title: "artsy fartsy",
image: "https://www.flickr.com/photos/ajajajajajajaj/5130007088/",
price: 300
},
{
paintingId: 7,
creatorId: 11,
ownerId: 111,
title: "Pixel",
image: "https://www.flickr.com/photos/abababababbaabbab/51300070000/",
price: 55
},
{
paintingId: 11,
creatorId: 2,
ownerId: 666,
title: "Pixel v Vector",
image: "https://www.flickr.com/photos/uuuuuumememememem/51300072222/",
price: 5
},
{
paintingId: 50,
creatorId: 33,
ownerId: 333,
title: "Vector",
image: "https://www.flickr.com/photos/jjejejjejejejejej/5130066666/",
price: 10
},
{
paintingId: 8,
creatorId: 2,
ownerId: 55,
title: "Pixel2",
image: "https://www.flickr.com/photos/yuyouyouyou/51300123123/",
price: 10
}
]
}```

If the database is empty, an empty object is returned.

**What err status could come back?**

If there are serverside errors, a 500+ status code is shown.

##View individual painting by painting ID

[GET] request /v1/paintings/:id

**what needs to be sent?**

The paintingId needs to be sent.

**what status comes back?**

If the request is successful the status code 200 will be returned.

Along with the JSON object matching the painting ID in the request.

**What err status could come back?**

If the paintingId doesn't exist in the database error code 404 Not Found will be returned.

##Create a painting:

[POST] request /v1/paintings

**what needs to be sent?**

The end user will need to enter fields painting: title, price, imageUrl.

The data is sent in JSON format to the database.

The paintingId, creatorId, ownerId will be automatically generated.

All fields must contain the correct datatype and entry otherwise an error occurs.

**what status comes back?**

If the request is successful the status code 200 will be returned.

A JSON object is also returned holding the new painting's properties.

If an error occurs error code will be returned.

**What err status could come back?**

If a field is blank or the datatype is invalid a 404 Bad Request status code will show.

##Update a painting by paintingId

[PUT] request /v1/paintings/:id

**what needs to be sent?**

When the existing painting's data (owner and price) has been edited, the request to update the JSON object is sent with the the painting's data.

**what status comes back?**

If the request was successful status code 200 is returned with JSON object containing updates.

**What err status could come back?**

If a field is blank or the datatype is invalid a 404 Bad Request status code will show.

