from fpgrowth_py import fpgrowth
import pandas as pd

# Carregue o conjunto de dados de exemplo
data = pd.read_csv("./data/playlists-sample-ds1.csv")

# Converta o conjunto de dados em um formato apropriado para o FP-Growth
itemSetList = []
for index, row in data.iterrows():
    itemSet = row['Songs'].split(',')  # Suponha que a coluna 'Songs' contenha uma lista de músicas separadas por vírgulas
    itemSetList.append(itemSet)

# Defina o suporte mínimo e a confiança mínima
minSupRatio = 0.1  # Ajuste o suporte mínimo conforme necessário
minConf = 0.5  # Ajuste a confiança mínima conforme necessário

# Execute o FP-Growth para encontrar os frequent itemsets e regras de associação
freqItemSet, rules = fpgrowth(itemSetList, minSupRatio=minSupRatio, minConf=minConf)

# Imprima as regras de associação geradas
for rule in rules:
    antecedent, consequent, confidence = rule
    print(f"If {antecedent} then {consequent}, Confidence: {confidence}")
