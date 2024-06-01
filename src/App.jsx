import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routing from './assets/Routing/Routing'
import Left_site_Layout from './Pages/Layout'


function App() {


  return (
      <BrowserRouter>
          <div className="bg-gray-200">
            <div className='layout-flex-box items-center justify-between'>
              <span className='min-w-[250px] bg-gray-200'>
                  <Left_site_Layout />
              </span>
              <span className='min-w-[80%] bg-slate-500'>
                <Routing />
              </span>
            </div>
          </div>
      </BrowserRouter>
  )
}

export default App
