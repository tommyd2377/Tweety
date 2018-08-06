DROP TABLE IF EXISTS tweets;
DROP TABLE IF EXISTS following;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
        id SERIAL PRIMARY KEY,
         username VARCHAR(255) UNIQUE,
            email VARCHAR(255) UNIQUE,
  password_digest VARCHAR(255),
       created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON users (username);

CREATE TABLE tweets (
         id SERIAL PRIMARY KEY,
     tweet_content VARCHAR(255),
  creator_username VARCHAR(255),
       creator_uid INTEGER REFERENCES users (id),
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON tweets (creator_uid);
CREATE INDEX ON tweets (created_at);

CREATE TABLE following (
       id SERIAL PRIMARY KEY,
    follower_uid INTEGER REFERENCES users (id),
    followee_uid INTEGER REFERENCES users (id),
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON following (follower_uid);
CREATE INDEX ON following (followee_uid);
CREATE INDEX ON following (created_at);