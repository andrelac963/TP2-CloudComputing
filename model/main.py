import fpgrowth as fp
import pandas as pd
import pickle

# read csv
csv_file_path = './data/playlist-sample-ds1.csv'

df = pd.read_csv(csv_file_path, sep=',', header=0)

# create transactions
transactions = []
for index, row in df.iterrows():
    transactions.append(row['songs'].split(','))

# create model
minSupRatio = 0.01
minConf = 0.5

model = fp.FPGrowth(transactions, minSupRatio, minConf)

# version and model_date
model.version = 'v1'
model.model_date = '2020-04-16'

# save model
model_file_path = './model.pkl'

with open(model_file_path, 'wb') as file:
    pickle.dump(model, file)
