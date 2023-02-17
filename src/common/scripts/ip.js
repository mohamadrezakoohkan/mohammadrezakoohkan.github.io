const DEFAULT_IP = "";
const ENDPOINT_URL = "https://api.ipgeolocation.io/getip";

async function getIP() {
  const response = await fetch(ENDPOINT_URL);
  const data = await response.json();
  const ip = await data.ip;
  return ip;
}

function updateUI(ip) {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const component = document.getElementById("ip");
  const greeting = getGreeting(timeZone);
  component.innerHTML = `${greeting} ${ip}`;
}

function getGreeting(timeZone) {
  const timeZones = {
    "Europe/Istanbul": "Merhaba",
    "Europe/Madrid": "Hola",
    "Europe/Rome": "Ciao",
    "Europe/Paris": "Bonjour",
    "Europe/Berlin": "Hallo",
  };
  var result = timeZones[timeZone];
  console.log(result);
  if (typeof result == "undefined") {
    result = "Hi";
  }
  return result;
}

updateUI(DEFAULT_IP);

getIP().then(updateUI);
