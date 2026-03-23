import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Root = () => {
  return (
    <div>
      <section>
        <Navbar></Navbar>
      </section>

      <section>
        <Outlet></Outlet>
      </section>

      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Root;
