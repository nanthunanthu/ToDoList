import image from './Images/reactjs-icon.png';
import images from './Images/reactjs-icon 2.png';
import './App.css'
function Header(){
  return(
    <div className='head'>
    <div className="logo" >
    <img src={image}></img>
      <h3>React Facts</h3>                                                                                                       
      </div>
      <div className='menu'>
<h3>React Course-project one</h3>
      </div>
    </div>
  )
}

function Main(){
  return(
    <div className="main">
    <h1>Fun Facts About React</h1>
    <div className="logo1">
        <ul className='list'>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    <img src={images}></img>
    </div>
    
    </div>
  )
}


function App() {
 

  return (
    <>

   <Header />
   <Main />
    </>
  )
}

export default App
