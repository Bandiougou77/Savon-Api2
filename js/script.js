// === CALCULATEUR DE SOUDE ===
// Indices SAP approximatifs
const SAP_OLIVE = 0.134;
const SAP_COCO = 0.183;
let btn = document.getElementById("calcul")


function calculerSoude() {

    let olive = parseFloat(document.getElementById("olive").value) || 0;
    let coco = parseFloat(document.getElementById("coco").value) || 0;

    let soude = (olive * SAP_OLIVE) + (coco * SAP_COCO);

    document.getElementById("resultat").innerText =
        "Quantité de soude nécessaire : " + soude.toFixed(2) + " g";
}

// === AJOUT D'INGRÉDIENT ===
function ajouterIngredient() {
    let input = document.getElementById("nouvelIngredient");
    let valeur = input.value.trim();

    if (valeur !== "") {
        let li = document.createElement("li");
        li.textContent = valeur;
        document.getElementById("listeIngredients").appendChild(li);
        input.value = "";
    }
}

// === ALERTE SÉCURITÉ ===
function alerteSecurite() {
    alert("⚠️ Toujours porter gants, lunettes et travailler dans un espace ventilé !");
}

btn.addEventListener("click",calculerSoude)
