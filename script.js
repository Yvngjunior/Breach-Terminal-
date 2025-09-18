const messages = document.getElementById('messages');
const text = document.getElementById('text');

let ghostUsers = 1;

function send(){
let msg = text.value;
if(!msg) return;
if(msg.startsWith("/")){
runCommand(msg);
} else {
postMessage("You: " + distortText(msg));
randomGhostResponse();
}
text.value = "";
}

function postMessage(msg){
   const time = new Date().toLocaleTimeString();
   messages.innerHTML += `\n[${time}] ` + glitchify(msg); 
   messages.scrollTop = messages.scrollHeight;
   flickerEffect();
}


function runCommand(cmd){
switch(cmd){
case "/help":
postMessage(
 "Available commands: /whois /summon /clear /disconnect /scan /generate /joke " );
break;
case "/whois":
postMessage("[03:15PM] Active Entities: User01, UNKNOWN👁");
break;
case "/summon":
for(let i=0; i<5; i++)
 postMessage(randomGarbage()); 
 randomImage();
 break;   
 case "/clear": 
messages.innerHTML = "";
break;   
case "/disconnect":
postMessage("Disconnect Failed. Entity Presence Detected.");
break;
case "/scan":
ghostUsers++;
postMessage(`[04:59AM] Presence confirmed. Users online:${ghostUsers}`);
break;
case "/generate":
hauntMe();
randomImage();
break;
case "/joke":
jokeMe();
randomImage();
break;
case "/breach":
  simulateBreach();
  break;
default:
postMessage("Unknown command.");
}
}

const ghostNames = ["👁 ENTITY-7", "👻 PhantomZero", "███ UNKNOWN", "Spectre", "Entity X"];
function randomGhostResponse(){
const responses = [
"👁 I SEE YOU",
"RUN.",
"Unauthorized Access Attempt...",
"███ Detected",
"Leave Now!",
"ERROR: Message Corrupted",
reverseText("You can't Escape"),
    ];

setTimeout(() =>{
if(Math.random()< 0.6){
  const name = ghostNames[Math.floor(Math.random() * ghostNames.length)];
  postMessage(name + ": " + glitchify(responses[Math.floor(Math.random()*responses.length)]));  
}
 /*if(Math.random()< 0.6) postMessage("Ghost: " + glitchify(responses[Math.floor(Math.random()*responses.length)])); */ 
},Math.random()*3000);  
}

function glitchify(text){
return text.replace(/./g, (c) => Math.random() < 0.03 ? randomChar(): c);
}

function distortText(text){
 return text.split("").map(ch => Math.random() < 0.05 ? randomChar() : ch).join('');   
}

function reverseText(text){
return text.split("").reverse().join("");
}

function randomChar(){
const chars = "▓▒░█▌▐▄▀▄█@#₦π$%&*()👁👻";   
 return chars[Math.floor(Math.random()*chars.length)];   
}

function randomGarbage(){
 let str = "";
 for(let i=0; i < 40; i++) str += randomChar();
 return str;
}

function flickerEffect(){
document.body.classList.add("flicker");
setTimeout(() => document.body.classList.remove("flicker"),100);
}

text.addEventListener("input", () => {
  // If it's a command, skip glitching
  if (text.value.startsWith("/")) return;

  let newValue = "";
  for (let ch of text.value) {
    if (Math.random() < 0.05) {
      newValue += randomChar();
    } else {
      newValue += ch;
    }
  }
  text.value = newValue;
});


// API: fetch a haunting qoute
function hauntMe(){
fetch("https://api.quotable.io/random").then(res => res.json()).then(data => {
 postMessage("👻 Haunt Whisper " + glitchify(data.content));   
}).catch(()=>{
 postMessage("👻 The spirits refuse to speak now"); 
 randomImage();
});
    
}

// API: fetch a ghostly joke
function jokeMe(){
fetch("https://icanhazdadjoke.com/", {
 headers: {"Accept":"application/json"}   
}).then(res => res.json()).then(data => {
 postMessage("👻 Strange joke: " + glitchify(data.joke));
 
}).catch(()=>{
 postMessage("👻 The spirits are silent.");   
});
}

// corruption mode after a while
setTimeout(()=>{
  document.title = "👻THEY ARE HERE.👻";
 setInterval(()=>{
 if(Math.random() < 0.2) postMessage(randomGarbage());   
 },3000); 
},30000);
// background colors picks
setInterval(() => {
    const colors = ["#000", "#111", "#222", "#330000", "#000033"];
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
}, 10000);
//Phantom typing...
let phantomTyping = false;
setInterval(()=>{
  if(Math.random() < 0.08 && !phantomTyping) {
    phantomTyping = true;
    postMessage("👁 Phantom is typing...");

    setTimeout(()=>{
      fetch("https://api.quotable.io/random")
        .then(response => {
          if(!response.ok) throw new Error("Failed to fetch");
          return response.json();
        })
        .then(data => {
          postMessage("👻 Phantom Whisper: " + glitchify(data.content));
          phantomTyping = false;
        })
        .catch(()=>{
          postMessage("👻 Phantom refused to speak.");
          phantomTyping = false;
        });
    }, 2000);
  }
}, 5000);



// Disable input glitch
setInterval(() =>{
if(Math.random() < 0.03) {
    text.disabled = true;
postMessage(">> INPUT JAMMED -- PRESENCE DETECTED");
setTimeout(()=> text.disabled = false,2000);
}
    
},7000);

//Random API haunt events;
setInterval(() =>{
    if(Math.random() < 0.04){
        hauntMe();
    }
},25000);

//Exit trap
window.onbeforeunload = function (){
    return "You can't Leave.";
};

function logSystemEvent(msg){
  const log = document.getElementById("systemLog");
  log.innerHTML += `[${new Date().toLocaleTimeString()}] ${msg}<br>`;
  log.scrollTop = log.scrollHeight;
}

setInterval(()=>{
  const events = [
    "Connection unstable...",
    "Entity breach detected.",
    "Signal interference.",
    "Phantom Echo Identified.",
    "Terminal integrity compromised.",
    "Unknown process running.",
    "███ Detected in sector 4.",
    "Presence anomaly logged."
  ];
  const event = events[Math.floor(Math.random() * events.length)];
  logSystemEvent(event);
}, 6000);



function warningFlash(){
  const flash = document.getElementById("warningFlash");
  flash.style.display = "flex";
  setTimeout(()=> flash.style.display = "none", 1500);
}


setInterval(()=>{
  if(Math.random() < 0.03){
    warningFlash();
  }
}, 8000);

//images
const images = ["ghost1.jpg","ghost2.jpg","ghost3.jpg","ghost4.jpg","ghost5.jpg","ghost6.jpg","ghost7.jpg","ghost8.jpg","ghost9.jpg","ghost10.jpg"];

function randomImage(){
  const img = document.createElement("img");
  img.src = images[Math.floor(Math.random() * images.length)];
  img.classList.add("disp");
  img.style.width = "80px";
  img.style.border = "2px solid #0f0";
  img.style.display = "block";
  img.style.margin = "5px";

  const container = document.getElementById("imageContainer");
  container.appendChild(img);

  // Add click listener: log event and make image disappear
  img.addEventListener("click", () => {
    logSystemEvent(`👻 WARNING: Entity image clicked — ${img.src.split('/').pop()}`);

    img.style.transition = "opacity 0.5s ease";
    img.style.opacity = 0;

    setTimeout(() => {
      if (img.parentNode) img.remove();
    }, 500);
  });

  // Optional: remove 'disp' class after 2 seconds if needed for your effect
  setTimeout(() => {
    img.classList.remove("disp");
  }, 2000);
}

setInterval(() => {
  if (Math.random() < 0.03) {
    text.style.caretColor = "transparent"; // Hide cursor
    setTimeout(() => {
      text.style.caretColor = "#0f0"; // Restore ghostly green cursor
    }, 1500);
  }
}, 7000);

setInterval(() => {
  if (Math.random() < 0.04) {
    document.body.style.filter = "blur(1px) contrast(150%) hue-rotate(20deg)";
    setTimeout(() => {
      document.body.style.filter = "none";
    }, 1000);
  }
}, 9000);

setInterval(() => {
  const meter = document.getElementById("ghostMeter");
  const level = Math.floor(Math.random() * 100);
  const bars = "██████████".slice(0, Math.floor(level / 10));
  const dashes = "----------".slice(0, 10 - Math.floor(level / 10));
  meter.innerHTML = `👁️ Ghost Activity: [${bars}${dashes}] ${level}%`;
}, 4000);


function simulateBreach(){
  postMessage("👁️ Initiating breach protocol...");
  text.disabled = true;
  flickerEffect();
  document.body.style.background = "maroon";

  let breachCount = 0;

  const breachInterval = setInterval(() => {
    breachCount++;

    const eventTypes = [
      "Unauthorized packet detected.",
      "Signal anomaly logged.",
      "Phantom IP trace: 192.168.☠️☠️☠️",
      "Port 666 OPENED",
      "Inbound data corruption.",
      "Firewall bypassed.",
      "█ █ █ █ █",
      "ENTITY ATTEMPTING ACCESS"
    ];
    const randomEvent = eventTypes[Math.floor(Math.random() * eventTypes.length)];
    logSystemEvent(`<span style="color: #f00;">${randomEvent}</span>`);

    randomImage();
    flickerEffect();

    if (breachCount >= 10) {
      clearInterval(breachInterval);
      document.body.style.background = "#000";
      text.disabled = false;
      text.style.caretColor = "#0f0";
      text.focus();
      console.log("Breach finished: input enabled, focus set");
      postMessage("👁️ NETWORK BREACH CONTAINED. RESIDUAL ENTITY PRESENCE REMAINS.");
    }
  }, 700);
}

let progressRing = document.querySelector("#progressRing");
let progressText = document.querySelector("#progressText");
let downloadBar = document.querySelector("#downloadBar");

let progressValue = 0;
let progressEndValue = 100;
let speed = 300;

let progress = setInterval(() => {
  progressValue++;
  progressText.textContent = `${progressValue}%`;

  progressRing.style.background = `conic-gradient(#3CFF00 ${progressValue * 3.6}deg, #2D7E31 ${progressValue * 3.6}deg)`;
  
if (progressValue % 10 === 0) {
  logSystemEvent(`Download Progress: ${progressValue}%`);
}

if (progressValue >= progressEndValue) {
  progressValue = progressEndValue; // just in case
  progressText.textContent = `${progressValue}%`;
  progressRing.style.background = `conic-gradient(#3CFF00 360deg, #2D7E31 360deg)`;
  
  logSystemEvent("✅ Download Completed Successfully!");
  clearInterval(progress);

  // Let browser render 100% before changing content
  setTimeout(() => {
    downloadBar.innerHTML = `<span style="font-size:12px;">✅ Downloaded Successfully!</span>`;
  }, 500); // short delay for render

  // Optionally clear after few sec
  setTimeout(() => {
    downloadBar.innerHTML = "";
  }, 3000);
}

}, speed);
