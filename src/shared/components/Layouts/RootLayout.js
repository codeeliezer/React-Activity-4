import Header from "../Partials/Header";
import Footer from "../Partials/Footer";



const RootLayout = ( { children }) => {
  return (

    <div className="root-main">
      

      <Header></Header>
        { children }
      
      <Footer></Footer>


    </div>

  )
}

export default RootLayout






