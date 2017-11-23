const path = process.argv[2]
const extension = process.argv[3]

const filteredls = require('./module')

const logData = (err, data) => {
  if (err) return console.error('Error!')

  data.map(el => console.log(el))
}

filteredls(path, extension, logData)
