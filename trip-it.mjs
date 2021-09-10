import db from './models/index.mjs'

db.Trip.findOne ({
  where: {
    name: process.argv[2]
  }
})
.then ((tripResult) => {
  // find id that is associated with name
  return db.Attraction.findAll ({
    where: {
      trip_id: tripResult.id
    }
  })
})
.then ((allAttractions) => {
allAttractions.forEach((place) => {
    console.log(place.name)
  })
})
.catch ((error) => {console.log (error)})