import { useState } from 'react';
import LoginPage from '@/pages/LoginPage';
import DashboardPage from '@/pages/DashboardPage';
import AccountPage from '@/pages/AccountPage';
import AccountsPage from '@/pages/AccountsPage';
import TransfersPage from '@/pages/TransfersPage';
import BillPayPage from '@/pages/BillPayPage';
import DocumentsPage from '@/pages/DocumentsPage';
import PayLoanPage from '@/pages/PayLoanPage';
import MessagesPage from '@/pages/MessagesPage';
import type { View } from '@/lib/data';

function App() {
  const [view, setView] = useState<View>('login');
  const [selectedAccountId, setSelectedAccountId] = useState('kew');

  const handleNavigate = (next: View) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setView(next);
  };

  if (view === 'dashboard') {
    return <DashboardPage onNavigate={handleNavigate} onOpenAccount={(accountId) => { setSelectedAccountId(accountId); handleNavigate('account'); }} />;
  }

  if (view === 'accounts') {
    return <AccountsPage onNavigate={handleNavigate} onOpenAccount={(accountId) => { setSelectedAccountId(accountId); handleNavigate('account'); }} />;
  }

  if (view === 'account') {
    return <AccountPage accountId={selectedAccountId} onNavigate={handleNavigate} />;
  }

  if (view === 'transfers') {
    return <TransfersPage onNavigate={handleNavigate} />;
  }

  if (view === 'bill-pay') {
    return <BillPayPage onNavigate={handleNavigate} />;
  }

  if (view === 'documents') {
    return <DocumentsPage onNavigate={handleNavigate} />;
  }

  if (view === 'pay-loan') {
    return <PayLoanPage onNavigate={handleNavigate} />;
  }

  if (view === 'messages') {
    return <MessagesPage onNavigate={handleNavigate} />;
  }

  return <LoginPage onNavigate={handleNavigate} />;
}

export default App;
