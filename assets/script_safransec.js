const content = {"safransec": {"title": "Safran Sec", "index": 1, "produit": {"safran_sec_0_2g": {"class": "one", "name": "Safran sec - 0.2g", "description": "Safran en filaments", "tarif": "8,50\u20ac TTC ", "image": "safran/safran_sec_02g.jpg"}, "safran_sec_0_5g": {"class": "two", "name": "Safran sec - 0.5g", "description": "Safran en filaments (env. 220 filaments)", "tarif": "17,00\u20ac TTC", "image": "safran/safran_sec_05g.jpg"}, "safran_sec_1g": {"class": "three", "name": "Safran sec - 1g", "description": "Safran en filaments (env. 450 filaments)", "tarif": "30,00\u20ac TTC", "image": "safran/safran_sec_1g.jpg"}, "safran_sec_2g": {"class": "four", "name": "Safran sec - 2g", "description": "Safran en filaments", "tarif": "56,00\u20ac TTC", "image": "safran/safran_sec_2g.jpg"}, "safran_sec_5g": {"class": "five", "name": "Safran sec - 5g", "description": "Safran en filaments", "tarif": "Pour plus de d\u00e9tails: contact@safrandeval.fr", "image": "safran/safran_sec_5g.jpg"}}}, "creationssucrees": {"title": "Cr\u00e9ation sucr\u00e9es", "index": 2, "produit": {"minimadeleine": {"class": "one", "name": "Mini madeleines safran\u00e9es - 100g", "description": "Farine de bl\u00e9 Bio, sucre blanc, oeufs Bio, sel de Gu\u00e9rande, safran", "tarif": "5,70 TTC\u20ac", "image": "sucrees/minimad.jpg"}, "cookies_amande_safran": {"class": "two", "name": "Cookies amande safran\u00e9es - 100g", "description": "Cassonade, amande enti\u00e8res, farine de bl\u00e9 Bio, beurre doux, oeufs Bio, pouvre \u00e0 lever, sel de Gu\u00e9rande, safran.", "tarif": "5,70 TTC\u20ac", "image": "sucrees/cookie.jpg"}, "Croconoix": {"class": "three", "name": "Croc\u2019O Noix safran\u00e9s - 100g", "description": "Cassonade, noix de Touraine, beurre doux, farine de bl\u00e9 Bio, oeufs Bio, poudre \u00e0 lever, sel de Gu\u00e9rande, safran.", "tarif": "5,70 TTC\u20ac", "image": "sucrees/croconoix.jpg"}, "tendreschocolats": {"class": "four", "name": "Tendres chocolat safran\u00e9s - 100g", "description": "Farine de bl\u00e9 Bio, chocolat noir 65%, cassonade, beurre doux, oeufs Bio, cacao, sel de Gu\u00e9rande, safran.", "tarif": "5,70 TTC\u20ac", "image": "sucrees/tendreschoco.jpg"}, "paletsraisins": {"class": "five", "name": "Palets raisins safran\u00e9s - 100g", "description": "Cassonade, farine de bl\u00e9 Bio, beurre doux, oeufs Bio, raisins secs bruns, rhum brun, sel de Gu\u00e9rande, safran.", "tarif": "5,70 TTC\u20ac", "image": "sucrees/palets.jpg"}, "tuiles_amandes_safran": {"class": "six", "name": "Tuiles amandes safran\u00e9es - 90g", "description": "Farine de bl\u00e9, sucre blanc, amandes enti\u00e8res, beurre doux, oeufs Bio, sucre vanill\u00e9, sel de Gu\u00e9rande, amandes effil\u00e9es, safran.", "tarif": "5,70 TTC\u20ac", "image": "sucrees/tuilesamande.jpg"}}}, "creationsalees": {"title": "Cr\u00e9ation sal\u00e9es", "index": 3, "produit": {"biscuits_chorizo": {"class": "one", "name": "Biscuits chorizo safran - 100g", "description": "Chorizo artisanal, farine de bl\u00e9, flocons d\u2019avoine, beurre doux, sel de Gu\u00e9rande, eau, Emmental, safran, herbe de Provence.", "tarif": "4,50\u20ac TTC", "image": "salees/biscuitschorizo.jpg"}, "tuiles_tomate": {"class": "two", "name": "Tuiles tomate safran - 100g", "description": "Tomates s\u00e9ch\u00e9es, farine de bl\u00e9 Bio, beurre doux, oeufs Bio, sel de Gu\u00e9rande, s\u00e9same, piment de Cayenne, safran.", "tarif": "4,50\u20ac TTC", "image": "salees/tuilestomate.jpg"}}}, "siropgeleevinaigre": {"title": "Sirop, gel\u00e9e et vinaigre", "index": 4, "produit": {"sirop100ml": {"class": "one", "name": "Sirop de safran - 100ml", "description": "Sucre de canne liquide, safran.", "tarif": "7,50\u20ac TTC", "image": "siropgeleevinaigre/sirop100.jpg"}, "sirop250ml": {"class": "two", "name": "Sirop de safran - 250ml", "description": "Sucre de canne liquide, safran.", "tarif": "14,00\u20ac TTC", "image": "siropgeleevinaigre/sirop250.jpg"}, "gelee": {"class": "three", "name": "Gel\u00e9e de vin safran\u00e9e - 100g", "description": "Vin blanc local, sucre blanc, Agar Agar, safran.", "tarif": "6,50\u20ac TTC", "image": "siropgeleevinaigre/gelee.jpg"}, "vinaigre": {"class": "four", "name": "Vinaigre de cidre au safran - 250ml", "description": "Vinaigre de cidre Bio, safran.", "tarif": "8,90\u20ac TTC", "image": "siropgeleevinaigre/vinaigre.jpg"}}}};

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

document.getElementById("selection_safransec").style.textDecoration = "underline";

document.querySelector(".open-safran_sec_0_2g").addEventListener("click", function () {
    document.querySelector(".modal-title").innerHTML = "Safran sec - 0.2g";
    document.querySelector(".modal-description").innerHTML = "Safran en filaments";
    document.querySelector(".modal-price").innerHTML = "8,50€ TTC ";
    modal.classList.remove("hidden");
            overlay.classList.remove("hidden");
        });

document.querySelector(".open-safran_sec_0_5g").addEventListener("click", function () {
    document.querySelector(".modal-title").innerHTML = "Safran sec - 0.5g";
    document.querySelector(".modal-description").innerHTML = "Safran en filaments (env. 220 filaments)";
    document.querySelector(".modal-price").innerHTML = "17,00€ TTC";
    modal.classList.remove("hidden");
            overlay.classList.remove("hidden");
        });

document.querySelector(".open-safran_sec_1g").addEventListener("click", function () {
    document.querySelector(".modal-title").innerHTML = "Safran sec - 1g";
    document.querySelector(".modal-description").innerHTML = "Safran en filaments (env. 450 filaments)";
    document.querySelector(".modal-price").innerHTML = "30,00€ TTC";
    modal.classList.remove("hidden");
            overlay.classList.remove("hidden");
        });

document.querySelector(".open-safran_sec_2g").addEventListener("click", function () {
    document.querySelector(".modal-title").innerHTML = "Safran sec - 2g";
    document.querySelector(".modal-description").innerHTML = "Safran en filaments";
    document.querySelector(".modal-price").innerHTML = "56,00€ TTC";
    modal.classList.remove("hidden");
            overlay.classList.remove("hidden");
        });

document.querySelector(".open-safran_sec_5g").addEventListener("click", function () {
    document.querySelector(".modal-title").innerHTML = "Safran sec - 5g";
    document.querySelector(".modal-description").innerHTML = "Safran en filaments";
    document.querySelector(".modal-price").innerHTML = "Pour plus de détails: contact@safrandeval.fr";
    modal.classList.remove("hidden");
            overlay.classList.remove("hidden");
        });

document.querySelector(".btn-close").addEventListener("click", function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    });

    overlay.addEventListener("click", function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    });
    