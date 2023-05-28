/**/
var chars = {
    Dleric : "Draw",
    Paladin : "Gregório",
    Warlock : "Zaos",
    Ranger : "Mazabele",
    Driud : "Aephestos"
};

/*Status from the characters*/
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

var zaosAtr = {
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
    Gregorio : "good! Because he can trust him and ask anythink! Gregs is a good person!",
    Zaos : "bad! He's a caos agent and Draw don't like. However, they live ok",
    Aephestos : "good! They usually talk about life, magic and the reason os all this!",
    Mazabele : "neutral! She's so quiet... "
};

var mazabeleRelationship = {
    Gregorio : "neutral",
    Zaos : "neutral",
    Aephestos : "good",
    Draw : "neutral"
};

var gregorioRelationship = {
    Mazabele : "good! Althught she's quiet, he likes her",
    Zaos : "friction/good! They usually fight eachother but they like either",
    Aephestos : "good! They've been travelling together so he considere him as a familiar",
    Draw : "good! "
};

var aephestosRelationship = {
    Mazabele : "neutral/good! He knews that he wasn't seem as a friend because of his blood, but everything chanded with time",
    Zaos : "good! Aephestos released that he has never considered him as bottom because He hasn't pure elf blood! But considered equal",
    Gregorio : "good! As a half-elf Apehestos learns a lot about the human side from him",
    Draw : "good! See his beliefs as he has, and respects this"
};

var zaosRelationship = {
    Mazabele : "neutral",
    Aephestos : "good",
    Gregorio : "friction",
    Draw : "neutral"
};

/*Favourites magics*/
var drawFavMagics = {
    cureWounds : {
        name : "Cure Wounds",
        description : "This is the Draw's favourite magic! He can heal all the person who needs be healed",
        img : "../img/drawMagics/cureWounds.png",
        alt : "Cure Wounds Magic"
    },
    
    banishment : {
        name : "Banishment",
        description : "This is the most powerfull magic that Draw has! He can sent anyone to another dimension",
        img : "../img/drawMagics/banishment.png",
        alt : "Banishment Magic"
    },

    sanctuary : {
        name : "Sanctuary",
        description : "This is the most powerfull magic that Draw has! He can sent anyone to another dimension",
        img : "../img/drawMagics/sanctuary.png",
        alt : "Sanctuary Magic"
    }
};

var mazabeleFavMagics = {
    cureWounds : {
        name : "Cure Wounds",
        description : "This is the Draw's favourite magic! He can heal all the person who needs be healed",
        img : "../img/drawMagics/cureWounds.png",
        alt : "Cure Wounds Magic"
    },
    
    huntersMark : {
        name : "Hunter's Mark",
        description : "It can mark the enemy",
        img : "../img/drawMagics/banishment.png",
        alt : "Banishment Magic"
    },

    sanctuary : {
        name : "Sanctuary",
        description : "This is the most powerfull magic that Draw has! He can sent anyone to another dimension",
        img : "../img/drawMagics/sanctuary.png",
        alt : "Sanctuary Magic"
    }
};

var aephestosFavMagics = {
    tidalWave : {
        name : "Tidal Wave",
        description : "Manipulating water he can create a strong wave that falls violently",
        img : "../img/aephestosMagics/tidalWave.jpg",
        alt : "Tidal Wave Magic"
    },
    
    Moonbeam : {
        name : "Moonbeam",
        description : "A tower of pale silver light that engulfs enemies in ghostly flames",
        img : "../img/aephestosMagics/moonBeam.jpg",
        alt : "Banishment Magic"
    },

    guiddingBold : {
        name : "Guiding Bolt",
        description : "A ray of spiritual energy that highlights the enemy",
        img : "../img/aephestosMagics/guidingBolt.jpg",
        alt : "Sanctuary Magic"
    }
};


/*
Functions
*/
function createInfoAtributes(char){
    var atributesValues = Object.values(char);
    document.getElementById("atr-for").innerHTML = atributesValues[0];
    document.getElementById("atr-dex").innerHTML = atributesValues[1];
    document.getElementById("atr-con").innerHTML = atributesValues[2];
    document.getElementById("atr-int").innerHTML = atributesValues[3];
    document.getElementById("atr-wis").innerHTML = atributesValues[4];
    document.getElementById("atr-cha").innerHTML = atributesValues[5];
};

/*
function createRelationShip(charRelationship){
    if( charRelationship == "drawRelationship" ){
        var typeOfRelation = Object.values(drawRelationship);
        for(var i = 0; i < typeOfRelation.length; i++){
            var item = document.createElement("p");
            var itemContent = `- ${Object.keys(drawRelationship)[i]} is: ${Object.values(drawRelationship)[i]}`;
            //console.log(itemContent);
            item.appendChild(document.createTextNode(itemContent));
            document.getElementById("relationship-list").appendChild(item);
        };
    };
};
*/

function createRelationShip(charRelationship){

    var lenghtRelation = Object.values(charRelationship);

    for(var i = 0; i < lenghtRelation.length; i++){
            
        var item = document.createElement("p");
        var itemContent = `- ${Object.keys(charRelationship)[i]} is: ${Object.values(charRelationship)[i]}`;
        item.appendChild(document.createTextNode(itemContent));

        document.getElementById("relationship-list").appendChild(item);
            
    };

};

/*
function createFavsMagics(){
    var wrapperFavMagics = document.getElementById("content-info-favorite-magics");
    var contentFavMagics = '';
    for (const informacao in drawFavMagics){
        if (drawFavMagics.hasOwnProperty(informacao)) {
            console.log(`${informacao}: `);
            console.log(`descricacao da magia: ${drawFavMagics[informacao].description}`);
            console.log(`nome da magia: ${drawFavMagics[informacao].name}`);
            console.log(`alt: ${drawFavMagics[informacao].alt}`);
            console.log(`src: ${drawFavMagics[informacao].img}`);
            //Acess each value and key in the object
            contentFavMagics += `
                <div class="wrapper-magic">
                    <div class="magic-img">
                        <img src="${drawFavMagics[informacao].img}" alt="${drawFavMagics[informacao].alt}" />
                    </div>
                    <div class="magic-description">
                        <div>
                            <h2><span>Spell:</span> ${drawFavMagics[informacao].name}</h2>
                            <p>${drawFavMagics[informacao].description}</p>
                        </div>          
                    </div>
                </div>
            `
        }
    };
    //Insert the html content
    wrapperFavMagics.innerHTML = contentFavMagics;
};
*/

function createFavsMagics(charFavsMagics){

    var wrapperFavMagics = document.getElementById("content-info-favorite-magics");
    var contentFavMagics = '';

    for (const informacao in charFavsMagics){
        if (charFavsMagics.hasOwnProperty(informacao)) {

            /* 
            console.log(`${informacao}: `);
            console.log(`descricacao da magia: ${drawFavMagics[informacao].description}`);
            console.log(`nome da magia: ${drawFavMagics[informacao].name}`);
            console.log(`alt: ${drawFavMagics[informacao].alt}`);
            console.log(`src: ${drawFavMagics[informacao].img}`);
            //Acess each value and key in the object
            */
        
            contentFavMagics += `
                <div class="wrapper-magic">
                    <div class="magic-img">
                        <img src="${charFavsMagics[informacao].img}" alt="${charFavsMagics[informacao].alt}" />
                    </div>
                    <div class="magic-description">
                        <div>
                            <h2><span>Spell:</span> ${charFavsMagics[informacao].name}</h2>
                            <p>${charFavsMagics[informacao].description}</p>
                        </div>          
                    </div>
                </div>
            `
        }
    };
    
    //Insert the html content
    wrapperFavMagics.innerHTML = contentFavMagics;
    
};

document.addEventListener("DOMContentLoaded", function(){

    //default
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

    //Create of Char Page
    var charsPage = document.getElementsByTagName("body");
    var pageId = charsPage[0].id;

    if(pageId == "drawPageId"){
        createInfoAtributes(drawAtr);
        createRelationShip(drawRelationship);
        createFavsMagics(drawFavMagics);

    }else if(pageId == "mazabelePageId"){
        atributesValues = createInfoAtributes(mazabeleAtr);
        createRelationShip(mazabeleRelationship);
        createFavsMagics(mazabeleFavMagics);

    }else if(pageId == "aephestosPageId"){
        createInfoAtributes(aephestosAtr);
        createRelationShip(aephestosRelationship);
        createFavsMagics(aephestosFavMagics);

    }else if(pageId == "gregorioPageId"){
        atributesValues = createInfoAtributes(gregorioAtr);

    }else if(pageId == "zaosPageId"){
        createInfoAtributes(zaosAtr);
        createRelationShip(zaosRelationship);
        createFavsMagics(zaosFavMagics);
    }

});
