const content = {
  "safransec": {
      "title": "Safran Sec",
      "index": 1,
      "produit": {
          "safran_sec_0_2g": {
              "class": "one",
              "name": "Safran sec - 0.2g",
              "description": "Placeholder",
              "image": "safran_sec_02g.jpg"
          },
          "safran_sec_0_5g": {
              "class": "two",
              "name": "Safran sec - 0.5g",
              "description": "Placeholder",
              "image": "safran_sec_05g.jpg"
          },
          "safran_sec_1g": {
              "class": "three",
              "name": "Safran sec - 1g",
              "description": "Placeholder",
              "image": "safran_sec_1g.jpg"
          },
          "safran_sec_2g": {
              "class": "four",
              "name": "Safran sec - 2g",
              "description": "Placeholder",
              "image": "safran_sec_2g.jpg"
          }
      }
  },
  "creationssucrees": {
      "title": "Cr\u00e9ation sucr\u00e9es",
      "index": 2,
      "produit": {
          "minimadeleine": {
              "class": "one",
              "name": "Mini madeleines safran\u00e9es",
              "description": "Farine de bl\u00e9 Bio, sucre blanc, oeufs Bio, sel de Gu\u00e9rande, safran",
              "image": "sucrees/minimad.jpg"
          },
          "cookies_amande_safran": {
              "class": "two",
              "name": "Cookies amande safran\u00e9es",
              "description": "Cassonade, amande enti\u00e8res, farine de bl\u00e9 Bio, beurre doux, oeufs Bio, pouvre \u00e0 lever, sel de Gu\u00e9rande, safran.",
              "image": "sucrees/cookie.jpg"
          },
          "Croconoix": {
              "class": "three",
              "name": "Croc\u2019O Noix safran\u00e9s",
              "description": "Cassonade, noix de Touraine, beurre doux, farine de bl\u00e9 Bio, oeufs Bio, poudre \u00e0 lever, sel de Gu\u00e9rande, safran.",
              "image": "sucrees/croconoix.jpg"
          },
          "tendreschocolats": {
              "class": "four",
              "name": "Tendres chocolat safran\u00e9s",
              "description": "Farine de bl\u00e9 Bio, chocolat noir 65%, cassonade, beurre doux, oeufs Bio, cacao, sel de Gu\u00e9rande, safran.",
              "image": "sucrees/tendreschoco.jpg"
          },
          "paletsraisins": {
              "class": "five",
              "name": "Palets raisins safran\u00e9s",
              "description": "Cassonade, farine de bl\u00e9 Bio, beurre doux, oeufs Bio, raisins secs bruns, rhum brun, sel de Gu\u00e9rande, safran.",
              "image": "sucrees/palets.jpg"
          }
      }
  },
  "creationsalees": {
      "title": "Cr\u00e9ation sal\u00e9es",
      "index": 3,
      "produit": {
          "safran_sec_0_2g": {
              "class": "one",
              "name": "Safran sec - 0.2g",
              "description": "Placeholder",
              "image": "placeholder.png"
          },
          "safran_sec_0_5g": {
              "class": "two",
              "name": "Safran sec - 0.5g",
              "description": "Placeholder",
              "image": "placeholder.png"
          },
          "safran_sec_1g": {
              "class": "three",
              "name": "Safran sec - 1g",
              "description": "Placeholder",
              "image": "placeholder.png"
          }
      }
  },
  "jesaispas": {
      "title": "Je sais pas",
      "index": 4,
      "produit": {
          "safran_sec_0_2g": {
              "class": "one",
              "name": "Safran sec - 0.2g",
              "description": "Placeholder",
              "image": "placeholder.png"
          },
          "safran_sec_0_5g": {
              "class": "two",
              "name": "Safran sec - 0.5g",
              "description": "Placeholder",
              "image": "placeholder.png"
          },
          "safran_sec_1g": {
              "class": "three",
              "name": "Safran sec - 1g",
              "description": "Placeholder",
              "image": "placeholder.png"
          },
          "safran_sec_1g_2": {
              "class": "four",
              "name": "Safran sec - 1g",
              "description": "Placeholder",
              "image": "placeholder.png"
          }
      }
  }
}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
  
document.querySelector(".open-one").addEventListener("click", function () {
  document.querySelector(".modal-title").innerHTML = content["safransec"]["title"]
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

document.querySelector(".open-two").addEventListener("click", function () {
  
  document.querySelector(".modal-title").innerHTML = "Two"
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