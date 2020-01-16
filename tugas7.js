// Analyses the different of For and For Of
var tinggi = [155, 157, 150, 162, 159, 173, 174, 160, 169, 175];
// Perulangan For biasa
for (var i = 0; i<tinggi.length; i++){
    console.log(tinggi[i]);
    
}
// Perulangan For Of
for (let x of tinggi){
    console.log(x);
    
}
