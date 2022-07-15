// Code Keypad Component Here

function keypad(){
    function handleChange(event) {
        console.log(event.target.value);
    return(
        <input onChange={()=>console.log ('Entering password...')}type='password'></input>
    )
}