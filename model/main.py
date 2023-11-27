from fpgrowth_py import fpgrowth
import pandas as pd
import pickle
import datetime

CSV_FILE_PATHS = ['./data/2023_spotify_ds1.csv', './data/2023_spotify_ds2.csv']
VERSION_FILE_PATH = './version.txt'
MODEL_FILE_PATH = './model.pkl'


class CustomModel:
    def __init__(self, rules):
        self.rules = rules
        self.version = None
        self.model_date = None


def main():
    transactions = []

    print("Reading csv files...")
    for csv_file_path in CSV_FILE_PATHS:
        df = pd.read_csv(csv_file_path, usecols=[
                         'pid', 'track_name'], sep=',', header=0)
        transaction = df.groupby('pid')['track_name'].apply(list).tolist()
        transactions.extend(transaction)

    minSupRatio = 0.1
    minConf = 0.5

    print("Generating rules...")
    _itemSet, rules = fpgrowth(transactions, minSupRatio, minConf)

    print("Saving model...")
    custom_model = CustomModel(rules)
    custom_model.model_date = datetime.datetime.now().strftime("%d/%m/%Y")

    with open(VERSION_FILE_PATH, 'r') as file:
        version = int(file.read())
        custom_model.version = version + 1

    with open(VERSION_FILE_PATH, 'w') as file:
        file.write(str(custom_model.version))

    with open(MODEL_FILE_PATH, 'wb') as file:
        pickle.dump(custom_model, file)


if __name__ == "__main__":
    main()
