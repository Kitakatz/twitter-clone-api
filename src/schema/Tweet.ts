export interface Tweet {
  id: string;
  author: string;
  tweet: string;
  replies: Reply[];
  likes: number;
  mediaURL: string;
  mediaType: string;
};

export interface Reply {
  id: string;
  author: string;
  tweet: string;
  likes: number;
  mediaURL: string;
  mediaType: string;
  tweetID: string;
};

