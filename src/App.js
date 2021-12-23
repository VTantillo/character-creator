import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

import styles from './App.module.css';

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.backgroundCard} />
        <CharacterEditor />
        <Footer />
      </div>
    </>
  );
}

export default App;
