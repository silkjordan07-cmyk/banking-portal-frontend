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
  Menu,
} from 'lucide-react';
import CnbLogo from '@/components/CnbLogo';
import { user, type View } from '@/lib/data';
import { useState, type ReactNode } from 'react';

interface PortalShellProps {
  activeNav: string;
  onNavigate: (view: View) => void;
  children: ReactNode;
}

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', view: 'dashboard' as View },
  { icon: MessageSquare, label: 'Messages', view: 'dashboard' as View, badge: 2 },
  { icon: Wallet, label: 'Accounts', view: 'dashboard' as View },
  { icon: ArrowLeftRight, label: 'Transfers', view: 'transfers' as View },
  { icon: ScanLine, label: 'Remote deposits', view: 'dashboard' as View },
  { icon: Receipt, label: 'Bill pay', view: 'dashboard' as View },
  { icon: CreditCard, label: 'Pay a Loan', view: 'dashboard' as View },
  { icon: Plus, label: 'Apply for a Personal Loan', view: 'dashboard' as View },
  { icon: Home, label: 'Apply for a Mortgage', view: 'dashboard' as View },
  { icon: LifeBuoy, label: 'Support', view: 'dashboard' as View },
];

export default function PortalShell({ activeNav, onNavigate, children }: PortalShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-navy-50">
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
                  onClick={() => { onNavigate(item.view); setSidebarOpen(false); }}
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
            <div className="flex-1" />
            <div className="flex items-center gap-2">
              <button className="rounded-full p-2 text-navy-500 hover:bg-white"><Search className="h-4 w-4" /></button>
              <button className="relative rounded-full p-2 text-navy-500 hover:bg-white"><Bell className="h-4 w-4" /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-blue-600" /></button>
              <div className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-navy-800 text-[10px] font-bold text-white">{user.initials}</div>
            </div>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}
