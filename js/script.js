/**/
var chars = {
    Dleric : "Draw",
    Paladin : "Gregório",
    Warlock : "Zaos",
    Ranger : "Mazabele",
    Driud : "Aephestos"
};

/*Objs
all about the status from the characters
*/
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

var zaoseAtr = {
    for : "10",
    dex : "12",
    con : "14",
    int : "18",
    wis : "14",
    cha : "16"
};

var gregorioAtr = {
    for : "18",
    dex : "18",
    con : "16",
    int : "8",
    wis : "12",
    cha : "10"
};

var aephestosAtr = {
    for : "10",
    dex : "16",
    con : "14",
    int : "10",
    wis : "18",
    cha : "10"
};


/*The relationships between the characters*/
var drawRelationship = {
    Gregorio : "good",
    Zaos : "bad",
    Aephestos : "good",
    Mazabele : "neutral"
};

var mazabeleRelationship = {
    Gregorio : "neutral",
    Zaos : "neutral",
    Aephestos : "good",
    Draw : "neutral"
};

var gregorioRelationship = {
    Mazabele : "good",
    Zaos : "friction/good",
    Aephestos : "good",
    Draw : "good"
};

var aephestosRelationship = {
    Mazabele : "good/neutral",
    Zaos : "good",
    Gregorio : "neutral/good",
    Draw : "good"
};

var zaosRelationship = {
    Mazabele : "neutral",
    Aephestos : "good",
    Gregorio : "friction",
    Draw : "neutral"
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
};

document.addEventListener("DOMContentLoaded", function(){

    //mensagem = () => window.alert("hello big brother");
    //mensagem();
    //com parametro
    //mostrarNome = nome => window.alert("Meu nome é: " + nome);
    //mostrarNome("Thyago");

    // for (const chave in chars){
    //      if (chars.hasOwnProperty(chave)) {
    //        console.log(`${chave}: ${chars[chave]}`);
    //      }
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

    function relationshipList(charRelationship){

        if( charRelationship == "drawRelationship" ){
            var typeOfRelation = Object.values(drawRelationship);

            for(var i = 0; i < typeOfRelation.length; i++){
                
                var item = document.createElement("p");
                var itemContent = `- ${Object.keys(drawRelationship)[i]} is: ${Object.values(drawRelationship)[i]}`;
                console.log(itemContent);
                item.appendChild(document.createTextNode(itemContent));

                document.getElementById("relationship-list").appendChild(item);
                
            };
        };
    };

    relationshipList("drawRelationship");

    document.getElementsByClassName("content-info-atributes")[0].style.display = "block";
    document.getElementsByClassName("content-info-relationship")[0].style.display = "none";
    document.getElementsByClassName("content-info-favorite-magics")[0].style.display = "none";

    //eventos de click
    document.getElementById("li-atributes").addEventListener("click", function(){
        document.getElementsByClassName("content-info-atributes")[0].style.display = "block";
        document.getElementsByClassName("content-info-relationship")[0].style.display = "none";
        document.getElementsByClassName("content-info-favorite-magics")[0].style.display = "none";
        
        document.getElementById("li-atributes").classList.add("select");
        document.getElementById("li-relationship").classList.remove("select");
        document.getElementById("li-favs-magics").classList.remove("select");
    });

    document.getElementById("li-relationship").addEventListener("click", function(){
        document.getElementsByClassName("content-info-atributes")[0].style.display = "none";
        document.getElementsByClassName("content-info-relationship")[0].style.display = "block";
        document.getElementsByClassName("content-info-favorite-magics")[0].style.display = "none";
        
        document.getElementById("li-relationship").classList.add("select");
        document.getElementById("li-atributes").classList.remove("select");
        document.getElementById("li-favs-magics").classList.remove("select");
    });
    
    document.getElementById("li-favs-magics").addEventListener("click", function(){
        document.getElementsByClassName("content-info-atributes")[0].style.display = "none";
        document.getElementsByClassName("content-info-relationship")[0].style.display = "none";
        document.getElementsByClassName("content-info-favorite-magics")[0].style.display = "block";

        document.getElementById("li-favs-magics").classList.add("select");
        document.getElementById("li-atributes").classList.remove("select");
        document.getElementById("li-relationship").classList.remove("select");
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
