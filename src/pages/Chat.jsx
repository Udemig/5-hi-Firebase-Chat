import {
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore';
import { db, auth } from '../firebase/firebaseConfig';

const Chat = ({ room }) => {
  // kolleksiyonun referansını alma
  const messagesCol = collection(db, 'messages');

  console.log(auth.currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    // belirttiğimiz kolleksiyona yeni eleman ekler
    addDoc(messagesCol, {
      text: e.target[0].value,
      user: auth.currentUser.displayName,
      room,
      createdAt: serverTimestamp(),
    });
  };

  return (
    <div className="chat">
      <header>
        <p>Furkan</p>
        <p>Haftasonu</p>
        <a href="/">Farklı Oda</a>
      </header>
      <main>mesajlar</main>
      <form onSubmit={handleSubmit}>
        <input placeholder="mesajınızı yazınız..." type="text" />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default Chat;
