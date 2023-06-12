import styles from './App.module.css'
import Button from './components/Button'
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
      <h1 className='text-5xl hover:font-bold hover:cursor-pointer active:underline'>Praktikum A2 Pagi</h1>
      <Button className="bg-cyan-400 text-white hover:bg-cyan-600">buton buton</Button>
      <Button className="bg-green-400 text-white hover:bg-green-600">buton buton buton</Button>
    </>
  )
}

export default App
