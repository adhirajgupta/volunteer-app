import logo from './logo.svg';
import './App.css';
import LandingPage from './screens/LandingPage';
import RouterNavigation from './navigation/main';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  { path: "*", Component: RouterNavigation },
]);

function App() {
  return (
    <RouterProvider router={router}/>
    // <RouterNavigation/>
  );
}

export default App;
