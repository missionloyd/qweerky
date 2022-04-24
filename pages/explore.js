import axios from 'axios';
import { useEffect, useState } from 'react';
import Page from '../components/shared/Page';
import Dashboard from '../layouts/DashboardLayout/Dashboard';

export async function getServerSideProps(context) {
  
  let res = null;

  await fetch(process.env.API_URL)
    .then(response => {
      return response.text();
    })
    .then(data => {
      res = data;
    });

  return {
    props: { 
      res: JSON.parse(res)
     }
  };
}


function Explore({ res }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if(res && res?.rows) {
      setSongs(res.rows);
    }
  }, []);

  console.log(songs);

  return (
    <Page
      title='Library'
    >
      <div>
      {songs && (
        songs?.map((song, key) => {
          return (
            <p key={key}>{song?.s_title}</p>
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

Explore.layout = Dashboard;

export default Explore;