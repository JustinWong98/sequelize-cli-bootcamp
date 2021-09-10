import db from './models/index.mjs'

const catTrip = async() => {
  try{
    const findTrip = await db.Trip.findOne({
  where: {
    name: process.argv[2]
  }
});
const findCategory = await db.Category.findOne({
    where: {
      name: process.argv[3]
    }
  });
  const findAttraction = await db.Attraction.findAll ({
    where: {
      category_id: findCategory.id,
  trip_id: findTrip.id,
    }
  });
  findAttraction.forEach((attraction)=> {
    console.log (attraction.name)
  })
  }
  catch(error) {console.log(error)}
}

catTrip()