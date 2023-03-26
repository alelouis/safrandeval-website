from jinja2 import Environment, FileSystemLoader
import json
import os

os.chdir("/workspaces/safrandeval-website")

prod_safr = "Osez le safran dans vos plats et vous serez séduit par cette épice chaleureuse, vous offrant, à la fois, la couleur, l’arôme suave et la saveur unique."
prod_desc = "Parce que le safran est source d’inspiration pour de multiples préparations, je vous propose ces produits safranés  artisanaux réalisés sur notre ferme avec le plus grand soin."

categories = {
    "safransec": ["Safran Sec", "safran_sec", prod_safr],
    "creationsalees": ["Créations salées", "creations_salees", prod_desc],
    "creationssucrees": ["Créations sucrées", "creations_sucrees", prod_desc],
    "siropgeleevinaigre": ["Sirops, gelées & vinaigre", "sirop_gelee_vinaigre", prod_desc]}

with open("mes_produits/data.json", "rb") as f:
    tabs = json.load(f)

environment = Environment(loader=FileSystemLoader("./autogen/gallery/templates/"))

for cat, (title, html, desc) in categories.items():
    template = environment.get_template(f"produits.html")

    context = dict(tabs=tabs[cat]["produit"], title=title, desc=desc)

    filename = f"./_includes/gallery/{html}.html"
    content = template.render(context)

    content += """<script src="{{ base.url | prepend: site.url }}/assets/"""+ f"""script_{cat}.js"></script>"""

    with open(filename, mode="w", encoding="utf-8") as message:
        message.write(content)