import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({})
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider();



  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.log("error", error)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(result.user);
      })
      .catch(error => {
        console.log("error", error)
      })
  }
  return (
    <div className="App">
      {user.displayName ? <button onClick={handleSignOut}>sign out</button> :
        <>
          <button onClick={handleGoogleSignIn}>google sign in</button>
          <button onClick={handleGithubSignIn}>Github sign in</button>
        </>}
      <div className='user-info'>
        <div>
          <h1>{user.displayName}</h1>
          <h3>{user.email}</h3>
          <img className='w-5' src={user.photoURL} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
