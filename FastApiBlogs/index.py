from fastapi import FastAPI
from pymongo import MongoClient
from pydantic import BaseModel
from typing import List
from bson import ObjectId

app = FastAPI()

# Coonection avec la base de données MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["BlogDB"]
collection = db["blogs"]


class Blog(BaseModel):
    title: str
    content: str
    author: str
    upvote: int
    downvote: int


@app.get("/blogs", response_model=List[Blog])
async def get_blogs():

    print("blog service : ")
    blogs = []
    for blog in collection.find():
        blogs.append(Blog(**blog))
    return blogs


@app.post("/blogs", response_model=Blog)
async def add_blog(blog: Blog):

    blog_dict = blog.dict()
    inserted = collection.insert_one(blog_dict)
    return Blog(**blog_dict)


@app.get("/blogs/{blog_id}", response_model=Blog)
async def get_blog_by_id(blog_id: str):
    
    blog = collection.find_one({"_id": ObjectId(blog_id)})
    return Blog(**blog)


@app.put("/blogs/{blog_id}/vote/{vote_type}")
async def vote_on_blog(blog_id: str, vote_type: str):
    
    if vote_type == "up":
        collection.update_one({"_id": ObjectId(blog_id)}, {"$inc": {"upvote": 1}})
    elif vote_type == "down":
        collection.update_one({"_id": ObjectId(blog_id)}, {"$inc": {"downvote": 1}})
