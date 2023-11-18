export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

alias mysql="/usr/local/mysql/bin/mysql -u root -p"

INSERT INTO tweet (author, tweet, likes) VALUES(
  'AWS Amplify',
   'NEW Amplify Flutter Authentication support for Web and Desktop (Developer Preview) 🙌🏻🙌🏻 With the latest release from AWS Amplify Flutter, you can set up a fully functional authentication flows for Mobile, Web and Desktop 📱🕸🖥',
  32
);

CREATE TABLE tweet (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  author VARCHAR(20),
  tweet VARCHAR(225),
  likes INT
);

CREATE TABLE reply (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  author VARCHAR(20),
  tweet VARCHAR(225),
  mediaURL VARCHAR(225),
  mediaType VARCHAR(20),
  tweetID VARCHAR(225)
);

SELECT author,tweet, likes FROM tweet;

twitter clone api nmp start

sql

enter/ start With mysql from anywhere
then password

-- see all databases
SHOW DATABASES;
-- "SELECT TABLE"
USE twitter
-- SELECT * FROM tweet
SELECT * FROM (INSERT TABLE NAME HERE)
-- more info on table and types
DESCRIBE TABLE;

http GET http://localhost:3000/fetchReplies id="1"
http POST http://localhost:3000/addReply author="ReplyAuthor" tweet="Reply for tweet 1 BUT  second reply"  mediaURL="http://google.com" mediaTYPE="gif" tweetID="1";

http POST http://localhost:3001/addUser username="user2" email="user2@gmail.com" password="userpw";
CREATE TABLE tweet (
  id VARCHAR(225) NOT NULL PRIMARY KEY,
  author VARCHAR(20),
  tweet VARCHAR(225),
  likes INT
);

CREATE TABLE reply (
  id VARCHAR(225) NOT NULL PRIMARY KEY,
  author VARCHAR(20),
  tweet VARCHAR(225),
  likes INT,
  mediaUrl VARCHAR(225),
  mediaType VARCHAR(20),
  tweetID VARCHAR(225)
);

CREATE TABLE users (
  id VARCHAR(225) NOT NULL PRIMARY KEY,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  email VARCHAR(100),
  phone VARCHAR(50),
  username VARCHAR(20),
  password VARCHAR(225)
);

CREATE TABLE session (
  id VARCHAR(225) NOT NULL PRIMARY KEY,
  userID VARCHAR(50),
  timeToLive VARCHAR(50)
);

-- User ID (incrementing bigint)
-- User Common Name (to be displayed on the site)
-- User Email Address
-- Password Salt (Unique for every user, inserted when the account is created)
-- Password (Hashed with the salt - MD5 or SHA1, your preference)
-- Date Account Was Created


// INSERT INTO tweet (id, author, tweet, likes) VALUES( 'd123-456', "Kitakat", "My First Tweet.", 30)

// INSERT INTO reply (id, author, tweet, mediaURL, mediaTYPE, tweetID) VALUES( "d0198-765", "triedbyseven", "My reply tweet.", "www.google.com", "type/gif", "d123-456" )

// INSERT INTO users (username, email, password) VALUES( 'Kitakat', "devingitup@gmail.com", "mypassword");
