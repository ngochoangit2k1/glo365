import Footer from '../../components/Footer'
import Header from '../../components/Header'


const HomeLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='h-1 bg-gray-200'></div>
      <div className='mx-auto px-3'>{children}</div>
      <Footer />
    </div>
  )
}

export default HomeLayout
