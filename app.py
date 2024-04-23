from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    api_key = 'eedf7e0c418549a2684e6437bbcc69a9' 
    api_url = f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    
    response = requests.get(api_url)
    if response.status_code != 200:
        return jsonify({'error': 'Failed to fetch weather data'}), 500
    
    data = response.json()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
