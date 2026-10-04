import { useState } from 'react';
import {
  LayoutDashboard,
  MessageSquare,
  Wallet,
  ArrowLeftRight,
  ScanLine,
  Receipt,
  CreditCard,
  Plus,
  Home,
  LifeBuoy,
  LogOut,
  Search,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  FileText,
  Users,
  Clock,
  MoreHorizontal,
  ChevronRight,
  Menu,
} from 'lucide-react';
import CnbLogo from '@/components/CnbLogo';
import { user, accounts, transactions, formatCurrency, type View } from '@/lib/data';

interface DashboardPageProps {
  onNavigate: (view: View) => void;
}

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: MessageSquare, label: 'Messages', badge: 2 },
  { icon: Wallet, label: 'Accounts' },
  { icon: ArrowLeftRight, label: 'Transfers' },
  { icon: ScanLine, label: 'Remote deposits' },
  { icon: Receipt, label: 'Bill pay' },
  { icon: CreditCard, label: 'Pay a Loan' },
  { icon: Plus, label: 'Apply for a Personal Loan' },
  { icon: Home, label: 'Apply for a Mortgage' },
  { icon: LifeBuoy, label: 'Support' },
];

const quickActions = [
  { icon: ArrowLeftRight, label: 'Transfer' },
  { icon: Users, label: 'Pay a person' },
  { icon: Receipt, label: 'Pay a bill' },
  { icon: MessageSquare, label: 'Message' },
  { icon: FileText, label: 'Documents' },
];

export default function DashboardPage({ onNavigate }: DashboardPageProps) {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#eaf2f8]">
      {sidebarOpen && <div className="fixed inset-0 z-30 bg-navy-950/30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <aside className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-[218px] bg-[#e7f0f7] border-r border-[#cddde9] flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-[94px] bg-white border-b border-[#cddde9] flex items-center justify-center">
          <CnbLogo size="md" />
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => { setActiveNav(item.label); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 rounded-sm px-3 py-2 text-[12px] font-medium transition ${activeNav === item.label ? 'bg-[#c8deef] text-navy-900' : 'text-navy-700 hover:bg-white/70'}`}
                >
                  <item.icon className="h-3.5 w-3.5 flex-shrink-0" />
                  <span className="flex-1 truncate text-left">{item.label}</span>
                  {item.badge && <span className="rounded-full bg-blue-600 px-1.5 text-[9px] font-bold text-white">{item.badge}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-[#cddde9] p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">{user.initials}</div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-xs font-semibold text-navy-900">{user.fullName}</div>
              <div className="text-[10px] text-navy-500">Online banking</div>
            </div>
            <button onClick={() => onNavigate('login')} className="text-navy-500 hover:text-blue-700" aria-label="Sign out"><LogOut className="h-3.5 w-3.5" /></button>
          </div>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="h-[72px] border-b border-white/50 bg-white/35 px-4 sm:px-6 lg:px-10">
          <div className="flex h-full items-center justify-between">
            <button onClick={() => setSidebarOpen(true)} className="rounded-md p-2 text-navy-700 hover:bg-white lg:hidden" aria-label="Open navigation"><Menu className="h-5 w-5" /></button>
            <h1 className="text-[22px] font-bold tracking-tight text-navy-950">Hi, Kathleen</h1>
            <div className="flex items-center gap-2">
              <button className="rounded-full p-2 text-navy-500 hover:bg-white"><Search className="h-4 w-4" /></button>
              <button className="relative rounded-full p-2 text-navy-500 hover:bg-white"><Bell className="h-4 w-4" /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-blue-600" /></button>
              <div className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-navy-800 text-[10px] font-bold text-white">{user.initials}</div>
            </div>
          </div>
        </header>

        <main className="portal-landscape min-h-[calc(100vh-72px)] px-4 py-6 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[1050px] space-y-5">
            <section>
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-[11px] font-semibold text-navy-700">Accounts</h2>
                <button className="text-[11px] font-semibold text-navy-700 hover:text-blue-700">View all</button>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {accounts.map((account) => (
                  <div key={account.id} className="min-h-[62px] rounded-md bg-[#0965a3] px-3 py-2.5 text-white shadow-[0_2px_4px_rgba(12,67,110,0.2)] transition hover:-translate-y-0.5 hover:bg-[#07598f]">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-[10px] font-semibold leading-tight">{account.name}</div>
                        <div className="text-[9px] text-blue-100">{account.number}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[12px] font-bold leading-tight">{formatCurrency(account.balance)}</div>
                        <div className="text-[9px] text-blue-100">Available</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex items-center justify-center gap-1 text-navy-500"><span className="h-1.5 w-1.5 rounded-full bg-navy-700" /><span className="h-1.5 w-1.5 rounded-full bg-navy-300" /><ChevronRight className="h-3 w-3" /></div>
            </section>

            <section className="flex gap-2 overflow-x-auto pb-1">
              {quickActions.map((action) => (
                <button key={action.label} className="flex min-w-[68px] flex-col items-center justify-center gap-1 rounded-md bg-[#0870ae] px-2 py-2.5 text-[9px] font-medium text-white shadow-sm transition hover:bg-[#07598f] hover:-translate-y-0.5">
                  <action.icon className="h-4 w-4" />
                  {action.label}
                </button>
              ))}
            </section>

            <section className="grid grid-cols-1 gap-4 xl:grid-cols-[1.5fr_1fr]">
              <div className="rounded-sm bg-white/85 shadow-[0_2px_10px_rgba(37,76,105,0.12)]">
                <div className="flex items-center justify-between border-b border-navy-100 px-4 py-3">
                  <h2 className="text-sm font-bold text-navy-900">Transactions</h2>
                  <div className="flex items-center gap-2 text-navy-500"><Search className="h-4 w-4" /><MoreHorizontal className="h-4 w-4" /></div>
                </div>
                <div className="divide-y divide-navy-50">
                  {transactions.map((transaction) => {
                    const positive = transaction.amount > 0;
                    return (
                      <div key={transaction.id} className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50/60">
                        <div className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full ${positive ? 'bg-success-50 text-success-600' : 'bg-blue-50 text-blue-600'}`}>
                          {positive ? <ArrowDownRight className="h-3.5 w-3.5" /> : <ArrowUpRight className="h-3.5 w-3.5" />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-[11px] font-semibold text-navy-900">{transaction.description}</div>
                          <div className="mt-0.5 flex items-center gap-1.5 text-[9px] text-navy-400">
                            <span>{transaction.date}</span><span>·</span><span>{transaction.account}</span>
                            {transaction.status === 'Pending' && <span className="inline-flex items-center gap-1 rounded bg-warning-50 px-1 text-[8px] font-semibold text-warning-600"><Clock className="h-2.5 w-2.5" />Pending</span>}
                          </div>
                        </div>
                        <div className={`text-[11px] font-bold ${positive ? 'text-success-600' : 'text-navy-900'}`}>{positive ? '+' : ''}{formatCurrency(transaction.amount)}</div>
                      </div>
                    );
                  })}
                </div>
                <button className="flex w-full items-center justify-center gap-1 border-t border-navy-50 py-3 text-[10px] font-semibold text-blue-700 hover:bg-blue-50">See more <ChevronRight className="h-3 w-3" /></button>
              </div>

              <div className="rounded-sm bg-white/85 shadow-[0_2px_10px_rgba(37,76,105,0.12)]">
                <div className="flex items-center justify-between border-b border-navy-100 px-4 py-3"><h2 className="text-sm font-bold text-navy-900">Messages</h2><MoreHorizontal className="h-4 w-4 text-navy-500" /></div>
                <div className="p-5 text-center">
                  <div className="mb-3 text-[11px] font-medium text-navy-500">City National Bank</div>
                  <div className="mb-3 flex justify-center gap-2 text-lg font-serif italic font-bold tracking-[-0.16em] text-blue-900"><span>CNB</span><span>CNB</span><span>CNB</span></div>
                  <p className="mx-auto max-w-[230px] text-[10px] leading-relaxed text-navy-500">One of our representatives can help you with your account, answer questions, and find the right banking solution.</p>
                  <button className="mt-5 rounded-sm bg-blue-500 px-5 py-2 text-[10px] font-semibold text-white hover:bg-blue-600">Start a conversation</button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
