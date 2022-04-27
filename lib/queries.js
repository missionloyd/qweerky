export async function getAllSongs() {
  const endpoint = process.env.NEXT_PUBLIC_API_URL + 'songs';

  const songs = await fetch(endpoint)
    .then(res => {return res.text()}).then(async data => {
      return JSON.parse(data);
    });

  const promises = await songs?.map(async song => {
    if(song?.s_arid) {
      const album = await getAlbumNameWithId(song?.s_aid);
      const name = await getArtistNameWithId(song?.s_arid);

      return {
        ...song, 
        artistName: name[0]?.ar_primaryname,
        albumArtUrl: album[0]?.a_albumarturl || null,
        albumTitle: album[0]?.a_title || null,
      }
    }
    else{
      return song
    } 
  });

  return await Promise.all(promises).then((e) => {
    return e
  })
}

export async function getSongWithSid() {
  const endpoint = process.env.NEXT_PUBLIC_API_URL + 'songs/' + sid;

  const songs = await fetch(endpoint)
    .then(res => {return res.text()}).then(async data => {
      return JSON.parse(data);
    });

  const promises = await songs?.map(async song => {
    if(song?.s_arid) {
      const name = await getArtistNameWithId(song.s_arid);
      return {
        ...song, 
        artistName: name[0]?.ar_primaryname,
        // albumArtUrl: name[0]?.a_albumArtUrl,
      }
    }
    else{
      return song
    } 
  });

  return await Promise.all(promises).then((e) => {
    return e
  })
}

export async function getAllUsers() {
  const endpoint = process.env.NEXT_PUBLIC_API_URL + 'users';

  return await fetch(endpoint)
    .then(res => {return res.text()}).then(data => {
      return JSON.parse(data)
    });
}

export async function getUserWithUsername(username) {
  const endpoint = process.env.NEXT_PUBLIC_API_URL + 'users/name/' + username;

  return await fetch(endpoint)
    .then(res => {return res.text()}).then(data => {
      return JSON.parse(data)
    });
}

export async function getUserWithUid(uid) {
  const endpoint = process.env.NEXT_PUBLIC_API_URL + 'users/' + uid;

  return await fetch(endpoint)
    .then(res => {return res.text()}).then(data => {
      return JSON.parse(data)
    });
}

export async function getArtistNameWithId(arid) {
  const endpoint = process.env.NEXT_PUBLIC_API_URL + 'artist/' + arid;
  return await fetch(endpoint)
    .then(res => {return res.text()}).then(data => {
      return JSON.parse(data)
    });
}

export async function getAlbumNameWithId(aid) {
  if(aid != null) {
    const endpoint = process.env.NEXT_PUBLIC_API_URL + 'album/' + aid;
    return await fetch(endpoint)
      .then(res => {return res.text()}).then(data => {
        return JSON.parse(data)
      });
  }
  else {
    return [0];
  }
}

export async function createNewUser(username) {
  const endpoint = process.env.NEXT_PUBLIC_API_URL + 'users';

  const data = {
    username: username,
    uid: Math.floor(Math.random() * 10000),
  }

  return await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then(res => { return res });
}

export async function createPlaylist(name, uid, pid) {
  const endpoint = process.env.NEXT_PUBLIC_API_URL + 'playlists';

  const data = {
    p_name: name,
    p_uid: uid,
    pid: pid || Math.floor(Math.random() * 10000),
  }

  return await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then(res => { return res });
}

export async function getPlaylistByPid(pid, sid) {
  const endpoint = process.env.NEXT_PUBLIC_API_URL + 'playlists/' + pid

  return await fetch(endpoint)
    .then(res => {return res.text()}).then(data => {
      return JSON.parse(data)
    });
}

export async function getSongsFromPlaylistByPid(pid) {
  const endpoint = process.env.NEXT_PUBLIC_API_URL + 'playlists_songs/' + pid;

  const songs = await fetch(endpoint)
    .then(res => {return res.text()}).then(data => {
      return JSON.parse(data)
    });

  const promises = await songs?.map(async song => {
    if(song?.s_arid) {
      const album = await getAlbumNameWithId(song?.s_aid);
      const name = await getArtistNameWithId(song?.s_arid);
      return {
        ...song, 
        artistName: name[0]?.ar_primaryname,
        albumArtUrl: album[0]?.a_albumarturl || null,
        albumTitle: album[0]?.a_title || null,
      }
    }
    else{
      return song
    } 
  });

  return await Promise.all(promises).then((e) => {
    return e
  })
}

export async function addPlaylistSongs(pid, sid) {
  const endpoint = process.env.NEXT_PUBLIC_API_URL + 'playlists_songs';
  const data = {
    p_pid: pid,
    s_sid: sid
  }

  return await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then(res => console.log(res));
}

export async function deletePlaylistSongs(pid, sid) {
  const endpoint = process.env.NEXT_PUBLIC_API_URL + 'playlists_songs/delete';
  const data = {
    p_pid: pid,
    s_sid: sid
  }

  return await fetch(endpoint, {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then(res => { return res });
}

export async function getAddedSongs(pid, sid) {
  const endpoint = process.env.NEXT_PUBLIC_API_URL + 'playlists_songs/get/' + pid + '/' + sid

  return await fetch(endpoint)
    .then(res => {return res.text()}).then(data => {
      return JSON.parse(data)
    });
}