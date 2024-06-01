import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routing from './assets/Routing/Routing'
import Left_site_Layout from './Pages/Layout'
import Headaer from './assets/PagesHeader/Headaer'


function App() {


  return (
      <BrowserRouter>
          <div className="bg-gray-100">
            <div className='layout-flex-box justify-between'>
              <div className='py-[25px] mx-auto w-[230px] left-items'>
                  <Left_site_Layout />
              </div>
              <div className='w-[80%]'>
                <Headaer title={"Welcome to Admin"} />
                <Routing />
              </div>
            </div>
          </div>
      </BrowserRouter>
  )
}

export default App
