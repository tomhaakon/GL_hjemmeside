const mdag = [
  "Januar",
  "Februar",
  "Mars",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "Oktober",
  "November",
  "Desember",
];

let hent_info = new Date().getMonth();
let monthtoday;

switch (hent_info) {
  case 0:
    monthtoday = mdag[0];
    break;
  case 1:
    monthtoday = mdag[1];
    break;
  case 2:
    monthtoday = mdag[2];
    break;
  case 3:
    monthtoday = mdag[3];
    break;
  case 4:
    monthtoday = mdag[4];
    break;
  case 5:
    monthtoday = mdag[5];
    break;
  case 6:
    monthtoday = mdag[6];
    break;
  case 7:
    monthtoday = mdag[7];
    break;
  case 8:
    monthtoday = mdag[8];
    break;
  case 9:
    monthtoday = mdag[9];
    break;
  case 10:
    monthtoday = mdag[10];
    break;
  case 11:
    monthtoday = mdag[11];
}
document.getElementById("testSwitch").innerHTML =
  "Idag er det <b>" + monthtoday + "</b> måned.";
