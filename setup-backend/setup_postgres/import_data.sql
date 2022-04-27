COPY Listener FROM '/home/pi/dev/CSE-412/qweerky/setup-backend/data/User.csv' DELIMITER ',' CSV HEADER;
COPY Artist FROM '/home/pi/dev/CSE-412/qweerky/setup-backend/data/Artist.csv' DELIMITER ',' CSV HEADER;
COPY Album FROM '/home/pi/dev/CSE-412/qweerky/setup-backend/data/Album.csv' DELIMITER ',' CSV HEADER;
COPY Song FROM '/home/pi/dev/CSE-412/qweerky/setup-backend/data/Song.csv' DELIMITER ',' CSV HEADER;
COPY Playlist FROM '/home/pi/dev/CSE-412/qweerky/setup-backend/data/Playlist.csv' DELIMITER ',' CSV HEADER;
COPY Rating FROM '/home/pi/dev/CSE-412/qweerky/setup-backend/data/Rating.csv' DELIMITER ',' CSV HEADER;