/* const korisnikovUnos = prompt("Unesi tekst");

function brojSamoglasnika(tekst) {
    let brojac = 0;

    for (let index = 0; index < tekst.length; index++) {
        const slovo = tekst[index].toLowerCase();
        
        if (slovo == "a"  || "e"  ||  "i"  || "o" || "u")

        {
            brojac++
        }
    }

    console.log("broj samoglasnika u tekstu" + tekst);
    console.log(brojac);
}


brojSamoglasnika(korisnikovUnos); */


/* 
 const korisnikovUnos = Number(prompt("Unesi broj"));

function faktorijel(broj) {
    let rezultat = 1;

    for (let index = 1; index <= broj; index++) {
        rezultat= rezultat * index
    
        
    }
    console.log("fakrorijel od broja" + broj);
    console.log(rezultat);
}
faktorijel(korisnikovUnos);
  */

/* var num = prompt("Unesi broj");
 
//Rekurzivna funkcija
var factorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}
 
console.log(factorial(num)); */


/* let niz = [1, 2, 3, 4, 3, 2, 1, 1, 4, 2]
    
    function filtrirajNiz(niz) {
        let filtriraniNiz = [];

        for (let index = 0; index < niz.length; index++) {
            const element = niz[index];

            if (filtriraniNiz.includes(element)){
                filtriraniNiz.push(element);
            }
            
        }
        

        console.log("filtriraniNiz");
        conslole.log(filtriraniNiz)
        
    }

    filtrirajNiz(niz)
 */



/* function ukloniDuplikate(nizDuplikata) {
    var pomocniObjekat = {};
    return nizDuplikata.filter(function (el) {
      var key = JSON.stringify(el);
      var match = Boolean(pomocniObjekat[key]);
      return (match ? false : pomocniObjekat[key] = true);
    });
  }
   
  var nizObjekata = [1, 2, 3, 4, 3, 2, 1, 1, 4, 2]
  var bezDuplikata = ukloniDuplikate(nizObjekata);
  console.log(bezDuplikata); */
/* 
let nasNiz = []
  
function dodajZadatak() {
    const korisnikovUnos = prompt("Unesi zadatak:");
    nasNiz.push(korisnikovUnos);

    console.log("nasNiz");
    console.log(nasNiz);
    
}

const nasButton = document.querySelector("button");
nasButton.addEventListener("click", dodajZadatak); */

/* vjezba 1 */
/* 
class Premium_korisnici {
    constructor(korisnicko_ime, datum_reg, lozinka) {
      this.korisnicko_ime = Hans;
      this.datum_reg = datum_reg;
      this.lozinka = 12345;
      this.premium_preplata = premium_preplata;
    }
}
let korisnik1=new NetflixUser("Ivan", 18.04, "DA");
let korisnik2=new NetflixUser("josip", 21.3, "DA");
let korisnik3=new NetflixUser("luka", 26.7, "NE");
let korisnik4=new NetflixUser("marko", 16.04, "Da");
let korisnik5=new NetflixUser("bera", 17.12, "NE");
let korisnik6=new NetflixUser("lovro", 11.08, "NE");

console.log(korisnik1);
console.log(korisnik2);
console.log(korisnik3);
console.log(korisnik4);
console.log(korisnik5);
console.log(korisnik6);

let NizKorisnika=[korisnik1,korisnik2,korisnik3,korisnik4,korisnik5,korisnik6];

const premiumLista = document.querySelector("#premium");
const freemiumLista = document.querySelector("#freemium");

for (let index = 0; index < NizKorisnika.length; index++) {
    let listItem = document.createElement("li")
    let element = NizKorisnika[index];
    listItem.textContent = element.korisnicko_ime

    if (premium_preplata=="DA") {

        premiumLista.appendChild(list)
        console.log("premium_preplata");
        console.log(elemebt.korisnicko_ime);
        
    }
    else{
        freemiumLista.appendChild(listItem);
        console.log("freemium korisnik");
        console.log(element.korisnicko_ime);
    }
    
} */

/* vjezba 2 */


/* const nizFilmova = [
    {
        naslov: "titanic",
        oznake: [
            {
                ime: "romantika",
                slug: "rom",
            },
            {
                ime: "avantura",
                slug: "avan",
            },
        ],
    },
    {
    naslov: "conjuring",
    oznake: [
        {
            ime: "horor",
            slug: "hor",
        },
        {
            ime: "akcija",
            slug: "act",
        },
    ],
},
{
    naslov: "sonja i bik",
    oznake: [
        {
            ime: "dokumentarac",
            slug: "doc",
        },
    ],
}
];

for (let index = 0; index < nizFilmova.length; index++) {
    const film = nizFilmova[index];

    const kontenjer = document.createElement("div");
    const naslovFilma = document.createElement("h2");
    naslovFilma.textContent = film.naslov;
    kontenjer.appendChild(naslovFilma);


    console.log("film");
    console.log(film);

  

    let nizOznaka = film.oznake

    for (let j = 0; j < nizOznaka.length; j++) {
        const oznakaFilma = document.createElement("h4");
        oznakaFilma.textContent = nizOznaka[j].slug;
        kontenjer.appendChild(oznakaFilma)
    
    }

    document.body.appendChild(kontenjer);
    
} */

/* function provjeri() {
    const randomBroj = Math.floor(Math.random() * 5 + 1);
    const vrijednost = Number(event.target.textContent)

    console.log("randomBroj");
    console.log(randomBroj);
    console.log("vrijednost");
    console.log(vrijednost);

    if (randomBroj == vrijednost) {
        rezultatParagraf.textContent = "Bravo, pogodili ste ";
        
    }else{
        rezultatParagraf.textContent = "Netočno, pokušajte ponovo!";
    }
    
}
const rezultatParagraf = document.querySelector("p");
const nasiButtoni = document.querySelectorAll("button");
nasiButtoni.forEach((button) => {

button.addEventListener("click", provjeri)
}) */


/* ------vjezba1--------   X */
/* 
const nasNiz = [
{
    marka: "Audi",
    boja: "siva",
    max_brzina: 240,
},
{
    marka: "Mercedes",
    boja: "bijela",
    max_brzina: 230,
},
{
    marka: "Volvo",
    boja: "crna",
    max_brzina: 190,
},
];

function ipisiNiz(niz) {
    for (let index = 0; index < niz.length; index++) {
        const element = niz[index];
        const paragrafVozila = document.createElement("p");
        paragrafVozila = paragrafVozila.marka + "/" + paragrafVozila.boja + "/" + paragrafVozila.max_brzina;
        document.body.appendChild(paragrafVozila)
        
    }
    
}

function sortirajMarka() {
    let sortirajNiz = nasNiz.sort((a, b) =>(a.marka > b.marka ? 1 : -1));
    ipisiNiz(sortiraniNiz);
    
}

const buttonMarka = document.getElementById("marka");
buttonMarka.addEventListener("click", sortirajMarka); */


 /* -------vjezba 2----- */

 /* const nasNiz = [
    {
        naziv: "Ivan",
        sifra: "1234",
        cijena: 150,
    },
    {
        naziv: "Marko",
        sifra: "4321",
        cijena: 13,
    },
    {
        naziv: "Hans",
        sifra: "123",
        cijena: 240,
    },
    {
        naziv: "Sopta",
        sifra: "321",
        cijena: 100,
    },
    ];

    function ispisiNiz(niz) {
        for (let i = 0; i < niz.length; i++) {
            const element = niz[i];
            const paragrafArtikla = document.createElement("p");
            paragrafArtikla.textContent = element.naziv;
            document.body.appendChild(paragrafArtikla)
            
        }
        
    }

    function sorirajNaziv() {
        let sortiraniNiz = nasNiz.sort((a, b) =>(a.naziv > b.naziv ? 1 : -1));
        ispisiNiz(sortiraniNiz);
        
    }
    
    const buttonNaziv = document.getElementById("naziv");
    buttonNaziv.addEventListener("click", sorirajNaziv); */

   /*  ------vjezba 3-------gooood */

  /* const nasNiz = [
    {
        naziv: "Air Jordan",
    },
    {
        naziv: "Nike Air Force",

    },
    {
        naziv: "Adidas Yeezy",

    },
    {
        naziv: "Nike Air Max",

    },
    {
        naziv: "Puma",

    }
    
]

let kosaricaNiz = [];
const lista = document.querySelector("ul");
const odabranoPar = document.getElementById("odabrano")

function nadiDodaj(event) {
    const ime = event.target.textContent;
    const artikl = nasNiz.find((artikl) => {
        if (ime == artikl.naziv) {
            return artikl
        }
    });

    kosaricaNiz.push(artikl);
    odabranoPar.textContent = "odabrano:" + kosaricaNiz.length
    console.log(kosaricaNiz);
    
}



function ispisiNiz(niz) {
    for (let index = 0; index < niz.length; index++) {
        const element = niz[index];
        const stavkaListe = document.createElement("li");
        stavkaListe.textContent = element.naziv;
        lista.appendChild(stavkaListe)
      
    }

    const stavke = document.querySelectorAll("li");
    for (let index = 0; index < stavke.length; index++) {
        const element = stavke[index];
        element.addEventListener("click", nadiDodaj )
        
    }
    
}

function sortiraj() {
    let sortiraniNiz = nasNiz.sort((a, b) =>(a.naziv > b.naziv ? 1 : -1));
        ispisiNiz(sortiraniNiz)
    
}

sortiraj(nasNiz) */



/* ---------vjezba 4------- */

  /* const nasNiz = [
    {
        naziv: "Air Jordan",
        cijena: 120,
    },
    {
        naziv: "Nike Air Force",
        cijena: 80,

    },
    {
        naziv: "Adidas Yeezy",
        cijena: 100,

    },
    {
        naziv: "Nike Air Max",
        cijena: 150,

    },
    {
        naziv: "Puma",
        cijena: 90,

    }   
]

function ubaciIzbaci() {
    const lista = document.createElement("ul");
    let iznos = 0;

    for (let index = 0; index < nasNiz.length; index++) {
        const element = nasNiz[index];
        iznos = iznos + element.cijena;
        const item = document.createElement.apply("li");
        item.textContent = element.naziv;
        lista.appendChild(item);          
    }
    
    const itemTotalCijena = document.createElement("li");
    itemTotalCijena.textContent = "Ukupno: $" + iznos;
    lista.appendChild(itemTotalCijena);

    document.body.appendChild(lista);
    
}

const button = document.querySelector("button");
button.addEventListener("click", ubaciIzbaci);
 */

/*     function computerPicks() {
    let compChoices = ["rock", "paper", "scissors"] 
    let randomizeChoice = Math.floor(Math.random() * compChoices.length) + 1 
   
    if (randomizeChoice === 1) {
      return "rock";
    } if (randomizeChoice === 2) {
      return "paper";
    } if (randomizeChoice === 3) {
      return "scissors";
    }
   }
   
   console.log(computerPicks());
   
   
   function playRound(playerSelection, computerSelection) {
     if (playerSelection === "rock") {  
       if (computerSelection === "rock") {
         return "It is a tie!!"
       } else if (computerSelection === "paper") {
           return "The computer wins!";
         } else {
           return "You win this game!";
         }
     }
     else if (playerSelection === "paper") {  
       if (computerSelection === "paper") {
         return "It is a tie!!"
       } else if (computerSelection === "rock") {
           return "The computer wins!";
         } else {
           return "You win this game!";
         }
     } else {
       if (computerSelection === "rock") {
         return "Computer wins!";
     } else if (computerSelection === "paper") {
         return "User wins!";
     } else {
         return "Draw!";
     }
     }
   
   
   }


   
   const playerSelection = "scissors";
   const computerSelection = computerPicks();
   console.log(playRound(playerSelection, computerSelection));   */

const options = ["rock" , "paper", "scissors"];
const rand = Math.floor(Math.random() * options.length);


let racunalo = document.getElementById("racunalo");
let korisnik = document.getElementById("korisnik");
let korScore = 0;
let racScore = 0;


const checkResult = (event) => {
    const userInput = event.target.textContent.toLowerCase();
    const randomInput = options[Math.floor(Math.random() * options.length)];

    console.log("odabrali ste " + userInput);
    console.log("kompjuter je odabrao " + randomInput);

    console.log(racunalo);

    if (userInput === randomInput) {
        rezultat.textContent="its a tie"
    } else if (
         (userInput === "rock" && randomInput === "scissors") || 
         (userInput === "scissors" && randomInput === "paper") ||
          (userInput === "paper" && randomInput === "rock")

          ){
            rezultat.textContent="you won";
            korScore++;
            korisnik.textContent= korScore;
        } else {
            rezultat.textContent="you lose";
            racScore++;
            racunalo.textContent= racScore;
        }

}

const rezultat = document.getElementById("rezultat");
const buttonArray = document.querySelectorAll("button");
buttonArray.forEach((button) =>{
    button.addEventListener("click", checkResult);
});


   