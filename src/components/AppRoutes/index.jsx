import { Route, Routes } from "react-router-dom"
	import Home from "../../templates/Home";
	import App from "../../templates/App/App";

	const AppRoutes = () => {
  	return (
	    <div>
	        <Routes>
	          <Route path='/' element={<App />} />
	          <Route path='/home' element={<Home />} />
        	</Routes>
	    </div>
	  )
	}

	export default AppRoutes