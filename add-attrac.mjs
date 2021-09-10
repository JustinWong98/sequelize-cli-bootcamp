import db from './models/index.mjs'

const addAttraction = async () => {
  try {
const findTrip = await db.Trip.findOne({
  where: {
    name: process.argv[2]
  }
});
const findCategory = await db.Category.findOne({
    where: {
      name: process.argv[4]
    }
  });
  console.log(findCategory.id)
const insertAttraction = await db.Attraction.create({
  name: process.argv[3],
  category_id: findCategory.id,
  trip_id: findTrip.id,
  latitude: process.argv[5],
  longitude: process.argv[6],
});
  }
  catch (error) {
    console.log (error)
  }
}

addAttraction()