// Code EyesOnMe Component Here
function EyesOnMe () {

    function listen(e) {
        console.log('Good!')
    }

    function otherListen(e) {
        console.log('Hey! Eyes on me!')
    }

    return(
        <button onFocus={listen} onBlur={otherListen}>Eyes on me</button>
    )
}

export default EyesOnMe