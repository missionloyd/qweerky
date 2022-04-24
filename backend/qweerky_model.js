const Pool = require('pg').Pool

const pool = new Pool({
  user: 'qweerky',
  host: 'localhost',
  database: 'qweerky',
  password: 'root',
  port: 8888,
});

const SQL = "SELECT * FROM Song;"

const root = () => {
  return new Promise(function(resolve, reject) {
    pool.query(SQL, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results);
    })
  }) 
}

const PLAYLIST_SONGS = "SELECT * FROM playlist_songs;"

const playlist_songs = () => {
  return new Promise(function(resolve, reject) {
    pool.query(PLAYLIST_SONGS, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results);
    })
  }) 
}

const PLAYLIST = "SELECT * FROM playlist"

const playlist = () => {
  return new Promise(function(resolve, reject) {
    pool.query(PLAYLIST, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results);
    })
  }) 
}


/*
1. 
  (Select) Returns all songs and the 
  artist name with id=1
*/
const SELECT1 = "SELECT Song.s_title as song_name, Artist.ar_primaryName as artist_name FROM Song, Artist WHERE s_arid=1 and artist.arid = 1 GROUP BY song_name, artist_name;"

const select1 = () => {
  return new Promise(function(resolve, reject) {
    pool.query(SELECT1, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results);
    })
  }) 
}

/*
2. 
  (Select) Returns the playlist name 
  and user name of all users who have made
  a playlist
*/
const SELECT2 = "SELECT Playlist.p_name as p_name, Listener.u_primaryName as u_name FROM Playlist, Listener WHERE uid=p_uid GROUP BY p_name, u_name;"

const select2 = () => {
  return new Promise(function(resolve, reject) {
    pool.query(SELECT2, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results);
    })
  }) 
}


/*
3. 
  (Insert) Inserts a new song to the 
  playlist with the given playlist id
*/
const INSERT = "INSERT INTO playlist_songs(p_pid, s_sid) VALUES ('1','9');"

const insert1 = () => {
  return new Promise(function(resolve, reject) {
    pool.query(INSERT, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results);
    })
  }) 
}

/*
4. 
  (Update) Updates the playlist with 
  id ‘1’ to the name given in the keyword
*/
const UPDATE = "UPDATE playlist SET p_name = 'music to relax to' WHERE pid = 1;"

const update1 = () => {
  return new Promise(function(resolve, reject) {
    pool.query(UPDATE, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results);
    })
  }) 
}

/*
5. 
  (Delete) Deletes all songs by the artist 
  in the given keyword from the playlist with id ‘1’
*/
const DELETE = "DELETE FROM playlist_songs as d WHERE d.p_pid = 1 and d.s_sid IN (SELECT song.sid FROM song, artist WHERE song.s_arid = artist.arid and artist.ar_primaryName like '%Weekend%');"

const delete1 = () => {
  return new Promise(function(resolve, reject) {
    pool.query(DELETE, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results);
    })
  }) 
}


module.exports = {
  root,
  playlist,
  playlist_songs,
  select1,
  select2,
  insert1,
  update1,
  delete1
}


// const createMerchant = (body) => {
//   return new Promise(function(resolve, reject) {
//     const { name, email } = body

//     pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(`A new merchant has been added added: ${JSON.stringify(results.rows[0])}`)
//     })
//   })
// }

// const deleteMerchant = (merchantId) => {
//   return new Promise(function(resolve, reject) {
//     const id = parseInt(merchantId)

//     pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(`Merchant deleted with ID: ${id}`)
//     })
//   })
// }