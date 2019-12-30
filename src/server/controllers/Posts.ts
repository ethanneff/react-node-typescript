import { posts } from "./../models/Posts";
import { Response, Request } from "express";

export const getPosts = (_: Request, res: Response) => {
  res.json(Object.values(posts));
};

export const updatePost = (req: any, res: Response) => {
  posts[req.body.id] = req.body;
  res.json(req.body);
};

export const createPost = (req: any, res: Response) => {
  posts[req.body.id] = req.body;
  res.json(req.body);
};

export const deletePost = (req: any, res: Response) => {
  delete posts[req.body.id];
  res.json(req.body);
};
