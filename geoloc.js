// Pour géolocaliser on utilise l'objet geolocation

// Vérifier que la geolocation soit disponible
if ('geolocation' in navigator) {
  
    // Obtenir la position avec getCurrentPosition() ----> Get une fois la position
    // ou watchPosition() ----> Get en permanencela position 
    
    // (success, error (optionnel), options (optionnel))
    
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    }, error, options);
    
    function error() {
      alert('Aucune position disponible.');
    }
    
    var options = {
      enableHighAccuracy: true,  // false par defaut
      maximumAge        : 30000, // derniere position en cache en millisecondes qu'on peut accepter, 0 par defaut. Si on set à 10000 la position est actualisée totes les 10 sec
      timeout           : 27000  // duree max en millisecondes pour geolocaliser, infinity par defaut
    }
    
    /*
    let watch = navigator.geolocation.watchPosition() ...
    navigator.geolocation.clearWatch(watch)
    */
    
  }
  else {
    alert('Le navigateur ne supporte pas la geolocalisation');
  }