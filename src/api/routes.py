"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Piso
from api.utils import generate_sitemap, APIException
from api.firebase.firebase import Bucket

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello we are CCS PT XLI 🐏"
    }
    return jsonify(response_body), 200

@api.route('/piso', methods=['POST'])
def new_piso():

    #body = request.json #lo que viene del request como un dic de python 🦎
    form = request.form
    files = request.files #Archivos que trae el request 💾

    name = form.get('name')
    description = form.get('description')
    address = form.get('address')
    area = form.get('area')
    rooms = form.get('rooms')
    baths = form.get('baths')
    parking_slots = form.get('parking_slots')

    cover = files.get("cover")

    cover_url = Bucket.upload_file(cover, 'title')
    try:

        #print(cover)

        nuevo_piso = Piso(name, description, address, area, rooms, baths, parking_slots)

        print(nuevo_piso) # Object of type Piso || an Instance of class Piso

        db.session.add(nuevo_piso) # Memoria RAM de SQLAlchemy

        db.session.commit() # Inserta el nuevo_piso en la BD de psql ✅

        return jsonify(nuevo_piso.serialize()),200 #Piso searilzado
    
    except Exception as err:
        print(err)
        return jsonify({ "message" : "Ah ocurrido un error inesperado ‼️" }), 500

@api.route('/piso', methods=['GET'])
def get_pisos():

    all_pisos = Piso.query.all() # lista de Objetos Piso guardados en la base de datos

    return jsonify([ piso.serialize() for piso in all_pisos]), 200