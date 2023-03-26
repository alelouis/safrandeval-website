import toml
import json

data = toml.load("mes_produits/description.toml")
with open("mes_produits/data.json", "w") as f:
    json.dump(data, f)