import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from '../components/NavBar/App'
import Hero from '../components/heroSection/hero'
import Service from '../components/Service/service'
import Footer from '../components/footer/Footer'
import Contact from '../components/contactUs /contact'
import Blog from '../components/blogs/blog'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
 
    <Hero />
    <Service />
    <Contact />
    <Blog />
    <Footer />
  </React.StrictMode>,
)
