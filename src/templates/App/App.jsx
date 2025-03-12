import { useState } from 'react'
	import './App.css'
	import { Link } from 'react-router-dom'

	function App() {
	  const [count, setCount] = useState(0)

	  return (
	    <div className='container'>
	      <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
	        <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}>
	          <i className="bi bi-arrow-repeat"></i> count is {count} <i className="bi bi-trophy-fill"></i>
        	</button>
	        <Link to={'/home'} className='btn btn-warning' >Home</Link>
	      </div>
	    </div>
	  )
	}

	export default App