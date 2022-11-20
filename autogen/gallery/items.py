from jinja2 import Environment, FileSystemLoader
import tomli
import os

os.chdir("/workspaces/safrandeval-website")

with open("mes_produits/description.toml", "rb") as f:
    tabs = tomli.load(f)

environment = Environment(loader=FileSystemLoader("./autogen/gallery/templates/"))
template = environment.get_template("grid.html")

context = dict(tabs=tabs)

filename = "./_includes/gallery/grid.html"
content = template.render(context)

with open(filename, mode="w", encoding="utf-8") as message:
    message.write(content)