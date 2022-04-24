const express = require('express');
const app = express();
const port = 3001;

const qweerky_model = require('./qweerky_model');

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

/*
Root. 
  (Select) Returns all songs and the 
  artist name with id=1
*/
app.get('/', (req, res) => {
  qweerky_model.root()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.get('/songs', (req, res) => {
  qweerky_model.root()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

/*
Playlist. 
  (Select) Returns all songs and the 
  artist name with id=1
*/
app.get('/playlist', (req, res) => {
  qweerky_model.playlist()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

/*
Playlist. 
  (Select) Returns all songs and the 
  artist name with id=1
*/
app.get('/playlist_songs', (req, res) => {
  qweerky_model.playlist_songs()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

/*
1. 
  (Select) Returns all songs and the 
  artist name with id=1
*/
app.get('/select1', (req, res) => {
  qweerky_model.select1()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

/*
2. 
  (Select) Returns the playlist name, 
  song title, artist, and song id contained 
  in the searched playlist keyword ‘relax’
*/
app.get('/select2', (req, res) => {
  qweerky_model.select2()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

/*
3. 
  (Insert) Inserts a new song to the 
  playlist with the given playlist id
*/
app.get('/insert1', (req, res) => {
  qweerky_model.insert1()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

/*
4. 
  (Update) Updates the playlist with 
  id ‘1’ to the name given in the keyword
*/
app.get('/update1', (req, res) => {
  qweerky_model.update1()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

/*
5. 
  (Delete) Deletes all songs by the artist 
  in the given keyword from the playlist with id ‘1’
*/
app.get('/delete1', (req, res) => {
  qweerky_model.delete1()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});


// app.post('/merchants', (req, res) => {
//   merchant_model.createMerchant(req.body)
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// })

// app.delete('/merchants/:id', (req, res) => {
//   merchant_model.deleteMerchant(req.params.id)
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// })