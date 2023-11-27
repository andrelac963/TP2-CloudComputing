import pyfpgrowth as fp
import pandas as pd
import pickle
import datetime

class CustomModel:
    def __init__(self, patterns, rules):
        self.patterns = patterns
        self.rules = rules
        self.version = None
        self.model_date = None

# read csv
csv_file_path = './data/2023_spotify_ds1.csv'
df = pd.read_csv(csv_file_path, sep=',', header=0)

# create transactions
transactions = []
for index, row in df.iterrows():
    transactions.append(row['track_name'].split(','))

# create model
minSupRatio = 0.01
minConf = 0.5

patterns = fp.find_frequent_patterns(
    transactions, int(minSupRatio * len(transactions)))
rules = fp.generate_association_rules(patterns, minConf)

# create custom model object
custom_model = CustomModel(patterns, rules)
custom_model.version = 'v1'
custom_model.model_date = datetime.datetime.now().strftime("%d/%m/%Y")

# save model
model_file_path = './model.pkl'
with open(model_file_path, 'wb') as file:
    pickle.dump(custom_model, file)