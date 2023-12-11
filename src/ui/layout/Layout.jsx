import { useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ModalPopUp from '../components/modal/ModalPopUp';
import './layout.css';

export default function Layout() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  return (
    <div id='layout'>
      <Header />
      <Outlet />
      <Footer />
      {isOpen && <ModalPopUp />}
    </div>
  );
}