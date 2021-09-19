import Home from './pages/Home'
import Cheap from './pages/Cheap'
import {useState} from 'react'
import {createGlobalStyle} from 'styled-components'
import GlobalState from './global/GlobalState'


const GlobalStyle = createGlobalStyle`
	.btn{
		text-align: center;
	}
	button{
		width: 10vw;
		padding: 5px;
		font-size: 1rem;
		border-radius: 10px;
		background-image: linear-gradient(red, whitesmoke);
		cursor: pointer;
	}

	.fade{
		animation: appear 2s;
	}
	@keyframes appear{
		from{
			opacity: 0;
		}
		to{
			opacity: 1;
		}
	}

	.cards{
		animation: shuffle 2s;
	}
	@keyframes shuffle{
		from{
			transform: scale(0);
		}
		to{
			transform: scale(1)
		}
	}
` 

function App() {
	const [currentPage, setCurrentPage] = useState('home')


	const renderPage = ()=>{
		switch(currentPage){
			case 'home':
				return <Home changePage={changePage}/>
			case 'cheap':
				return <Cheap />
		}
	}

	const changePage = (page)=>{
		setCurrentPage(page)
	}

//===================Renderização=============
  return (
    <GlobalState>
	    <GlobalStyle/>
	      {renderPage()}  
    </GlobalState>
  )
}

export default App;
