var button
var laser
var timezone_initial = 0;
var timezone_final = 0;
setInterval(() => {
    fetch('https://exceed.superposition.pknn.dev/data/Group9')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
            button = myJson.button
            console.log(button)
            laser = myJson.alarm
            if (button == "on") {
                Collect();
            }
            else {
                Collect();
                Diff();
            }
        });
}, 1000)


function Setdata() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var datetime = time.toString();
    return datetime;
}

function ShowDate() {
    var d = new Date();
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
}

function Diff() {
    var temp = [];
    var starttime = timezone_initial;
    var endtime = timezone_final;
    start = starttime.split(":");
    end = endtime.split(":");
    for (var i = 0; i < 3; i++) {
        start[i] = parseFloat(start[i]);
        end[i] = parseFloat(end[i]);
    }
    for (var i = 0; i < 3; i++) {
        temp[i] = end[i] - start[i];
        temp[i] = Math.abs(temp[i]);
    }
    document.getElementById("timeinterval").innerHTML = `<h3>${temp[0] + ":" + temp[1] + ":" + temp[2]}</h3>`;
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
        postData(machine, alarm_off);
    }else {
        machine = "on";
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

