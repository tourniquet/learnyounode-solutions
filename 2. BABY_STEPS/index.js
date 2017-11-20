const args = process.argv

const sum = args
  .filter(arg => !isNaN(parseInt(arg)))
  .reduce((total, curr) => parseInt(total) + parseInt(curr))

console.log(sum)
