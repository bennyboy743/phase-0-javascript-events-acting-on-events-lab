// Your code here
const dodger = document.getElementById('dodger')

document.addEventListener('keydown', e => {
    console.log(e.key)
    if(e.key === "ArrowLeft") {
        //move the dodger to the left
        moveDodgerLeft()
    }

    if(e.key === "ArrowRight") {
        //move the dodger to the left
        moveDodgerRight()
    }
})


function moveDodgerLeft () {
    const leftNumbers = dodger.style.left.replace("px", "")
    const moveLeftNumber = parseInt(leftNumbers,10)
    dodger.style.left = `${moveLeftNumber - 10}px`
}

function moveDodgerRight () {
    const leftNumbers = dodger.style.left.replace("px", "")
    const moveLeftNumber = parseInt(leftNumbers,10)
    dodger.style.left = `${moveLeftNumber + 10}px`
}