import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Pages/Routes/Route';

function App() {
  return (
    <div className=" lg:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md  mx-auto">
      <RouterProvider router={router} >
      </RouterProvider>
    </div>
  );
}

export default App;
