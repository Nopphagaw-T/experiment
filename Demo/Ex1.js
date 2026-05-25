findPerimeter = (length, width)=>{ return 2 * (length + width) }
data = [[6, 7], [20, 10], [2,9]]

data.forEach((item) => {
  console.log(findPerimeter(...item))
})

//console.log(findPerimeter(6, 7))