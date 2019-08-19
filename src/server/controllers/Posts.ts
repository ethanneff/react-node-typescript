import { posts } from "./../models/Posts";

import { Response, Request } from "express";

export const getPosts = (req: Request, res: Response) => {
  res.json(Object.values(posts));
};

export const updatePost = (req: Request, res: Response) => {
  posts[req.body.id] = req.body;
  res.json(req.body);
};

export const createPost = (req: Request, res: Response) => {
  posts[req.body.id] = req.body;
  res.json(req.body);
};

export const deletePost = (req: Request, res: Response) => {
  delete posts[req.body.id];

  res.json(req.body);
};
