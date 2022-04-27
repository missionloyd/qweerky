const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3001;

const db = require('./queries');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});


app.get('/', db.getSongs)
app.get('/songs', db.getSongs)
app.get('/songs/:sid', db.getSongById)

app.get('/users', db.getUsers)
app.get('/users/:uid', db.getUserByUid)
app.get('/users/name/:username', db.getUserByName)

app.get('/albums', db.getAlbums)
app.get('/album/:aid', db.getAlbumByAid)

app.get('/artist/:arid', db.getArtistById)

app.get('/playlists', db.getPlaylists)
app.get('/playlists/:pid', db.getPlaylistByPid)
app.get('/playlists_songs', db.getPlaylistSongs)
app.get('/playlists_songs/:pid', db.getSongsFromPlaylistByPid)
app.get('/playlists_songs/get/:pid/:sid', db.getAddedSong)

app.post('/users', db.createUser)
app.post('/playlists', db.createPlaylist)
app.post('/playlists_songs', db.addPlaylistSongs)

app.delete('/playlists_songs/delete', db.deleteAddedSong)

// app.put('/users/:id', db.updateUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});
