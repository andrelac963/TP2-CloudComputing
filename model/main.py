from fpgrowth_py import fpgrowth
import pandas as pd
import pickle
import datetime
import os
import time
import sys
import ssl
from urllib.error import HTTPError, URLError

ssl._create_default_https_context = ssl._create_unverified_context

ENV_DATASET_URL = os.environ.get('DATASET_URL')
ENV_MIN_SUP_RATIO = os.environ.get('MIN_SUP_RATIO')
ENV_MIN_CONF = os.environ.get('MIN_CONF')

CSV_FILE_PATH = ENV_DATASET_URL          if ENV_DATASET_URL   else "https://homepages.dcc.ufmg.br/~cunha/hosted/cloudcomp-2023s2-datasets/2023_spotify_ds1.csv"
MIN_SUP_RATIO = float(ENV_MIN_SUP_RATIO) if ENV_MIN_SUP_RATIO else 0.07
MIN_CONF      = float(ENV_MIN_CONF)      if ENV_MIN_CONF      else 0.1

MODEL_FILE_PATH = '/data/model.pkl'


class CustomModel:
    def __init__(self, rules):
        self.rules = rules
        self.model_date = None


def main():
    transactions = []

    print("Reading csv files...")
    try:
        df = pd.read_csv(CSV_FILE_PATH, usecols=[
                        'pid', 'track_name'], sep=',', header=0)
    except (HTTPError, URLError) as e:
        print(f"ERROR: {e}", file=sys.stderr)
        exit(1)
    except Exception as e:
        print(f"Untreated Exception: {e}", file=sys.stderr)
        exit(1)
        
    transaction = df.groupby('pid')['track_name'].apply(list).tolist()
    transactions.extend(transaction)

    print("Generating rules...")
    _itemSet, rules = fpgrowth(transactions, MIN_SUP_RATIO, MIN_CONF)

    print("Saving model...")
    custom_model = CustomModel(rules)
    custom_model.model_date = datetime.datetime.now().strftime("%d/%m/%Y, %H:%M:%S")

    with open(MODEL_FILE_PATH, 'wb') as file:
        pickle.dump(custom_model, file)

    datetime.datetime.now().s
if __name__ == "__main__":
    main()
