import styles from './App.module.css'
function App() {
  return (
    <>
      <nav style={{
        display: 'flex',
        backgroundColor: 'cyan',
        justifyContent: 'space-between',
        fontSize: '50px'
      }}>
        <a href="#" className={styles.link}>Test</a>
        
        <div className="">
          <a href="" className={styles.link}>11111111</a>
          <a href="" className={styles.link}>22222222</a>
          <a href="" className={styles.link}>33333333</a>
          <a href="" className={styles.link}>44444444</a>
         
        </div>

      </nav>
      <h1>Praktikum A2 Pagi</h1>
    </>
  )
}

export default App
