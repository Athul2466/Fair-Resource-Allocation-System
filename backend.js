let processes = [];
let processId = 1;

const addProcess=()=>{
    const name = document.getElementById("pname").value;
    const arrival = parseInt(document.getElementById("arrival").value);
    const burst = parseInt(document.getElementById("burst").value);
    const priority = parseInt(document.getElementById("priority").value);

    console.log("",name)
    console.log("",arrival)
     console.log("",burst)
    console.log("",priority)

     if (!/^[a-zA-Z0-9]+$/.test(name)) {
        alert("Process Name should contain only letters and numbers.");
        return;
     }
}