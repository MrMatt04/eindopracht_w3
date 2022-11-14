const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let product = params.prod
let prijs = params.price

let proddiv = document.getElementById('nameprod');
proddiv.innerHTML=product;

let prodprice = document.getElementById('price');
prodprice.innerHTML=prijs;