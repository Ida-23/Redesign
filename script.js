window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");
    myFunction(this);

    // this henvender sig til menuknappen. Så når man killer på menuknappen, kalder den både togglemenu og myFuncking. Har skrvet nyfincken (this) her for at den så også går med og kalder funktionen nedenunder
}

function myFunction(x) {

    x.classList.toggle("change");
}




//window.addEventListener("load", sidenVises);
//
//function sidenVises() {
//    console.log("sidenVises");
//    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
//}
//
//function toggleMenu() {
//    console.log("toggleMenu");
//    document.querySelector("#menu").classList.toggle("hidden");
//
//    let erSkjult = document.querySelector("#menu").classList.contains("hidden");
//
//    if (erSkjult == true) {
//        document.querySelector("#menuknap").textContent = "Burgers";
//
//    } else {
//        document.querySelector("#menuknap").textContent = "X";
//    }
//}
