from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)
poetList = {}

@app.route('/')
def home():
    return app.send_static_file('poetry.html')

@app.route('/poetry/<poemType>')
def poets(poemType):
    if poemType in poetList:
        poets = poetList[poemType]
    else:
        collection = db[poemType]
        pipeline = [
            { '$group': { '_id': '$author', 'num': { '$sum': 1 } } },
            { '$sort': { 'num': -1 } }
        ]
        cursor = collection.aggregate(pipeline)
        poets = list(map(lambda x: x['_id'], cursor))
        poetList[poemType] = poets
    return jsonify(poets)

def changeObjectId(d):
    d['_id'] = d['content'][0]
    return d

@app.route('/poetry/<poemType>/author/<author>')
def peoms(poemType, author):
    collection = db[poemType]
    cursor = collection.find({ 'author': author })
    poems = list(map(changeObjectId, cursor))
    return jsonify(poems)

if __name__ == '__main__':
    client = MongoClient()
    db = client.poetry

    app.run(port=3000)