/**/
var chars = {
    Dleric : "Draw",
    Paladin : "Gregório",
    Warlock : "Zaos",
    Ranger : "Mazabele",
    Driud : "Aephestos"
}

/*Objetos*/

var drawAtr = {
    for : "14",
    dex : "8",
    con : "12",
    int : "14",
    wis : "16",
    cha : "12"
}

var mazabeleAtr = {
    for : "10",
    dex : "18",
    con : "14",
    int : "12",
    wis : "14",
    cha : "10"
};




function identifyObj(char){
    var atributesValues = Object.values(char);
    document.getElementById("atr-for").innerHTML = atributesValues[0];
    document.getElementById("atr-dex").innerHTML = atributesValues[1];
    document.getElementById("atr-con").innerHTML = atributesValues[2];
    document.getElementById("atr-int").innerHTML = atributesValues[3];
    document.getElementById("atr-wis").innerHTML = atributesValues[4];
    document.getElementById("atr-cha").innerHTML = atributesValues[5];

    //return atributesValues;
}

document.addEventListener("DOMContentLoaded", function(){

    //mensagem = () => window.alert("hello big brother");
    //mensagem();
    //com parametro
    //mostrarNome = nome => window.alert("Meu nome é: " + nome);
    //mostrarNome("Thyago");

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



    document.getElementsByClassName("content-info-atributes")[0].style.display = "block";
    document.getElementsByClassName("content-info-relationship")[0].style.display = "none";
    document.getElementsByClassName("content-info-favorite-magics")[0].style.display = "none";

    //eventos de click
    document.getElementById("li-atributes").addEventListener("click", function(){
        document.getElementsByClassName("content-info-atributes")[0].style.display = "block";
        document.getElementsByClassName("content-info-relationship")[0].style.display = "none";
        document.getElementsByClassName("content-info-favorite-magics")[0].style.display = "none";
    });

    document.getElementById("li-relationship").addEventListener("click", function(){
        document.getElementsByClassName("content-info-atributes")[0].style.display = "none";
        document.getElementsByClassName("content-info-relationship")[0].style.display = "block";
        document.getElementsByClassName("content-info-favorite-magics")[0].style.display = "none";
    });
    
    document.getElementById("li-favs-magics").addEventListener("click", function(){
        document.getElementsByClassName("content-info-atributes")[0].style.display = "none";
        document.getElementsByClassName("content-info-relationship")[0].style.display = "none";
        document.getElementsByClassName("content-info-favorite-magics")[0].style.display = "block";
    });

    //formacao da pagina
    var charsPage = document.getElementsByTagName("body");
    var objetoStringChar = charsPage[0].id;
    console.log(typeof objetoStringChar);

    if(objetoStringChar == "drawPageId"){
        atributesValues = identifyObj(drawAtr);
        //var atributesValues = identifyObj(drawAtr);

    }else if(objetoStringChar == "mazabelePageId"){
        atributesValues = identifyObj(mazabeleAtr);

    }else if(objetoStringChar == "aephestoslePageId"){
        atributesValues = identifyObj(aephestosAtr);

    }else if(objetoStringChar == "gregorioPageId"){
        atributesValues = identifyObj(gregorioleAtr);

    }else if(objetoStringChar == "zaosPageId"){
        atributesValues = identifyObj(zaosAtr);

    }

});
