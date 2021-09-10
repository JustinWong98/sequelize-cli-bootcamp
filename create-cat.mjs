import db from './models/index.mjs';

db.Category.create ({
  name: process.argv[2],
})
.then((category) => {
  console.log(category)
})
.catch((error) => {
  console.log (error)
})