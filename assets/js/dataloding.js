(function(){

let requete = "https://eminence212.github.io/db.json"
/**
   * Fonction pour sélectionner les objets sur le DOM à l'aide de l'ID
   *    */
 const selectionner = (element) => {
    element = element.trim()
      return document.getElementById(element)
  }

  /**
   * sélection des élements au DOM
   */
  let textAccueil = selectionner("text_accueil")
 let imageAccueil = selectionner("imageAccueil")

 let titreApropos = selectionner("titreApropos")
 let sousTitreApropos = selectionner("sousTitreApropos")
 let imageAprops = selectionner("imageApropos")
 let descriptionAbout1 = selectionner("descriptionAbout1")
 let descriptionAbout1_detail1 = selectionner("descriptionAbout1_detail1")
 let descriptionAbout1_detail2 = selectionner("descriptionAbout1_detail2")
 let descriptionAbout2 = selectionner("descriptionAbout2")
 let descriptionAbout2_detail1 = selectionner("descriptionAbout2_detail1")
 let descriptionAbout2_detail2 = selectionner("descriptionAbout2_detail2")
 let descriptionAbout3 = selectionner("descriptionAbout3")
 let description3_detail1 = selectionner("description3_detail1")

 let titreService = selectionner("titreService")
 let sousTitreService = selectionner("sousTitreService")
 let listeServicess = selectionner("listeServices")

 let listeRealisations = selectionner("portfolio-flters")


  /**
   * Lancement de la requete vers le fichier jSON distant
   */
   window.addEventListener('load',() => {
      fetch(requete)
    .then(function(reponse) {
        reponse.json()
      .then(function(data) {
        lodingTextAccueil(data.portfolio.accueil)
        lodingAbout(data.portfolio.apropos)
        lodingServices(data.portfolio.services)
         lodingRealisation(data.portfolio.realisations.listerealisations)
        
      });
    });

   })
  
    //Affichage Titre accueil
    const lodingTextAccueil = (obj) =>{
      textAccueil.innerText = obj.titre
      imageAccueil.src = obj.image
    }
    //Affichage à propos

    const lodingAbout = (obj) =>{
      titreApropos.innerText = obj.titre
      sousTitreApropos.innerText = obj.soustitre
      imageAprops.src = obj.image
      descriptionAbout1.innerText = obj.descriptions[0].titre
      descriptionAbout1_detail1.innerText = obj.descriptions[0].detail[0].libelle
      descriptionAbout1_detail2.innerText = obj.descriptions[0].detail[1].libelle
      descriptionAbout2.innerText = obj.descriptions[1].titre
      descriptionAbout2_detail1.innerText = obj.descriptions[1].detail[0].libelle
      descriptionAbout2_detail2.innerText = obj.descriptions[1].detail[1].libelle
      descriptionAbout3.innerText = obj.descriptions[2].titre
      description3_detail1.innerText = obj.descriptions[2].detail[0].libelle
    }

    //Affichage services
    const lodingServices = (obj) =>{
      titreService.innerText = obj.titre
      sousTitreService.innerText = obj.soustitre
      let listeservices = obj.listeservices
      
      listeServicess .innerHTML += `
      <div class="row">
      <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
        <div class="icon-box"> 
     
          <div class="icon"><i class="${listeservices[0].classeimg}"></i></div>
          <h4><a href="#">${listeservices[0].titre}</a></h4>
          <p>
          ${listeservices[0].detail}
          </p>
        </div>
      </div>
 
      <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
        <div class="icon-box">
          <div class="icon"><i class="${listeservices[1].classeimg}"></i></div>
          <h4><a href="#">${listeservices[1].titre}</a></h4>
          <p>
          ${listeservices[1].detail}
          </p>
        </div>
      </div>
 
      <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
        <div class="icon-box">
          <div class="icon"><i class="${listeservices[2].classeimg}"></i></div>
          <h4><a href="#">${listeservices[2].titre}</a></h4>
          <p>
          ${listeservices[2].detail}  
          </p>
        </div>
      </div>
 
      <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
        <div class="icon-box">
          <div class="icon"><i class="${listeservices[3].classeimg}"></i></div>
          <h4><a href="#">${listeservices[3].titre}</a></h4>
          <p>
          ${listeservices[3].detail}
          </p>
        </div>
      </div>
 
    </div>
    <div class="row">
      <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
        <div class="icon-box"> 
     
          <div class="icon"><i class="${listeservices[4].classeimg}"></i></div>
          <h4><a href="#">${listeservices[4].titre}</a></h4>
          <p>
          ${listeservices[4].detail}
          </p>
        </div>
      </div>
 
      <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
        <div class="icon-box">
          <div class="icon"><i class="${listeservices[5].classeimg}"></i></div>
          <h4><a href="#">${listeservices[5].titre}</a></h4>
          <p>
          ${listeservices[5].detail}
          </p>
        </div>
      </div>
      
      <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
        <div class="icon-box">
          <div class="icon"><i class="${listeservices[6].classeimg}"></i></div>
          <h4><a href="#">${listeservices[6].titre}</a></h4>
          <p>
          ${listeservices[6].detail}
          </p>
        </div>
      </div>
      
      <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
        <div class="icon-box">
          <div class="icon"><i class="${listeservices[7].classeimg}"></i></div>
          <h4><a href="#">${listeservices[7].titre}</a></h4>
          <p>
          ${listeservices[7].detail}
          </p>
        </div>
      </div>
    </div>`
    }
   //Affichage Réalisations
   const lodingRealisation = (obj) =>{
    
 
    
   }
    

})()
 


