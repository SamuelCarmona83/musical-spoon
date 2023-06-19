from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    
    def __init__(self, name, last_name, email, password):
        self.name = name
        self.last_name = last_name
        self.email = email

        self.password = password

        self.is_active = True   

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Piso(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(528), nullable=False)
    address = db.Column(db.String(120), nullable=False)
    area = db.Column(db.Integer, nullable=False)
    rooms_number = db.Column(db.Integer, nullable=False)
    bathrooms_number = db.Column(db.Integer, nullable=False)
    parking_slots = db.Column(db.Integer, nullable=False)

    image_url = db.Column(db.String(480), nullable=False)

    def __init__(self, name, description, address, area, rooms_n, bath_n, parking_s, image_url):
        self.name = name
        self.description = description
        self.address = address
        self.area = area
        self.rooms_number = rooms_n
        self.bathrooms_number = bath_n
        self.parking_slots = parking_s
        self.image_url = image_url

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "area": str(self.area) + ' m^2',
            "baths": self.bathrooms_number,
            "rooms": self.rooms_number,
            "parkings": self.parking_slots,
            "photo": self.image_url
        }