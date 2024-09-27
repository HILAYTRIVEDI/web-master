from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins='*')

# Members API route
@app.route('/members', methods=['GET'])
def return_members():
    return {
        'members': [
            {'name': 'John', 'age': 30},
            {'name': 'Jane', 'age': 25},
            {'name': 'Bob', 'age': 35}
        ]
    }


if __name__ == '__main__':
    app.run(debug=True,port=8080)