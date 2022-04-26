import { useEffect, useState } from 'react';
import { getPlaylistByPid } from '../backend/queries';
import Page from '../components/shared/Page';
import Dashboard from '../layouts/DashboardLayout/Dashboard';

// export async function getServerSideProps(context) {
//   const { slug } = context.params;
  
//   return {
//     props: { 
//       res: await getPlaylistByPid(slug)
//      }
//   };
// }


function Library() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if(res) {
      // setSongs(res);
    }
  }, []);

  return (
    <Page
      title='Library'
    >
      <div>
      {songs && (
        songs?.map((song, key) => {
          return (
            <p key={key}>{song?.s_lyricurl}</p>
          )
        })
      )
      || (
        <p>Sorry, no songs just yet!</p>
      )}
      </div>
    </Page>
  )
}

Library.layout = Dashboard;

export default Library;