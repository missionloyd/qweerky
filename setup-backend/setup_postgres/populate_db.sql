CREATE TABLE Listener
(
  uid INT NOT NULL,
  u_primaryName VARCHAR(400) NOT NULL,
  PRIMARY KEY (uid)
);

CREATE TABLE Artist
(
  arid INT NOT NULL,
  ar_primaryName VARCHAR(400) NOT NULL,
  ar_artistImageURL VARCHAR(15000) NOT NULL,
  PRIMARY KEY (arid)
);

CREATE TABLE Album
(
  aid INT NOT NULL,
  a_title VARCHAR(400) NOT NULL,
  a_releaseDate VARCHAR(10) NOT NULL,
  a_albumURL VARCHAR(2000) NOT NULL,
  a_albumArtUrl VARCHAR(15000) NOT NULL,
  PRIMARY KEY (aid)
);

CREATE TABLE Song
(
  sid INT NOT NULL,
  s_title varchar(72) NOT NULL,
  s_songLength VARCHAR(5) NOT NULL,
  s_songURL varchar(500) NOT NULL,
  s_genre VARCHAR(250) NOT NULL,
  s_releaseDate VARCHAR(10) NOT NULL,
  s_lyricURL VARCHAR(1000) NOT NULL,
  s_aid INT,
  s_arid INT NOT NULL,
  PRIMARY KEY (sid),
  FOREIGN KEY (s_aid) REFERENCES Album(aid),
  FOREIGN KEY (s_arid) REFERENCES Artist(arid)
);

CREATE TABLE Playlist
(
  pid INT NOT NULL,
  p_name VARCHAR(250) NOT NULL,
  p_uid INT NOT NULL,
  PRIMARY KEY (pid),
  FOREIGN KEY (p_uid) REFERENCES Listener(uid)
);

CREATE TABLE Rating
(
  totalRating INT NOT NULL,
  numVotes INT NOT NULL,
  r_sid INT NOT NULL,
  FOREIGN KEY (r_sid) REFERENCES Song(sid)
);

CREATE TABLE Playlist_Songs
(
  p_pid INT NOT NULL,
  s_sid INT NOT NULL,
  FOREIGN KEY (p_pid) REFERENCES Playlist(pid),
  FOREIGN KEY (s_sid) REFERENCES Song(sid)
);