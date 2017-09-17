function forLoop(array){
  var count = 0


  for (let i = 0; i < 25; i++){
    if (i === 1){
    array.push("I am 1 strange loop")
  } else{
      array.push(`I am ${i} strange loops.`)
      }

}

    return array
}

function whileLoop(n){
  let countdown = 0
  while(countdown < n){
    console.log('done')
    countdown++
  }
  return 'done'
}

function doWhileLoop(array){
  do{
    function maybeTrue() {
      return Math.random() >= 0.5
    }
    array.pop()
  }while  (maybeTrue()){
    return array
  }
}
