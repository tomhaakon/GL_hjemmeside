const person = [
  {
    navn: "Tom",
    alder: 34,
    epost: "tom@epost.com",
    beskrivelse: "Kunstner, bosatt i Okkenhaug",
  },
  {
    navn: "Per",
    alder: 30,
    epost: "per@epost.com",
    beskrivelse: "Rådgiver i DNB, bosatt i Trondheim",
  },
  {
    navn: "Ole",
    alder: 32,
    epost: "ole@epost.com",
    beskrivelse: "Takstmann, bosatt i Trondheim",
  },
  {
    navn: "erik",
    alder: 25,
    epost: "erik@epost.com",
    beskrivelse: "Elektriker, bosatt i Levanger",
  },
];

let pLen = person.length;
let text = [];

function knapp() {
  for (let i = 0; i < pLen; i++) {
    text += person[i].navn + "<br>";
  }

  document.getElementById("info").innerHTML = text;
}
