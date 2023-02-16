import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './context/AuthContext';
import Navber from './components/Navber';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navber />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
