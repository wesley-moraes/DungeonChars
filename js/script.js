/**/
var chars = {
    Dleric : "Draw",
    Paladin : "Gregório",
    Warlock : "Zaos",
    Ranger : "Mazabele",
    Driud : "Aephestos"
}


document.addEventListener("DOMContentLoaded", function(){
    // for (const chave in chars){
    //     if (chars.hasOwnProperty(chave)) {
    //       console.log(`${chave}: ${chars[chave]}`);
    //     }
    // }

    var classes = Object.keys(chars);
    var characters = Object.values(chars);
    // console.log(classes);

    //classes.forEach((classe) => console.log(classe));
    //characters.forEach((character) => console.log(character));


    // for(var i = 0; i < characters.length; i++){
    //     var item = document.createElement("li");

    //     item.appendChild(document.createTextNode(characters[i]));

    //     document.getElementById("CharsList").appendChild(item);

    // }

});
