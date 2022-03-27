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

// (1.5pt) DEMO two selection queries
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

const SELECT2 = "SELECT playlist.p_name, song.s_title, song.sid, artist.ar_primaryName FROM playlist, playlist_songs, song, artist WHERE playlist.p_name LIKE '%relax%' and playlist_songs.s_sid = song.sid 					and playlist.pid = playlist_songs.p_pid and song.s_arid = artist.arid;"

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


// (1pt) DEMO : Insert Query
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


// (1pt) DEMO : Update Query
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

// (0.5pt) DEMO : Delete Query
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