[![Stories in Ready](https://badge.waffle.io/Paint-market/paintings.png?label=ready&title=Ready)](https://waffle.io/Paint-market/paintings)

# Paintings
## Paintings API  v1

## URL
App is deployed to https://paint-market-paintings.herokuapp.com/ . App will be re-deployed automatically whenever there is a pull request accepted into master that passes all the tests.

##Create a painting:

[POST] request /v1/paintings

**what needs to be sent?**

The end user will need to enter fields painting: Title, Price, Image.

The data is sent in JSON format to the database.

The Painting ID, Creator ID, Owner ID will be automatically generated.

All fields must contain the correct datatype and entry otherwise an error occurs.

**what status comes back?**

The status code 200 will be returned if the request was successful.

A JSON object is also returned holding the new painting's properties.

If an error occurs error code will be returned.


**What err status could come back?**

If a field is blank or the datatype is invalid a 404 Bad Request status code will show.

##View All paintings in database

[GET] request /v1/paintings

**what status comes back?**

A paintings object of an array of painting objects is returned in JSON format with a status code of 200.

If the database is empty, an empty object is returned.

**What err status could come back?**

If there are serverside errors, a 500+ status code is shown.

##View individual painting by painting ID

[GET] request /v1/paintings/:id

**what needs to be sent?**

The paintings id needs to be sent.

**what status comes back?**

If the request is successfull the status code 200 will be returned.

Along with the JSON object matching the painting ID in the request.

**What err status could come back?**

If the painting ID doesn't exist in the database error code 404 Not Found will be returned.

##Update a painting by painting ID

[PUT] request /v1/paintings/:id

**what needs to be sent?**

When the existing painting's data(owner and price) has been edited, the request to update the JSON object is sent with the the painting's data.

**what status comes back?**

If the request was successful status code 200 is returned with JSON object containing updates.

**What err status could come back?**

If a field is blank or the datatype is invalid a 404 Bad Request status code will show.

