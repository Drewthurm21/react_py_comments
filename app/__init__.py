import os
import requests
from flask import Flask, request
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from app.models import db, Comment
from flask_wtf.csrf import generate_csrf
from .config import Configuration
from app.forms.new_comment_form import NewCommentForm

app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)
migrate = Migrate(app, db)

@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token', 
                        generate_csrf(),
                        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get('FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response

@app.route('/seed')
def seed_route():
    text = requests.get("https://baconipsum.com/api/?type=meat-and-filler")
    text = text.json()[0]
    for _ in range(10):
        new_comment = Comment(user_name='Drew', body=text)
        db.session.add(new_comment)
        db.session.commit()
    return { 'comments_seeded': True }
    
@app.route('/comments')
def get_all_comments():
    '''This route should return all comments in the database.'''
    return {'completed': False}

@app.route('/comments/<int:id>', methods=['DELETE'])
def delete_comment(id):
    '''This route should delete a comment with the given id.'''
    return {'completed': False}


@app.route('/comments', methods=['POST'])
def create_comment():
    '''This route should create a new comment.'''
    return {'completed': False}

@app.route('/comments/<int:id>', methods=['PUT'])
def update_comment(id):
    '''This route should update a comment with the given id.'''
    return {'completed': False}

@app.route('/comments/<int:id>')
def get_comment(id):
    '''This route should return a comment with the given id.'''
    return {'completed': False}

@app.route('/comments/<int:id>/like', methods=['POST'])
def like_comment(id):
    '''This route should like a comment with the given id.'''
    return {'completed': False}

@app.route('/comments/<int:id>/like', methods=['DELETE'])
def unlike_comment(id):
    '''This route should unlike a comment with the given id.'''
    return {'completed': False}

@app.route('/comments/<int:id>/likes')
def get_comment_likes(id):
    '''This route should return the number of likes for a comment with the given id.'''
    return {'completed': False}
