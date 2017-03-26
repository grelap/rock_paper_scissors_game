function rysujChoinke (x) {
  for (var i = 1; i <= x; i++){ 
    var star = ""
     
      for (var n = 0; n < i*2-1; n++){ 
         star += '*'; 
      } 
    console.log(star); 
  } 
} 

 console.log ('-------dla 1---------------');
 rysujChoinke (1);
 console.log ('-------dla 2---------------');
 rysujChoinke (2);
 console.log ('-------dla 5---------------');
 rysujChoinke (5);



