import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Menu from './menu';

function App() {
	return (
		<BrowserRouter>
			<Menu />
			{/* <Link to="/home">Inicio</Link>
			<Link to="/about">Acerca de</Link>
			<Link to="/contact">Contacto</Link> */}
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;