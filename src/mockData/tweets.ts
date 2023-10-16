export interface Tweet {
  id: string;
  author: string;
  tweet: string;
  replies: Reply[];
  likes: number;
};

export interface Reply {
  id: string;
  author: string;
  tweet: string;
  mediaURL: string;
  mediaType: string;
};


const tweets: Tweet[] = [
  {
    id: "01",
    author: "AWS Amplify",
    tweet:
      "OLD Amplify Flutter Authentication support for Web and Desktop (Developer Preview) 🙌🏻🙌🏻 With the latest release from AWS Amplify Flutter, you can set up a fully functional authentication flows for Mobile, Web and Desktop 📱🕸🖥",
    likes: 32,
    replies: [
      {
        id: '01',
        author: 'Michael',
        tweet: 'I am a tweet.',
        mediaURL: '',
        mediaType: ''
      },
      {
        id: '02',
        author: 'Andrew',
        tweet: 'I am another tweet.',
        mediaURL: '',
        mediaType: ''
      }
    ]
  },
  {
    id: "02",
    author: "AWS Amplify",
    tweet:
      "Excited to be at @AllThingsOpen in Raleigh, NC next week with our friends at @AWSOpen Read about our plans below! 👇 🔗 https://go.aws/3VYrQOh",
    likes: 20,
    replies: []
  },
  {
    id: "03",
    author: "AWS Amplify",
    tweet:
      "The wait is over, say hello to the new Amplify Library for Swift! 🚀 We listened to you and we are happy to announce beta support for macOS!!",
    likes: 101,
    replies: []
  },
];

export default tweets;