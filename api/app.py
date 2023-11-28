from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import pickle

app = Flask(__name__)  

CORS(app)
CORS(app, resources={r"/api/*": {"origins": "*"}})

app.config['JSON_SORT_KEYS'] = False
 
MODEL_PATH = '/data/model.pkl'

class CustomModel:
    def __init__(self, rules):
        self.rules = rules
        self.model_date = None


def get_recommendations(songs, custom_model):
    recommended_playlist = set() 
    model = custom_model.rules

    for rule in model:
        rule_song_0 = list(rule[0])[0]
        rule_song_1 = list(rule[1])[0]

        for song in songs:
            if song == rule_song_0:
                recommended_playlist.add(rule_song_1)
            if song == rule_song_1:
                recommended_playlist.add(rule_song_0)

    return list(recommended_playlist)

@app.route('/api/recommend', methods=['POST'])
def recommend():
    if request.method == 'POST':
        try:            
            data = request.get_json()

            if 'songs' not in data:
                return jsonify({"error": "O campo 'songs' é obrigatório"}), 400

            songs = data.get('songs')

            if not songs:
                return jsonify({"error": "A lista de 'songs' não pode estar vazia"}), 400

            if not isinstance(songs, list):
                return jsonify({"error": "O campo 'songs' deve ser uma lista de strings"}), 400

            if not all(isinstance(song, str) for song in songs):
                return jsonify({"error": "A lista de 'songs' deve conter apenas strings"}), 400

            with open(MODEL_PATH, 'rb') as file:
                custom_model = pickle.load(file)

            recommended_playlist = get_recommendations(songs, custom_model)

            version = 1
            model_date = custom_model.model_date

            response = {
                "playlist": recommended_playlist,
                "version": "v" + str(version),
                "model_date": model_date,
            }

            return make_response(jsonify(response), 200)
        except Exception as e:
            return jsonify({"error": str(e)}), 400


# NOTE: __name__ is only '__main__' when executed with the python command: python app.py
if __name__ == '__main__':
    app.run(
        host="0.0.0.0",
        port=32173,
        debug=True)
