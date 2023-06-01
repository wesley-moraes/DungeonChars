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
    cha : "8"
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
    for : "15",
    dex : "8",
    con : "16",
    int : "10",
    wis : "12",
    cha : "14"
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
    Gregorio : "Good! Draw can trust him and ask anything. Gregorio is a good person!",
    Zaos : "Bad! He's an agent of chaos, which Draw doesn't like. However, they manage to live together peacefully.",
    Aephestos : "Good! They often have conversations about life, magic, and the meaning of it all!",
    Mazabele : "Neutral! She's very quiet..."
};

var mazabeleRelationship = {
    Gregorio : "Neutral/good! He appears to be a paternal figure to everyone.",
    Zaos : "Neutral! He takes pleasure in observing his masks.",
    Aephestos : "Good! He is one of the few with whom one can have deeper conversations.",
    Draw : "Neutral! Despite some past issues, their relationship is now good enough."
};

var gregorioRelationship = {
    Mazabele : "Good! Gregorio likes her a lot, even though she is very closed! She's someone he trusts",
    Zaos : "Funny! Despite the intrigues and little things, Gregory considers Zaos a lot!",
    Aephestos : "Good/Neutral: A distant relationship, but a good one! They are good companions, but it is a more distant relationship",
    Draw : "Great! He thinks Draw is half-orc Gregory"
};

var aephestosRelationship = {
    Mazabele : "Neutral/good! At first, she may not have seen Aephestos as a friend due to his bloodline, but over time, everything changed.",
    Zaos : "Good! Aephestos realized that he never considered Zaos inferior because of his mixed blood. Instead, he treated him as an equal.",
    Gregorio : "Good! As a half-elf, Aephestos learns a lot about the human side from him.",
    Draw : "Good! Draw shares similar beliefs and respects Aephestos for who he is."
};

var zaosRelationship = {
    Mazabele : "Neutral! She sees herself as a simple woman skilled in archery.",
    Aephestos : "Good! They enjoy discussing spells and how to enhance their powers. They rarely clash.",
    Gregorio : "A source of friction! Zaos enjoys gossiping with Gregorio because he easily gets caught up in chaos, which Zaos finds amusing.",
    Draw : "Neutral/bad! Draw dislikes chaos, so at times, he can be perceived as dull because chaos is deemed necessary."
};

/*Favourites magics*/
var drawFavMagics = {
    cureWounds : {
        name : "Cure Wounds",
        description : "This is Draw's favorite magic! He has the ability to heal anyone in need of healing.",
        img : "../img/drawMagics/cureWounds.png",
        alt : "Cure Wounds Magic"
    },
    
    banishment : {
        name : "Banishment",
        description : "This is the most powerful magic that Draw possesses! He has the ability to send anyone to another dimension.",
        img : "../img/drawMagics/banishment.png",
        alt : "Banishment Magic"
    },

    sanctuary : {
        name : "Sanctuary",
        description : "This is the most powerful magic that Draw has! He can send anyone to another dimension.",
        img : "../img/drawMagics/sanctuary.png",
        alt : "Sanctuary Magic"
    }
};

var mazabeleFavMagics = {
    huntersMark : {
        name : "Hunter's Mark",
        description : "She chooses a creature she can see within range and mystically marks it as her quarry.",
        img : "../img/mazabeleMagics/huntersMark.png",
        alt : "Hunter's Mark Magic"
    },
    
    Alarm : {
        name : "Alarm",
        description : "She sets an alarm against unwanted intrusion.",
        img : "../img/mazabeleMagics/alarm.png",
        alt : "Alarm Magic"
    },

    SpeakPlants  : {
        name : "Speak with Plants",
        description : "She imbues plants with limited sentience and animation, giving them the ability to communicate with her and follow simple commands.",
        img : "../img/mazabeleMagics/speakPlants.png",
        alt : "Speak with Plants Magic"
    }
};

var aephestosFavMagics = {
    tidalWave : {
        name : "Tidal Wave",
        description : "By manipulating water, Aephestos can create a powerful and forceful wave that crashes down violently.",
        img : "../img/aephestosMagics/tidalWave.jpg",
        alt : "Tidal Wave Magic"
    },
    
    Moonbeam : {
        name : "Moonbeam",
        description : "He can conjure a tower of pale silver light that engulfs enemies in ghostly flames.",
        img : "../img/aephestosMagics/moonBeam.jpg",
        alt : "Banishment Magic"
    },

    guiddingBold : {
        name : "Guiding Bolt",
        description : "Aephestos can also unleash a ray of spiritual energy that illuminates and targets enemies.",
        img : "../img/aephestosMagics/guidingBolt.jpg",
        alt : "Sanctuary Magic"
    }
};

var gregorioFavMagics = {
    mistyStep : {
        name : "Misty Step",
        description : "A short teleport over a considerable distance",
        img : "../img/gregorioMagics/mistyStep.jpg",
        alt : "Misty Step Magic"
    },
    
    auraOfProtection : {
        name : "Aura Of Protection",
        description : "Protection in area that whoever is close to it has reduced magic damage",
        img : "../img/gregorioMagics/auraOfProtection.jpg",
        alt : "Aura Of Protection Magic"
    },

    divineSmite : {
        name : "Divine Smite",
        description : "Strengthens attack against evil creatures! It is an attack blessed by the god (a divine strike)",
        img : "../img/gregorioMagics/divineSmite.png",
        alt : "Divine Smite Magic"
    }
};

var zaosFavMagics = {
    message : {
        name : "Message",
        description : "You point your finger toward a creature within range and whisper a message.",
        img : "../img/zaosMagics/message.png",
        alt : "Message Magic"
    },
    
    fireBall : {
        name : "Fire Ball",
        description : "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame",
        img : "../img/zaosMagics/fireBall.png",
        alt : "Fire Ball Magic"
    },

    counterspell : {
        name : "Counterspell",
        description : "Attempt to interrupt a creature in the process of casting a spell.",
        img : "../img/zaosMagics/counterspell.png",
        alt : "Counterspell Magic"
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

function workMenuList(){
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
}

document.addEventListener("DOMContentLoaded", function(){

    //Create of Char Page
    var charsPage = document.getElementsByTagName("body");
    var pageId = charsPage[0].id;

    if(pageId == "drawPageId"){
        workMenuList();
        createInfoAtributes(drawAtr);
        createRelationShip(drawRelationship);
        createFavsMagics(drawFavMagics);

    }else if(pageId == "mazabelePageId"){
        workMenuList();
        atributesValues = createInfoAtributes(mazabeleAtr);
        createRelationShip(mazabeleRelationship);
        createFavsMagics(mazabeleFavMagics);

    }else if(pageId == "aephestosPageId"){
        workMenuList();
        createInfoAtributes(aephestosAtr);
        createRelationShip(aephestosRelationship);
        createFavsMagics(aephestosFavMagics);

    }else if(pageId == "gregorioPageId"){
        workMenuList();
        createInfoAtributes(gregorioAtr);
        createRelationShip(gregorioRelationship);
        createFavsMagics(gregorioFavMagics);

    }else if(pageId == "zaosPageId"){
        workMenuList();
        createInfoAtributes(zaosAtr);
        createRelationShip(zaosRelationship);
        createFavsMagics(zaosFavMagics);
    }

    /*Menu*/
    var nav = document.getElementById("nav-menu");
    var showMenu = document.getElementById("showMenu");
    var hideMenu = document.getElementById("hideMenu");
    showMenu.addEventListener("click", function () {
        nav.classList.add("show");
        console.log("tranquilo");
    });

    hideMenu.addEventListener("click", function () {
    nav.classList.remove("show");
    });

    document.addEventListener('mouseup', function(e) {
        var container = document.getElementById('nav-menu');
        if (!container.contains(e.target)) {
            nav.classList.remove("show");
        }
    });


});
