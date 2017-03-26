 function rysujChoinke (x) {
  for (var i = 1; i <= x; i++){ 
    var star = "";
      for (var c = 1; c < x*2/i; c++){
            star +=' ';
          }
      for (var n = 0; n < i*2-1; n++){ 
         star += '*'; 
          
          
      } 
    console.log(star); 
  } 
} 
 rysujChoinke(5);
