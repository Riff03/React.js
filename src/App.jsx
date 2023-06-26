import { Link } from 'react-router-dom'
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
        
        <div className={styles.link}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/Menu" className={styles.link}>Menu</Link>
          <Link to="/Order" className={styles.link}>Order</Link>
          <Link to="/AboutUs" className={styles.link}>About Us</Link>
         
        </div>

      </nav>
      <h1 className='text-5xl hover:font-bold hover:cursor-pointer active:underline'>Praktikum A2 Pagi</h1>
      <Button className="bg-cyan-400 text-white hover:bg-cyan-600">buton buton</Button>
      <Button className="bg-green-400 text-white hover:bg-green-600">buton buton buton</Button>
    </>
  )
}

export default App
