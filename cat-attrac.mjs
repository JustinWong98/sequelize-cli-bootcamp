import db from './models/index.mjs'

db.Category.findOne ({
  where: {
    name: process.argv[2]
  }
})
.then ((catResult) => {
  // find id that is associated with name
  return db.Attraction.findAll ({
    where: {
      category_id: catResult.id
    }
  })
})
.then ((allAttractions) => {
allAttractions.forEach((attraction) => {
    console.log(attraction.name)
  })
})
.catch ((error) => {console.log (error)})