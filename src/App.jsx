import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routing from './assets/Routing/Routing'
import Left_site_Layout from './Pages/Layout'
import Headaer from './assets/PagesHeader/Headaer'
import { useState } from 'react'


function App() {
  const [sidebarOpen, setSidebarHide] = useState(true);

  const sidebarCloseHandler =()=>{
     setSidebarHide(!sidebarOpen)
  }

  return (
      <BrowserRouter>
          <div className="bg-gray-100">
            <div className='layout-flex-box justify-between'>
             {
              sidebarOpen ?  <div className='py-[25px] mx-auto fixed left-0 top-0 md:static md:w-[25%] left-items'>
              <Left_site_Layout />
          </div> : null
             }
              <div className={'right-sidebar'} >
                <Headaer func={sidebarCloseHandler} title={"Welcome to Admin"} />
                <Routing />
              </div>
            </div>
          </div>
      </BrowserRouter>
  )
}

export default App
