const Pool = require('pg').Pool

const pool = new Pool({
  user: 'qweerky',
  host: 'localhost',
  database: 'qweerky',
  password: 'root',
  port: 8888,
});

const SQL = "SELECT * FROM Song;"
const PLAYLIST_SONGS = "SELECT * FROM playlist_songs;"
const PLAYLIST = "SELECT * FROM playlist"

/*
1. 
  (Select) Returns all songs and the 
  artist name with id=1
*/
const SELECT1 = "SELECT Song.s_title as song_name, Artist.ar_primaryName as artist_name FROM Song, Artist WHERE s_arid=1 and artist.arid = 1 GROUP BY song_name, artist_name;"


/*
2. 
  (Select) Returns the playlist name 
  and user name of all users who have made
  a playlist
*/
const SELECT2 = "SELECT Playlist.p_name as p_name, Listener.u_primaryName as u_name FROM Playlist, Listener WHERE uid=p_uid GROUP BY p_name, u_name;"


/*
3. 
  (Insert) Inserts a new song to the 
  playlist with the given playlist id
*/
const INSERT = "INSERT INTO playlist_songs(p_pid, s_sid) VALUES ('1','9');"

/*
4. 
  (Update) Updates the playlist with 
  id ‘1’ to the name given in the keyword
*/
const UPDATE = "UPDATE playlist SET p_name = 'music to relax to' WHERE pid = 1;"

/*
5. 
  (Delete) Deletes all songs by the artist 
  in the given keyword from the playlist with id ‘1’
*/
const DELETE = "DELETE FROM playlist_songs as d WHERE d.p_pid = 1 and d.s_sid IN (SELECT song.sid FROM song, artist WHERE song.s_arid = artist.arid and artist.ar_primaryName like '%Weekend%');"

const getSongs = (request, response) => {
  pool.query('SELECT * FROM Song', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getAlbums = (request, response) => {
  pool.query('SELECT * FROM Album', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getPlaylists = (request, response) => {
  pool.query('SELECT * FROM Playlist', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getPlaylistSongs = (request, response) => {
  pool.query('SELECT * FROM Playlist_Songs', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getPlaylistByPid = (request, response) => {
  const pid = request.params.pid
  // console.log(request.params.arid)

  pool.query('SELECT * FROM Playlist WHERE p_uid = $1', [pid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getSongsFromPlaylistByPid = (request, response) => {
  const pid = request.params.pid
  // console.log(request.params.arid)

  pool.query('SELECT * FROM Song, Playlist_Songs WHERE Playlist_Songs.p_pid = $1 AND Song.sid = Playlist_Songs.s_sid', [pid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUsers = (request, response) => {
  pool.query('SELECT * FROM Listener ORDER BY uid ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { username, uid } = request.body

  console.log(username)

  pool.query('INSERT INTO Listener (u_primaryName, uid) VALUES ($1, $2)', [username, uid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

const createPlaylist = (request, response) => {
  const { pid, p_name, p_uid } = request.body

  pool.query('INSERT INTO Playlist (pid, p_name, p_uid) VALUES ($1, $2, $3)', [pid, p_name, p_uid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Playlist created`)
  })
}

const addPlaylistSongs = (request, response) => {
  const { p_pid, s_sid } = request.body
  console.log(p_pid)

  pool.query('INSERT INTO Playlist_Songs (p_pid, s_sid) VALUES ($1, $2)', [p_pid, s_sid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Playlist Songs Added`)
  })
}

const getUserByUid = (request, response) => {
  const uid = parseInt(request.params.uid)

  pool.query('SELECT * FROM Listener WHERE uid = $1', [uid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getAlbumByAid = (request, response) => {
  const aid = parseInt(request.params.aid)
  // console.log(aid)

  pool.query('SELECT * FROM Album WHERE aid = $1', [aid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserByName = (request, response) => {
  const username = request.params.username
  // console.log(request.params.username)

  pool.query('SELECT * FROM Listener WHERE u_primaryName = $1', [username], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getArtistById = (request, response) => {
  const arid = request.params.arid
  // console.log(request.params.arid)

  pool.query('SELECT * FROM Artist WHERE arid = $1', [arid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getSongById = (request, response) => {
  const sid = request.params.sid

  pool.query('SELECT * FROM Song WHERE sid = $1', [sid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getAddedSong = (request, response) => {
  const p_pid = request.params.pid
  const s_sid = request.params.sid

  pool.query('SELECT * FROM Playlist_Songs WHERE p_pid = $1 AND s_sid = $2', [p_pid, s_sid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(results.rows)
  })
}

const deleteAddedSong = (request, response) => {
  const { p_pid, s_sid } = request.body

  pool.query('DELETE FROM Playlist_Songs WHERE p_pid = $1 AND s_sid = $2', [p_pid, s_sid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(results.rows)
  })
}

module.exports = {
  getSongs,
  getUsers,
  createUser,
  getUserByUid,
  getUserByName,
  getArtistById,
  createPlaylist,
  getPlaylists,
  getPlaylistByPid,
  getSongsFromPlaylistByPid,
  addPlaylistSongs,
  getAddedSong,
  deleteAddedSong,
  getPlaylistSongs,
  getSongById,
  getAlbums,
  getAlbumByAid
}