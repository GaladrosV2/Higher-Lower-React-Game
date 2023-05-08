import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBYfMuLU-llto24XgbQgHaDZUhsOAy3590",
  authDomain: "reactgame-95ff0.firebaseapp.com",
  projectId: "reactgame-95ff0",
  storageBucket: "reactgame-95ff0.appspot.com",
  messagingSenderId: "135473550834",
  appId: "1:135473550834:web:e4b3a64590c743af33476b",
};

firebase.initializeApp(config);

const db = firebase.firestore();

export const getScores = async () => {
  const scores = [];
  const snapshot = await db.collection("scores").orderBy("score", "desc").get();
  snapshot.forEach((doc) => {
    scores.push({
      id: doc.id,
      name: doc.data().name,
      level: doc.data().level,
      score: doc.data().score,
    });
  });
  return scores;
};

export const addScore = async (name, level, score) => {
  const dbRef = await db.collection("scores").add({ name, level, score });
  return { id: dbRef.id, name, level, score };
};

export default firebase;
