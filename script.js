var button
var button
var laser
setInterval(()=> {
fetch('https://exceed.superposition.pknn.dev/data/Group9')
    .then(function(response) {
    return response.json();
    })
    .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    button = myJson.machine
    laser = myJson.alarm
    });
},2000)
function P(){
    var url = 'https://exceed.superposition.pknn.dev/data/Group9';
    var data = {message: 'QQQ'};
    fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
            'Content-Type': 'application/json'
    }
})
}

function Setdata() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var datetime = date+' '+time;
    return datetime;
}

function Collect() {
    var timezonein;
    var timezonefi;
    if (button == "on") {
        timezonein = Data();
        document.getElementById("id").innerHTML = timezonein;
    }
    else {
        timezonefi = Data();
        document.getElementById("id").innerHTML = timezonefi;
    }
}

function Diff(start, end) {
    var temp=[];
    starttime = timezonein;
    endtime = timezonefi;
    start = starttime.split(" ");
    end = endtime.split(" ");
    start2 = start[0].split("-");
    end2 = end[0].split("-");
    start3 = start[1].split(":");
    end3 = end[1].split(":");
    for (var i=0;i<3;i++) {
        start2.push(start3[i]); 
        end2.push(end3[i]);
    }
    for (var i=0;i<6;i++) {
        start2[i] = parseFloat(start2[i]);
        end2[i] = parseFloat(end2[i]);
    }
    for (var i=0;i<6;i++) {
        temp[i] = end2[i] - start2[i];
    }
    for (var i=0;i<6;i++) {
        temp[i] = Math.abs(temp[i]);
    }
    return temp[0] + ":" + temp[1] + ":" + temp[2] + " " + temp[3] + ":" + temp[4] + ":" + temp[5] ;                      
}