import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from './layouts/Home'
import {Home, Contact} from './page/Home'
import Services from './page/Services'
import Event from './page/events'
// import Contact from './pages/Contact'
// import DichVuKeToan from './pages/DichVuKeToan'  
// import BaoCaoTaiChinh from './pages/BaoCaoTaiChinh'
// import DichVuThayDoiTen from './pages/DichVuThayDoiTen'
const router = createBrowserRouter([
  {
    path: '/',
    element: (
     
        <Home/>
    
    )
  },{
    path: '/services',
    element: (
      <HomeLayout>
        <Services />
      </HomeLayout>
    )
  },
  {
    path: '/events',
    element: (
      <HomeLayout>
        <Event />
      </HomeLayout>
    )
  },{
   path: '/contact'
  }
 
])
export default router
