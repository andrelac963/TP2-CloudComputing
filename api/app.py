from flask import Flask, request, jsonify, make_response
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

CORS(app, resources={r"/api/*": {"origins": "http://localhost:30500"}})

app.config['JSON_SORT_KEYS'] = False

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
            

            # Chama o modelo de recomendação


            response = {
                "playlist_ids": [1, 2, 3],
                "version": "1.0",
                "model_date": "2023-10-12",
            }

            return make_response(jsonify(response), 200)
        except Exception as e:
            return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)