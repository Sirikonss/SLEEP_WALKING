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
});
},1000)


function Setdata() {
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
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
}


function Diff() {
var temp=[];
var starttime = timezonein;
var endtime = timezonefi;
start = starttime.split(":");
end = endtime.split(":");
for (var i=0;i<3;i++) {
    start[i] = parseFloat(start[i]);
    end[i] = parseFloat(end[i]);
}
for (var i=0;i<3;i++) {
    temp[i] = end[i] - start[i];
    temp[i] = Math.abs(temp[i]);
}
document.getElementById("timeinterval").innerHTML = `<h3>${temp[0] + ":" + temp[1] + ":" + temp[2]}</h3>`  ;                    
}

