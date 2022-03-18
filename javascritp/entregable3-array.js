function Boss(nombre, ubicacion, debilidad, arma) {
    this.nombre = nombre;  // le agrego marca: "samsung"
    this.ubicacion	 =  ubicacion; // le agrego modelo: "A22"
    this.debilidad  = debilidad;
    this.arma  = arma;
}
const boss1 = new Boss("Padre Gascoine","Yharnam Central","Caja Musical","Hacha del Cazador")
const boss2 = new Boss("Micolash","Pesadilla de mensis","Fuego","Sus Manos")
const boss3 = new Boss("Martir Logarius","Castillo Cainhurst","Parrys","Hoz")
const boss4 = new Boss("Gherman el Primer Cazador","Sueño del Cazador","Parry","Guadaña")
const boss5 = new Boss("Ludwing la Espada Sagrada","Pesadilla del cazador","Fuego","Espada de Luz de Luna")
const boss6 = new Boss("Lady Maria","Torre del Reloj Astral","Parry","Espada Rakuyo")
const boss7 = new Boss("Huerfano de Kos","Aldea Pesquera","Rayo","Placenta petrificada")

// include
let jefes = ["ludwing", "lady maria", "gherman", "micolash", "vatrl"]
jefes.push("padre gascoine")
console.log(jefes.length)
console.log(jefes)

alert("Bienvenido a la Pagina de Bloodborne aqui podras ver informacion sobre algunos de los mejores jefes")



let respuesta1 = prompt("Bienvenido cazador quieres saber sobre algunos bosses en bloodborne opciones (si o no)? ");

while(respuesta1 != "salirDelWhile"){
    switch(respuesta1.toUpperCase()){
        case "SI":
            let respuesta = prompt("Sobre que jefe quisieras presiona este numero si quieres saber mas de el 1-Gascoine 2-Micolash 3-Martir Logarius 4-Gherman 5 Ludwing 6-Lady Maria 7-Kos o kosm")

            if(respuesta==1){
                alert(JSON.stringify(boss1))
            }
            else if(respuesta==2){
                alert(JSON.stringify(boss2))
            }
            else if(respuesta==3){
                alert(JSON.stringify(boss3))
            }
            else if(respuesta==4){
                alert(JSON.stringify(boss4))
            }
            else if(respuesta==5){
                alert(JSON.stringify(boss5))
            }
            else if(respuesta==6){
                alert(JSON.stringify(boss6))
            }
            else if(respuesta==7){
                alert(JSON.stringify(boss7))
            }
            
        
        respuesta1 = prompt("Algun jefe mas que quieres conocer? si o no?");
        break;

        case "NO":
        alert("Hasta luego que encuentres tu valia en el mundo de la vigilia");
        respuesta1 = "salirDelWhile"
        break;
        
        default:
            alert("vuelve a intentarlo respuesta invalida usa si o no para responder");
            respuesta1 = prompt("Algo mas que pueda hacer?");
    }
}