const DIALOGUE = [
    { user: "Licorne Codeuse", text: "Ahhh, rien de tel qu'une bonne matinée de codage ! Mon nouveau projet est presque terminé. Je suis une génie, mon code est parfait, comme d'habitude." },
    { user: "Lapin Bug", text: "Oh, vraiment ? Parfait, dis-tu ? Hihi, je crois que tu as oublié de fermer cette parenthèse ici... et là-bas aussi !" },
    { user: "Licorne Codeuse", text: "Quoi ?! Mais non, impossible ! Oh non, il y a des erreurs partout ! Comment est-ce possible ?!" },
    { user: "Lapin Bug", text: "Tu m'as sous-estimé, ma chère Licorne. Je suis le Bug, le maître du chaos dans ton monde parfait de lignes de code. Regarde ce que j'ai fait à ta boucle !" },
    { user: "Licorne Codeuse", text: "Mais pourquoi tu fais ça ?! Je veux juste écrire un beau code sans erreur !" },
    { user: "Lapin Bug", text: "Parce que c'est amusant ! Et avoue-le, tu te sentirais perdue sans moi. Qui d'autre te donnerait autant de défis à résoudre ?" },
    { user: "Licorne Codeuse", text: "Tu as peut-être raison... mais je finirai par te corriger, petit lapin ! Je vais traquer chaque bug, ligne par ligne, jusqu'à ce que tu disparaisses pour de bon !" },
    { user: "Lapin Bug", text: "Bonne chance avec ça ! Mais n'oublie pas, là où il y a du code, il y a toujours un petit bug quelque part..." },
    { user: "Licorne Codeuse", text: "On verra bien ! En attendant, je retourne au travail... et cette fois, je suis prête à tout !" }
];

let lancerDialogue = document.querySelector("#startButton");
const BOITEDEDIALOGUE = document.querySelector("#dialogueBox");

lancerDialogue.addEventListener("click", function(event){
    let text = document.querySelector("#welcomeText");
    let licorneImg = document.querySelector("#licorneImg");
    let lapinImg = document.querySelector("#lapinImg");
    let suivant = document.querySelector("#nextButton");
    lancerDialogue.style.display = "none";
    text.style.display = "none";

    lapinImg.style.display = "block";
    licorneImg.style.display = "block";
    BOITEDEDIALOGUE.style.display = "block";
    suivant.style.display = "inline-block";

    displayNextLine();
});

let currentIndex = 0;

function displayNextLine(){
    if(currentIndex < DIALOGUE.length){
        currentIndex++;
        const LINE = DIALOGUE[currentIndex];
        console.log(LINE.text);
        const P = document.createElement("p");
        P.textContent = `${LINE.text}`;
        BOITEDEDIALOGUE.appendChild(P);
    }else{
        document.getElementById("nextButton").style.display = "none";
        document.getElementById("restartButton").style.display = "inline-block";
    }
};

document.querySelector("#nextButton").addEventListener("click", function(event){
    displayNextLine();
});