var laser = ""

setInterval(() => {
    fetch('https://exceed.superposition.pknn.dev/data/Group9')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
            button = myJson.machine
            console.log(button)
            laser = myJson.alarm
            // if (button == "on") {
            //     Collect();
            // }
            // else {
            //     Collect();
            //     Diff();
            // }
            // if (laser == "on") {
            //     Collect();
            // }
        });
}, 1000)


function Setdata() {
    var today = new Date();
    var day = today.getDate()+'/'+today.getMonth()+'/'+today.getFullYear()
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var datetime = time.toString();
    return datetime;
}


function ShowDate() {
    // var d = new Date();
    var month_name = new Array();
    month_name[0] = "January";
    month_name[1] = "February";
    month_name[2] = "March";
    month_name[3] = "April";
    month_name[4] = "May";
    month_name[5] = "June";
    month_name[6] = "July";
    month_name[7] = "August";
    month_name[8] = "September";
    month_name[9] = "October";
    month_name[10] = "November";
    month_name[11] = "December";
    var today = new Date();
    var year = today.getFullYear();
    var month = month_name[today.getMonth()];
    var date = today.getDate();
    document.getElementById("month").innerHTML = `<h2>${month}</h2>`;
    document.getElementById("date").innerHTML = `<h1>${date}</h1>`;
    document.getElementById("year").innerHTML = `<h3>${year}</h3>`;
}

var count_in = 0
var count_out = 0
var check_in = 0
var time_final = 0



function Diff(start, end) {
    let m = (end - start) * 0.001 / 60;
    document.getElementById("timeinterval").innerHTML = `<h3>${Math.floor(m/60)} : ${Math.floor(m - Math.floor(m/60))}</h3>`;
}



function createData(obj) {
    return { data: { ...obj } }
}

var machine = "off";
var alarm_on = "on";
var alarm_off = "off";

let current_starttime;
let current_endtime;

function postMachine(machine) {
    console.log("enter postData");
    var url = 'https://exceed.superposition.pknn.dev/data/Group9/machine';
    var data = {
        value : machine,
    };
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify((data)),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    
    console.log("exit PostData")
    
}

function doMachine() {
    
    if (machine == "off"){
        let stime = new Date();
        current_starttime = stime.getTime();
        let timezone_initial = Setdata();
        let starts = document.getElementsByClassName("starttime") ;
        starts[starts.length-1].innerHTML = `${timezone_initial}`;
        machine = "on";
        postMachine(machine);
        

    }
    else if (machine == "on") {
        let etime = new Date();
        current_endtime = etime.getTime();
        let timezone_final = Setdata();
        let ends = document.getElementsByClassName("endtime") ;
        ends[ends.length-1].innerHTML = `${timezone_final}`;
        document.getElementById("end_time").innerHTML = `${timezone_final}`;
        Diff(current_starttime, current_endtime);
        machine = "off";
        addcard();
        postMachine(machine);

    }
}

function addcard() {
    document.getElementById("containbox").innerHTML += 
        `<div class="borderbox">
            <div class="date">
                <h2 id="month">July</h2>
                <h1 id="date">15<h1>
                <h3 id="year">2019</h3>        
            </div>
            <div class="performance">
                <div class="perf" id="perf">
                    <h3>Start:</h3>
                    <h3 class="starttime" id="start_time">0</h3>
                    <h3>End:</h3>
                    <h3 class="endtime" id="end_time">0</h3>
                </div>
                <div class="lasor">
                    <h3 >Sleep-walking detected time :</h3>
                    <h3 id="lasor">0</h3>
                </div>
            </div>
            <div class="sleephr">
                <h4>Sleep Hour:</h4>
                <h3 id="timeinterval">00:00</h3>
            </div>
        </div>`;
}

let opentime = document.getElementById("start").value;
let closetime = document.getElementById("close").value;
 
function settime() {
    let d = new Date() ;
    if (machine == "on") {
        if (d.getHours() >= closetime ) {
            machine = "off" ;
            postMachine(machine);
            console.log("P");
        }
    }
    else if (machine == "off") {
        if (d.getHours() >= opentime ) {
            machine = "on" ;
            postMachine(machine);
            console.log("S");


    }
    console.log("SLEEPPPPPPP");
}







function postData(machine, alarm) {
    console.log("enter postData");
    var url = 'https://exceed.superposition.pknn.dev/data/Group9';
    var data = {
        "machine": machine,
        "alarm": alarm
    };
    fetch(url, {
        method: 'Post',
        body: JSON.stringify(createData(data)),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    
    console.log("exit PostData")
    
}
}
