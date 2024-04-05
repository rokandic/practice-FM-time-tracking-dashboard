import { useState } from 'react'
import styles from './App.module.css'
import Attribution from './Attribution.jsx'
import User from './User.jsx'
import jsonData from './assets/data.json'

function App() {
  return (
    <>
    <div className={styles.page} >      
      <h1 className={styles.header}>User time tracking information</h1>

      <main>
        <User userData={jsonData} />
      </main>
      
      <footer>
        <Attribution />
      </footer>
    
    </div>
    </>
  )
}

export default App
