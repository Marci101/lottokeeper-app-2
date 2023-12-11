import { Routes, Route } from 'react-router-dom';
import Layout from './ui/layout/Layout';
import HomePage from './ui/pages/home/HomePage';
import UserPage from './ui/pages/user/UserPage';
import UserAccountPage from './ui/pages/account/UserAccountPage';
import UserNumbersPage from './ui/pages/numbers/UserNumbersPage';
import AdminPage from './ui/pages/admin/AdminPage';
import LotteryGame from './ui/pages/lottery-draw/LotteryGame';
import NotFoundPage from './ui/pages/notFound/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='user'>
          <Route index element={<UserPage />}/>
          <Route path='account' element={<UserAccountPage />}/>
          <Route path='numbers' element={<UserNumbersPage />}/>
        </Route>
        <Route path='admin'>
          <Route index element={<AdminPage />} />
          <Route path='lottery-draw' element={<LotteryGame />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
