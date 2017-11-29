const http = require('http')
const bl = require('bl')

const urls = [process.argv[2], process.argv[3], process.argv[4]]
const responses = []

urls.map((url, index) => {
  http
    .get(process.argv[2 + index], res => {
      res.pipe(bl((err, data) => {
        if (err) return console.error(err)

        responses[index] = data.toString()

        if (responses.length === 3) printResponses(responses)
      }))
    })
    .on('error', err => console.error(err))
})

const printResponses = array => array.map(res => console.log(res))
