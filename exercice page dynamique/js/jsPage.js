function fonctionDropdown() { /* fonction qui ouvre le bouton dropdow*/
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function openNav() {/* fonction qui ouvre la sidenav (menu gauche) */
    document.getElementById("monMenuGauche").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {/* fonction qui ferme la sidenav (menu gauche) */
    document.getElementById("monMenuGauche").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function afficheTitre() {/* fonction qui affiche le titre en fadein */
      titre = document.getElementById("titreSection");
      titre.innerHTML = "Mon titre";
      titre.style.transition = "2s";
  }
afficheTitre()


/* fonction qui affiche ou qui cahce la navbar */

let header = document.querySelector("#navbar");
let minScrollValue = 15;
document.addEventListener('scroll',() => {
		let scrollValueOfPage  = document.documentElement.scrollTop;
    if(scrollValueOfPage < minScrollValue) {
        header.classList.remove("hidden");
    } else {
    	header.classList.add("hidden");
    }
    minScrollValue = scrollValueOfPage;
});



/* fonction qui affiche le titre, le sous titre et l'image en fadein */

let minScrollValue2 = 500;
document.addEventListener('scroll',() => {
		let scrollValueOfPage  = document.documentElement.scrollTop;
        if(scrollValueOfPage >= minScrollValue2) {
            titre2 = document.querySelector("#titreSection2");
            sousTire = document.querySelector("#sousTitre");
            img = document.querySelector("#imgApparaitre");
            titre2.classList.add("moreOpacity");
            sousTire.classList.add("moreOpacity");
            img.classList.add("moreOpacity");
            titre2.style.transition = "1s";
            minScrollValue2 = scrollValueOfPage;
        }
    }
);



/* fonction qui cache le dropdown bouton lorsque l'on clique n'importe où sur la page */
window.onclick = function(event) {
    if (!event.target.matches('#bouton')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



/* fonction qui affiche un mot toute les 2 secondes */ 
let mot = 0;
  function runFunction() {
    let tableauMots = ['Hello', 'Guten tag', 'Salam', 'Buenos días'];
    let changer = document.getElementById("changing");
    changer.innerHTML = tableauMots[mot];
    mot++;
    if(mot == tableauMots.lenght || tableauMots [mot] == undefined){
       mot = 0;
    }
  }
setInterval(runFunction, 2000) 