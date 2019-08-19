export interface Post {
  id: string;
  title: string;
}

export interface Posts {
  [id: string]: Post;
}
