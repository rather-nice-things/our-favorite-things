import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {

  const menuItems = ['Home', 'Clothing', 'Skincare', 'Tips', 'About']

  return (
    <div className="container">
      <Navbar menuItems={menuItems}/>
        <main>{children}</main>
      <Footer menuItems={menuItems}/>
    </div>
  )
}