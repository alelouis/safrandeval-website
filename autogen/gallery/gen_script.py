import json
import os

os.chdir("/workspaces/safrandeval-website")

with open("mes_produits/data.json", "rb") as f:
    tabs = json.load(f)

categories = {
    "safransec": ["Safran Sec", "safran_sec"],
    "creationsalees": ["Créations salées", "creations_salees"],
    "creationssucrees": ["Créations sucrées", "creations_sucrees"],
    "siropgeleevinaigre": ["Sirops, gelées & vinaigre", "sirop_gelee_vinaigre"]}

for cat in categories:
    content = ""
    content += f"const content = {json.dumps(tabs)};\n\n"
    content += """const modal = document.querySelector(".modal");\n"""
    content += """const overlay = document.querySelector(".overlay");\n\n"""

    content += f"""document.getElementById("selection_{cat}").style.textDecoration = "underline";\n\n"""

    for item, values in tabs[cat]["produit"].items():
        title = values["name"]
        description = values["description"]
        tarif = values["tarif"]
        open_modal = f"""document.querySelector(".open-{item}")""" + """.addEventListener("click", function () {\n"""
        open_modal += f"""    document.querySelector(".modal-title").innerHTML = "{title}";\n"""
        open_modal += f"""    document.querySelector(".modal-description").innerHTML = "{description}";\n"""
        open_modal += f"""    document.querySelector(".modal-price").innerHTML = "{tarif}";\n"""
        open_modal += """    modal.classList.remove("hidden");
            overlay.classList.remove("hidden");
        });\n\n"""
            
        content += open_modal

    content += """document.querySelector(".btn-close").addEventListener("click", function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    });

    overlay.addEventListener("click", function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    });
    """

    filename = f"./assets/script_{cat}.js"

    with open(filename, mode="w", encoding="utf-8") as message:
        message.write(content)