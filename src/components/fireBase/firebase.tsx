import { initializeApp } from "firebase/app";
import {
 GoogleAuthProvider,
 getAuth,
 signInWithPopup,
 signInWithEmailAndPassword,
 createUserWithEmailAndPassword,
 sendPasswordResetEmail,
 signOut,
} from "firebase/auth"
import {
 getFirestore,
 query,
 getDocs,
 collection,
 where,
 addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC8TPs1Rm-BL1H7T8j0jimCcitHzDuuUy8",
    authDomain: "waze-final-project-86483.firebaseapp.com",
    projectId: "waze-final-project-86483",
    storageBucket: "waze-final-project-86483.appspot.com",
    messagingSenderId: "11721542140",
    appId: "1:11721542140:web:e145f10f3a3fd8ca7d4a79"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      const res = await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err:any) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email:string, password:string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err:any) {
      console.error(err);
      alert(err.message);
    }
  };
  const registerWithEmailAndPassword = async (firstName:string,lastName:string, email:string, password:string) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        firstName,
        lastName,
        authProvider: "local",
        email,
      });
    } catch (err:any) {
      console.error(err);
      alert(err.message);
    }
  };
  const sendPasswordReset = async (email:string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err:any) {
      console.error(err);
      alert(err.message);
    }
  };
  const logout = () => {
    signOut(auth);
  };
  export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };