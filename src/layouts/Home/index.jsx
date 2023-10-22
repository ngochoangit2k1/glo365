import Footerx from '../../components/Footer'
import Header from '../../components/Header'


const HomeLayout = ({ children }) => {
  return (
    <div className="container h-auto">
      <Header />
      <div className='h-1 '></div>
      <div className='mx-auto px-3'>{children}</div>
      <Footerx />
    </div>
  )
}

export default HomeLayout
