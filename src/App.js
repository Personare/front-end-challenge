import {useState} from 'react'
import Home from './pages/Home/Home'
import Introduction from './pages/Introduction/Introduction'

function App() {
  const [current, setCurrent] = useState('home')
  

  const changePage = (page)=>{
    setCurrent(page)
  }

  const renderPage = ()=>{
    switch(current){
      case 'home':
        return<Home changePage={changePage}/>
      case 'intro':
        return<Introduction changePage={changePage} />
    }
  }  

  return<div>{renderPage()}</div>
}

export default App;
