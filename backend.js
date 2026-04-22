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

     if (!name || isNaN(arrival) || isNaN(burst) || isNaN(priority)) {

        alert("Please fill all fields correctly")
        return;
    }else if(arrival < 0 ||burst < 0 ||priority < 0) {
             alert("Negative values are not allowed.");
        return;
    }

    const process = {
        id: processId++,
        name: name,
        arrival: arrival,
        burst: burst,
        priority: priority,
        waiting: 0,
        fairPriority: priority,
        status: "Waiting"
    };
    alert("Process Added Successfully");
    processes.push(process);

    clearInputs();
    displayProcesses();

}

function clearInputs() {
    document.getElementById("pname").value = "";
    document.getElementById("arrival").value = "";
    document.getElementById("burst").value = "";
    document.getElementById("priority").value = "";
}