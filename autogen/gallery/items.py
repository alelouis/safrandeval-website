from jinja2 import Environment, FileSystemLoader
import json
import os

os.chdir("/workspaces/safrandeval-website")

categories = {
    "safransec": ["Safran Sec", "safran_sec"],
    "creationsalees": ["Créations salées", "creations_salees"],
    "creationssucrees": ["Créations sucrées", "creations_sucrees"]}

with open("mes_produits/data.json", "rb") as f:
    tabs = json.load(f)

environment = Environment(loader=FileSystemLoader("./autogen/gallery/templates/"))

for cat, (title, html) in categories.items():
    template = environment.get_template(f"produits.html")

    context = dict(tabs=tabs[cat]["produit"], title=title)

    filename = f"./_includes/gallery/{html}.html"
    content = template.render(context)

    content += """<script src="{{ base.url | prepend: site.url }}/assets/"""+ f"""script_{cat}.js"></script>"""

    with open(filename, mode="w", encoding="utf-8") as message:
        message.write(content)