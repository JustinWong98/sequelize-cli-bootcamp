import db from './models/index.mjs';

db.Trip.create ({
  name: process.argv[2],
})
.then((Trip) => {
  console.log(Trip)
})
.catch((error) => {
  console.log (error)
})