"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Piso
from api.utils import generate_sitemap, APIException

import hashlib

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello we are CCS PT XLI 🐏"
    }
    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def register():

    body = request.json

    if "name" not in body:
        return jsonify({ "message" : "el piso no tiene plazas de estacionamiento, asegurese de enviar 'name; en el body ⛔️" }), 400
    if "email" not in body:
        return jsonify({ "message" : "el piso no tiene plazas de estacionamiento, asegurese de enviar 'email; en el body ⛔️" }), 400
    if "password" not in body:
        return jsonify({ "message" : "el piso no tiene plazas de estacionamiento, asegurese de enviar 'password; en el body ⛔️" }), 400
    if "last_name" not in body:
        return jsonify({ "message" : "el piso no tiene plazas de estacionamiento, asegurese de enviar 'last_name; en el body ⛔️" }), 400

    try:

        hashed_password = hashlib.md5( body['password'].encode('utf-8') ).hexdigest()
        
         # Object of type Piso || an Instance of class Piso
        nuevo_user = User(body['name'], body['last_name'], body['email'], hashed_password)


        db.session.add(nuevo_user) # Memoria RAM de SQLAlchemy

        db.session.commit() # Inserta el nuevo_user en la BD de psql ✅

        return jsonify( nuevo_user.serialize() ),200 #Piso searilzado
    
    except Exception as err:
        return jsonify({ "message" : err }), 500


@api.route('/login', methods=['POST'])
def login():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    #verifys payload body
    if email == None or password == None:
        return jsonify({"msg": "Bad email or password ⛔️"}), 401
    
    #search user existance into the DB
    search_user = User.query.filter_by(email=email).one_or_none()
    if search_user == None:
            return jsonify({ "message" : "user not found "}), 404
        
    #verify thats the password is correct

    #password saved as hash // with the password arriving hashed

    if search_user.password == hashlib.md5(password.encode('utf-8') ).hexdigest():
        return jsonify({ "token" : create_access_token(identity=search_user.email) }), 200
    
    #handling errors
    return jsonify({ "message" : "password doesnt match, be carefull 🔓️ "}), 401


@api.route('/piso', methods=['POST'])
def new_piso():

    body = request.json #lo que viene del request como un dic de python 🦎

    if "name" not in body:
        return jsonify({ "message" : "el piso no tiene nombre, asegurese de enviar 'name; en el body ⛔️" }), 400
    if "description" not in body:
        return jsonify({ "message" : "el piso no tiene descripcion, asegurese de enviar 'description; en el body ⛔️" }), 400
    if "address" not in body:
        return jsonify({ "message" : "el piso no tiene direccion, asegurese de enviar 'address; en el body ⛔️" }), 400
    if "area" not in body:
        return jsonify({ "message" : "el piso no tiene area en metros cuadrados, asegurese de enviar 'area; en el body ⛔️" }), 400
    if "rooms" not in body:
        return jsonify({ "message" : "el piso no tiene numero de habitaciones, asegurese de enviar 'rooms; en el body ⛔️" }), 400
    if "baths" not in body:
        return jsonify({ "message" : "el piso no tiene numero de baños, asegurese de enviar 'baths; en el body ⛔️" }), 400
    if "parking_slots" not in body:
        return jsonify({ "message" : "el piso no tiene plazas de estacionamiento, asegurese de enviar 'parking_slots; en el body ⛔️" }), 400
    
    try:
        nuevo_piso = Piso(body['name'], body['description'], body['address'], body['area'], body['rooms'], body['baths'], body['parking_slots'])

        print(nuevo_piso) # Object of type Piso || an Instance of class Piso

        db.session.add(nuevo_piso) # Memoria RAM de SQLAlchemy

        db.session.commit() # Inserta el nuevo_piso en la BD de psql ✅

        return jsonify(nuevo_piso.serialize()),200 #Piso searilzado
    
    except Exception as err:
        return jsonify({ "message" : "Ah ocurrido un error inesperado ‼️" }), 500
    


@api.route('/piso', methods=['GET'])
@jwt_required()
def get_pisos():

    all_pisos = Piso.query.all() # lista de Objetos Piso guardados en la base de datos

    return jsonify([ piso.serialize() for piso in all_pisos]), 200