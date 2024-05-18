import './App.css';
import Layout from './Components/Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import PackagePage from './Pages/PackagePage/PackagePage';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact'
function App() {
  const route=createBrowserRouter([{
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'',
        element:<MainPage />
      },
      {
        path:'packages',
        element:<PackagePage />
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'contact-us',
        element:<Contact />
      }
  ]
}
])
  return (
    <RouterProvider router={route} />
  );
}

export default App;
