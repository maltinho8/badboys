import React, { useEffect, useState } from 'react';
import fire from '../../fire';

const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = fire.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleLogin = async (email, password) => {
    await fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.error('Incorrect username or password');
      });
  };

  const handleSignOut = async () => {
    fire
      .auth()
      .signOut()
      .then(
        function () {
          console.log('Signed Out');
        },
        function (error) {
          console.error('Sign Out Error', error);
        }
      );
  };

  return (
    <UserContext.Provider
      value={{
        handleLogin,
        user: currentUser,
        handleSignOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };

export default UserContext;
