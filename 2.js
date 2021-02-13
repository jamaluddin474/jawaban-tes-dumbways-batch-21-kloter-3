// mencari median atau nilai tengah
function cekMedian(params = [1, 2, 0, -3]) {
  var sortedArray = params.sort((a, b) => a - b)
  var median
  if (params.length % 2 == 0) {
    median =  (sortedArray[(params.length / 2) - 1] + sortedArray[params.length / 2]) / 2
  } else {
    median = sortedArray[(params.length - 1) / 2]
  }
  return 'Median dari array tersebut adalah ' + median
}
console.log(cekMedian([0,1,2,4,6,5,3]))