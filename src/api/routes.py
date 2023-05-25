"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Piso
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello we are CCS PT XLI 🐏"
    }
    return jsonify(response_body), 200

@api.route('/piso', methods=['POST'])
def new_piso():

    body = request.json #lo que viene del request como un dic de python 🦎

    nuevo_piso = Piso(body['name'], body['description'], body['address'], body['area'], body['rooms'], body['baths'], body['parking_slots'])

    print(nuevo_piso) # Object of type Piso || an Instance of class Piso

    db.session.add(nuevo_piso) # Memoria RAM de SQLAlchemy

    db.session.commit() # Inserta el nuevo_piso en la BD de psql ✅

    return jsonify(nuevo_piso.serialize()),200 #Piso searilzado

    #return jsonify({ "message" : "se ejecuto el endpoint /piso 👽️" }), 200

@api.route('/piso', methods=['GET'])
def get_pisos():

    all_pisos = Piso.query.all() # lista de Objetos Piso guardados en la base de datos

    return jsonify([ piso.serialize() for piso in all_pisos]), 200