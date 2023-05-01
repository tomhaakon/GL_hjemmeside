/*##############################################################
################################################################
//Funksjon vis side//-----------------------------------------*/
function visSide(elementID) {
  let ele = document.getElementById(elementID);
  /* hvis det ikke finnes noe element med id si ifra */
  if (!ele) {
    alert("finner ikke element.");
    return;
  }
  /* hent alle klasser med class="side"  */
  let sider = document.getElementsByClassName("side");
  /* for alle sider som finnes i htmldokumentet med class="side" -> skjul hver og en */
  for (let i = 0; i < sider.length; i++) {
    sider[i].style.display = "none";
  }
  /* så, vis frem elementet som kommer fra elementID */
  ele.style.display = "block";
}
// hent knappen "send_beskjed" fra html
let knapp = document.getElementById("send_beskjed");
// modal for kontakt skjema
let modal = document.getElementById("modal_beskjed");
// hent span med classe avbryt for krysset
let avbryt = document.getElementsByClassName("modal_avbryt")[0];
// funksjon åpne block om knapp trykkes
knapp.onclick = function () {
  modal.style.display = "block";
};
// når span knappen kryss trykkes, lukk modal display
avbryt.onclick = function () {
  modal.style.display = "none";
};
// hvis man trykker utenfor boksen, steng display
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
/*##############################################################
################################################################
//Interesse siden//-------------------------------------------*/

function visInteresser(elementID) {
  let ele = document.getElementById(elementID);
  if (!ele) {
    alert("finner ikke element.");
    return;
  }
  let visninger = document.getElementsByClassName("visning");
  /*  vis bare en og ganger, altså skjul alle som ikke er aktiv */
  for (let i = 0; i < visninger.length; i++) {
    visninger[i].style.display = "none";
  }
  /* så, vis frem elementet som kommer fra elementID */
  ele.style.display = "block";
}
// knapper for å velge kategori og vise hvem som er aktiv
let knappBoks = document.getElementById("knappBoks");
let knapper = knappBoks.getElementsByClassName("bilde_knapp");
for (let i = 0; i < knapper.length; i++) {
  knapper[i].addEventListener("click", function () {
    let aktiv = document.getElementsByClassName("aktiv");
    aktiv[0].className = aktiv[0].className.replace(" aktiv", "");
    this.className += " aktiv";
  });
}
/*##############################################################
################################################################
// bilde visning //-------------------------------------------*/

kategoriFilter("alt");
function kategoriFilter(k) {
  let x, i;
  x = document.getElementsByClassName("bilde_kolonne");
  if (k == "alt") k = "";
  for (i = 0; i < x.length; i++) {
    fjernKlasse(x[i], "bilde_vis");
    if (x[i].className.indexOf(k) > -1) addClass(x[i], "bilde_vis");
  }
}
function addClass(element, navn) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = navn.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
function fjernKlasse(element, navn) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = navn.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
