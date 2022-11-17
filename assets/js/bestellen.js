const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let naam = params.fname
let van  = params.tussen
let achter = params.lname

let username = document.getElementById('name');
username.innerHTML=naam;
let tusse = document.getElementById('van');
tusse.innerHTML=van;
let last = document.getElementById('lastname');
last.innerHTML=achter;

let adr = params.adress
let huisnm = params.huisnummer
let post = params.postcode
let woon = params.woonplaats

let adrs = document.getElementById('adre');
adrs.innerHTML=adr
let huis = document.getElementById('huisnmr');
huis.innerHTML=huisnm
let poste = document.getElementById('postco');
poste.innerHTML=post
let woonpl = document.getElementById('woonplaat');
poste.innerHTML=woon
