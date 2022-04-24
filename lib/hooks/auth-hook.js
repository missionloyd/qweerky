import { useState, useCallback, useEffect } from 'react';

export function useUserData() {

  const [user, setUser] = useState(null);
  
  // firebase
  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    // unsplash
    // const urlRef = firestore.collection('unsplash').doc('url');
    // unsubscribe = urlRef.onSnapshot((doc) => {
    //   const data = doc.data();
    //   setUrl(data?.urls?.regular || null);
    // });


    return unsubscribe;
  }, [user]);

  return { 
    user, 
  };
};