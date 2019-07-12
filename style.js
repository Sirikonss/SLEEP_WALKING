/*const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');


hamburger.addEventListener('click',() => {
    navLinks.classList.toggle("open");
    links.foreach(link => {
        link.classList.toggle("fade");
    });
});

var ac = {
    init : function () {
    // ac.init() : start the alarm clock
  
      // The time picker - Hr, Min, Sec
      ac.thr = ac.createSel(23);
      document.getElementById("tpick-h").appendChild(ac.thr);
      ac.thm = ac.createSel(59);
      document.getElementById("tpick-m").appendChild(ac.thm);
      ac.ths = ac.createSel(59);
      document.getElementById("tpick-s").appendChild(ac.ths);
  
      // The time picker - Set, reset
      ac.tset = document.getElementById("tset");
      ac.tset.addEventListener("click", ac.set);
      ac.treset = document.getElementById("treset");
      ac.treset.addEventListener("click", ac.reset);
  
    },
  
    createSel : function (max) {
    // createSel() : support function - creates a selector for hr, min, sec
      var selector = document.createElement("select");
      for (var i=0; i<=max; i++) {
        var opt = document.createElement("option");
        i = ac.padzero(i);
        opt.value = i;
        opt.innerHTML = i;
        selector.appendChild(opt);
      }
      return selector
    },
  
    padzero : function (num) {
    // ac.padzero() : support function - pads hr, min, sec with 0 if <10
  
      if (num < 10) { num = "0" + num; }
      else { num = num.toString(); }
      return num;
    },
  
  
    set : function () {
    // ac.set() : set the alarm
  
      ac.alarm = ac.thr.value + ac.thm.value + ac.ths.value;
      ac.thr.disabled = true;
      ac.thm.disabled = true;
      ac.ths.disabled = true;
      ac.tset.disabled = true;
      ac.treset.disabled = false;
    },
  
    reset : function () {
    // ac.reset() : reset the alarm
  
      if (!ac.sound.paused) {
        ac.sound.pause();
      }
      ac.alarm = null;
      ac.thr.disabled = false;
      ac.thm.disabled = false;
      ac.ths.disabled = false;
      ac.tset.disabled = false;
      ac.treset.disabled = true;
    }
  };
  
  // INIT - RUN ALARM CLOCK
  window.addEventListener("load", ac.init);*/