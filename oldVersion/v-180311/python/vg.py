import sqlite3
from collections import Counter
from flask import Flask, jsonify

DATABASE_NAME = 'poetry.db'

app = Flask(__name__)
poet_list = {}
poem_types = { 'cyjc': 'cyjc', 'modern': 'modern', 'northernSongPoem': 'songpoem', 'southernSongPoem': 'songpoem',
    'songPoetry': 'songpoetry'}

@app.route('/')
def home():
    return app.send_static_file('poetry.html')

@app.route('/poetry/<poem_type>')
def poets(poem_type):
    if poem_type not in poem_types:
        return '{} not found'.format(poem_type)
    pm_type = poem_types[poem_type]
    return jsonify(poet_list.setdefault(pm_type, getAuthors(pm_type)))

def getAuthors(pm_type):
    conn = sqlite3.connect(DATABASE_NAME)
    cursor = conn.cursor()
    cursor.execute('SELECT author from {}'.format(pm_type))
    authors = [row[0] for row in cursor]
    cursor.close()
    conn.close()

    counter = Counter(authors)
    ordered_authors = [author[0] for author in counter.most_common()]
    return ordered_authors

@app.route('/poetry/<poem_type>/author/<author>')
def peoms(poem_type, author):
    if poem_type not in poem_types:
        return '{} not found'.format(poem_type)
    return jsonify(getPoems(author, poem_types[poem_type]))

def getPoems(author, pm_type):
    conn = sqlite3.connect(DATABASE_NAME)
    cursor = conn.cursor()
    cursor.execute('SELECT title, author, content from {} where author=?'.format(pm_type), (author,))
    poems = [{ 'title': row[0], 'author': row[1], 'content': row[2].split('\n') } for row in cursor]
    cursor.close()
    conn.close()
    return poems

if __name__ == '__main__':
    app.run(port=3000)