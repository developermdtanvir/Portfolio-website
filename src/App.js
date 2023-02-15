import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Route/Route';

function App() {
  return (
    <div className="bg-[#153462] m-0 ">
      <div className='container mx-auto'>
        <RouterProvider router={router} >
        </RouterProvider>
      </div>
    </div>
  );
}

export default App;
