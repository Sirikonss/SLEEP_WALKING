var button = "off"
var laser = ""
var timezone_initial = 0;
var timezone_final = 0;


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
            Collect();
            if(button = "off"){
                Diff();
            }
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

function Collect() {
    if (button == "on" && timezone_initial == "0" && count_in == 0) {
        timezone_initial = Setdata();
        document.getElementById("start_time").innerHTML = `<h4>${timezone_initial}</h4>`;
        count_in++;
        count_out++;
    }
    else if (button == "off" && timezone_final == "0" && count_out == 1) {
        timezone_final = Setdata();
        document.getElementById("end_time").innerHTML = `<h4>${timezone_final}</h4>`;
        count_out++;
    }
    if (laser == "on" && check_in == 0) {
        timezonela = Setdata();
        document.getElementById("lasor").innerHTML = `<h4>${timezonela}</h4>`;
        document.getElementById("containbox").innerHTML += 
        `<div class="borderbox">
        <div class="date">
            <h2 id="month">JULY</h2>
            <h1 id="date">15<h1>
            <h3 id="year">2019</h3>        
        </div>
        <div class="performance">
            <div class="perf" id="perf">
                <h3>Start:</h3>
                <h3 id="start_time">00:00:00</h3>
                <h3>End:</h3>
                <h3 id="end_time">00:00:00</h3>
            </div>
            <div class="lasor">
                <h3 >Sleep-walking detected time :</h3>
                <h3 id="lasor">Sensor status</h3>
            </div>
        </div>
        <div class="sleephr">
            <h3>Sleep Hour:</h3>
            <h3>${timezonela}</h3>
        </div>
    </div>`;
        check_in++;
    }
    
}


function Diff() {
    var temp = 0;
    var starttime = timezone_initial;
    var endtime = timezone_final;
    start = starttime.split(":");
    end = endtime.split(":");
    temp_hour = Math.abs(end[0] - start[0]);
    temp_minute = Math.abs(end[1] - start[1]);
    document.getElementById("timeinterval").innerHTML = `<h3>${temp_hour} : ${temp_minute}</h3>`;
}



function createData(obj) {
    return { data: { ...obj } }
}

var machine = "off";
var alarm_on = "on";
var alarm_off = "off";

function doMachine() {
    if (machine === "on") {
        machine = "off";
        console.log("OFF");
        postData(machine, alarm_off);
    }else {
        machine = "on";
        console.log("ON");
        postData(machine, alarm_on);
    }
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
ShowDate()
