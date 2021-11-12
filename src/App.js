import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
  // useRouteMatch
} from "react-router-dom";
import Homepage from "./components/HomePage/HomePage"
import Recipes from './components/Recipes/Recipes';
// import Recipe from "./components/Recipes/Recipe"

function App() {
  return (
    <BrowserRouter>
    <Routes>0
    <Route path="/" element={<Homepage />} />
      <Route path="/recipes" element={<Recipes />} />
      {/* <Route path="/recipe:recipeId" element={<Recipe id="52780" />} /> */}
    </Routes>    
    </BrowserRouter>

  );
}

export default App;

// import './App.css';
// import routes from './routes'
// import Header from './components/Header/Header'
// import {useEffect} from 'react'
// import {useDispatch} from 'react-redux'
// import {setUser} from './redux/authReducer'
// import {setCart} from './redux/cartReducer'
// import axios from 'axios'
// import Footer from './components/Footer/Footer'

// function App() {
//   const dispatch = useDispatch()
//   useEffect(() => {
//     axios.get('/api/me').then(res => {
//       console.log(res.data.user)
//       dispatch(setUser(res.data.user))
//       dispatch(setCart(res.data.cart))
//     }).catch((err) => {
//       console.log(err.response)
//     })
//   }, [])
//   return (
//     <div className="App">
//       <Header/>
//       {routes}
//       <Footer/>
//     </div>
//   )
// }

// export default App;
