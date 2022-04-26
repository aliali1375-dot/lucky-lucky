let send1 = document.getElementById("send1");
let send2 = document.getElementById("send2");
let send3 = document.getElementById("send3");
let send4 = document.getElementById("send4");
let send5 = document.getElementById("send5");
// send1.innerHTML = ""
// for( i = 0 ; i < 101 ; i++ ){
//  document.write( i + "<br>" );
// }
var MyTimer = setInterval(ShowTime, 2500);

function ShowTime() {
  
  
  

  choices = [
    "0x43a172c44dC55c2B45BF9436cF672850FC8bAasd",
    "0x5B1389DB2573A3db7fe263B098A1B614f34essaa",
    "0x2B1389DB2573A3ds7fe263B098A1B614f34es2b6",
    "0x5B1389DB2573A3db7fe263B098A2B614f34es9l1",
    "0x6B1389DB2573s3db7fe263B098A1B614f34es9c6",
    "0x7B1389DB2573A3db7fe263B098AsB614f3adsab6",
    "0x1B1389DB2573A3db7fe263B098A1adasdadasda3",
    "0x1B1389DB2573s3db7fe263B098A1ad12dadasd55",
    "0x1B1389DB2573A3db7fe263B098A1adasd256sdas",
    "0x1B1389DB2573A3db7fe263B098A1ad3356dasda1",
    "0x1B1389DB2573A3db7fe263B098A1adasda25as38",
  ];
  money = [
    "0.033 bnb",
    "0.00033 bnb",
    "0.0133",
    "1 bnb",
    "0.12",
    "0.24",
  ];
  let price = choices[Math.floor(Math.random() * money.length)]

  document.getElementById("send1").innerHTML = `Sent : ${
    choices[Math.floor(Math.random() * choices.length)]
  }`;
  document.getElementById("send2").innerHTML = `Sent : ${
    choices[Math.floor(Math.random() * choices.length)]
  }`;
  document.getElementById("send3").innerHTML = `Sent : ${
    choices[Math.floor(Math.random() * choices.length)]
  }`;
  document.getElementById("send4").innerHTML = `Sent : ${
    choices[Math.floor(Math.random() * choices.length)]
  }`;
  document.getElementById("send5").innerHTML = `Sent : ${
    choices[Math.floor(Math.random() * choices.length)]
  }`;
  document.getElementById("send6").innerHTML = `Sent : ${
    choices[Math.floor(Math.random() * choices.length)]
  }`;
  document.getElementById("send7").innerHTML = `Sent : ${
    choices[Math.floor(Math.random() * choices.length)]
  }`;
  document.getElementById("send8").innerHTML = `Sent : ${
    choices[Math.floor(Math.random() * choices.length)]
  }`;
}
