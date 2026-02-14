let wins = JSON.parse(localStorage.getItem("wins")) || [];

function addWin(){

 let winInput = document.getElementById("winInput");
 let list = document.getElementById("list");
 let mood = document.getElementById("mood").value;

 let text = winInput.value.trim();
 if(!text) return;

 wins.push({text,date:new Date().toISOString(),mood});
 localStorage.setItem("wins",JSON.stringify(wins));

 if(window.confetti){
   confetti({particleCount:100,spread:70});
 }

 updateUI();
 updateStreak();
 winInput.value="";
}

function updateUI(){

 let list = document.getElementById("list");
 let points = document.getElementById("points");

 if(!list || !points) return;

 list.innerHTML="";

 wins.forEach((w,i)=>{
   let li=document.createElement("li");
   li.innerHTML=w.text+" "+w.mood+
   ` <button onclick="del(${i})">❌</button>`;
   list.appendChild(li);
 });

 points.textContent=wins.length*10;
}

function del(i){
 wins.splice(i,1);
 localStorage.setItem("wins",JSON.stringify(wins));
 updateUI();
}

function updateStreak(){

 let streakEl = document.getElementById("streak");
 if(!streakEl) return;

 let today=new Date().toDateString();
 let last=localStorage.getItem("lastWinDate");
 let s=parseInt(localStorage.getItem("streak"))||0;

 if(last===today) return;

 if(last && new Date(last).getDate()==new Date().getDate()-1) s++;
 else s=1;

 localStorage.setItem("streak",s);
 localStorage.setItem("lastWinDate",today);
 streakEl.textContent=s;
}

function loadHome(){

 let welcome=document.getElementById("welcome");
 if(!welcome) return;

 let name=localStorage.getItem("profileName")||"Champion";
 welcome.textContent="Welcome back, "+name+" 💪";

 updateUI();
 updateStreak();
}

window.onload = loadHome;
