from flask import Flask, render_template, request, jsonify
import requests
import os
from dotenv import load_dotenv
import logging
from datetime import datetime

load_dotenv()

app = Flask(__name__)
app.logger.setLevel(logging.INFO)

TMDB_API_KEY = os.getenv('TMDB_API_KEY')
app.logger.info(f"TMDB API Key loaded: {TMDB_API_KEY}")  # Added logging

BASE_URL = 'https://api.themoviedb.org/3/search/movie?api_key={}'.format(TMDB_API_KEY)
ODH_BRAND = {
    'name': 'Oblivion Development & Hosting',
    'logo_url': '/static/assets/odh_logo.png',
    'description': 'Your trusted partner for web development, hosting, and cybersecurity solutions.',
    'contact_url': 'https://odh.ivan-vcard.xyz'
}



@app.route('/')
def index():
    return render_template('index.html', odh=ODH_BRAND, now=datetime.now)


@app.route('/search')
def search():
    query = request.args.get('query')

    if not query:
        app.logger.warning("Search query was empty.")
        return jsonify({'error': 'Please provide a search query'}), 400

    try:
        url = BASE_URL + '&query=' + query  # TMDb uses 'query' parameter
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()

        if data.get('results'): # TMDb uses 'results' key
            results = data['results']
            # Format the results to match what the frontend expects.
            formatted_results = [{
                'Title': movie['title'],  # TMDb uses 'title'
                'Year': movie['release_date'][:4] if movie['release_date'] else 'N/A', # Extract year
                'Poster': 'https://image.tmdb.org/t/p/w500' + movie['poster_path'] if movie['poster_path'] else '/static/assets/no_poster.png', # TMDb poster path
                'Type': 'movie'  # Hardcoded for now
            } for movie in results]

            return jsonify(formatted_results) # Send back the formatted data.
        else:
            app.logger.info(f"No movies found for query: {query}")
            return jsonify({'error': 'No movies found.'}), 404

    except requests.exceptions.RequestException as e:
        app.logger.error(f"Error calling TMDb API: {e}")
        return jsonify({'error': 'Error connecting to the movie database.'}), 500
    except Exception as e:
        app.logger.exception("An unexpected error occurred during search: %s", e)
        return jsonify({'error': 'An unexpected error occurred.'}), 500


if __name__ == '__main__':
    app.run(debug=True)