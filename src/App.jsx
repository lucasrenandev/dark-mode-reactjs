import { useRef } from 'react'
import './App.css'

export default function App() {
  const mainRef = useRef(null)
  const sectionRef = useRef(null)

  const darkMode = () => {
    sectionRef.current.classList.toggle("active")
    mainRef.current.classList.toggle("active")
  }

  return (
    <>
      <section ref={sectionRef}>
        <main ref={mainRef} onClick={darkMode}></main>
      </section>
    </>
  )
}