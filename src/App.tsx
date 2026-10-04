import { useState } from 'react';
import LoginPage from '@/pages/LoginPage';
import DashboardPage from '@/pages/DashboardPage';
import type { View } from '@/lib/data';

function App() {
  const [view, setView] = useState<View>('login');

  const handleNavigate = (next: View) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setView(next);
  };

  if (view === 'dashboard') {
    return <DashboardPage onNavigate={handleNavigate} />;
  }

  return <LoginPage onNavigate={handleNavigate} />;
}

export default App;
