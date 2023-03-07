import RootLayout from './shared/components/Layouts/RootLayout';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import CarPage from './Pages/Car';
import ContactUsPage from './Pages/ContactUs';




const App = () => {
  return (

<RootLayout>
    <Routes>
      <Route path ="/home" element={<HomePage />} />
      <Route path ="/car" element={<CarPage />} />
      <Route path ="/contactUs" element={<ContactUsPage />} />
      
      
   </Routes>
   

</RootLayout>

  );
}
export default App;
