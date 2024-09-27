from flask import Flask, request

app = Flask(__name__)

# Members API route
@app.route('/members')
def return_members():
    return {
        'members': [
            {'name': 'John', 'age': 30},
            {'name': 'Jane', 'age': 25},
            {'name': 'Bob', 'age': 35}
        ]
    }


if __name__ == '__main__':
    app.run(debug=True,port=5000)