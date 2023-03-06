let screen = document.getElementById("Display")
const display=(num) =>{
    screen.value += num
}
const del = () => {
    screen.value = screen.value.slice(0,-1)
}
const Clear = () => {
    screen.value = ""
}
const calc = () =>{
    try{
        screen.value = eval(screen.value)
    }
    catch(err){
        alert("Invalid")
    }
    
}

