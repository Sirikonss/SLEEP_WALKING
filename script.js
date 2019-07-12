var button
var button
var laser
var timezonein = 0;
var timezonefi = 0;
setInterval(()=> {
        fetch('https://exceed.superposition.pknn.dev/data/Group9')
    .then(function(response) {
        return response.json();
})
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
        button = myJson.machine
        laser = myJson.alarm
        if (button == "on") {
            Collect();
        }
        else {
            Collect();
            Diff();
        }
        if (laser == "on") {
            Collect();
        }
});
},1000)


function Setdata() {
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var datetime = time;
return datetime;
}

function Showtime() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var date = today.getDate();
    console.log(year,month,date);
    document.getElementById("month").innerHTML = `<h2>${month}</h2>`;
    document.getElementById("date").innerHTML = `<h1>${date}</h1>`;
    document.getElementById("year").innerHTML = `<h3>${year}</h3>`;
}

var count_in = 0
var count_out = 0
var check_in = 0

function Collect() {
if (button == "on" && timezonein == "0" && count_in == 0) {
    timezonein = Setdata();
    document.getElementById("start_time").innerHTML = `<h4>${timezonein}</h4>`;
    count_in++;
    count_out++;
}
else if (button == "off" && timezonefi == "0" && count_out == 1){
    timezonefi = Setdata();
    document.getElementById("end_time").innerHTML = `<h4>${timezonefi}</h4>`;
    count_out++;
}
if (laser == "on" && check_in == 0) {
    timezonela = Setdata();
    document.getElementById("id").innerHTML = `<h4>${timezonela}</h4>`;
    check_in++;
}
}
var starttime = timezonein;
var endtime = timezonefi;
function Diff() {
    start = starttime.split(":");
    end = endtime.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * (1000 * 60 * 60);
    var minutes = Math.floor(diff / 1000 / 60);
    if (hours < 0)
        hours = hours + 24;
    var res = (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes ;
    document.getElementById("demo").innerHTML = res;
    }

