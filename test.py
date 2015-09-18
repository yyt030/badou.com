#!C:\Python27\python.exe
# coding: utf8
from flask.ext.sqlalchemy import SQLAlchemy

__author__ = 'yueyt'

import MySQLdb

import datetime

db = SQLAlchemy()



class Post(db.Model):
    __tablename__ = 'posts'
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.Text)
    body_html = db.Column(db.Text)
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    comments = db.relationship('Comment', backref='post', lazy='dynamic')

