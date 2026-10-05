import { ArrowDownLeft, ChevronRight, Plus, Wallet } from 'lucide-react';
import PortalShell from '@/components/PortalShell';
import { accounts, formatCurrency, type View } from '@/lib/data';

interface AccountsPageProps {
  onNavigate: (view: View) => void;
  onOpenAccount: (accountId: string) => void;
}

const additionalAccounts = [
  { name: 'CD 1054', number: 'x1054', balance: 26702.96 },
  { name: 'IRA CD 0958', number: 'x0958', balance: 16302.96 },
];

export default function AccountsPage({ onNavigate, onOpenAccount }: AccountsPageProps) {
  const allAccounts = [...accounts, ...additionalAccounts];
  const cashTotal = accounts.reduce((total, account) => total + account.balance, 0);
  const investmentTotal = additionalAccounts.reduce((total, account) => total + account.balance, 0);

  return (
    <PortalShell activeNav="Accounts" onNavigate={onNavigate}>
      <main className="portal-landscape min-h-[calc(100vh-72px)] px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1050px]">
          <h1 className="mb-7 px-1 text-[21px] font-bold text-navy-950">Accounts</h1>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.35fr_0.8fr]">
            <section className="rounded-sm bg-white/90 shadow-[0_2px_10px_rgba(37,76,105,0.12)]">
              <div className="border-b border-navy-100 px-4 py-3 text-sm font-bold text-navy-900">Accounts</div>
              <div className="divide-y divide-navy-100">
                {allAccounts.map((account) => (
                  <button key={account.name} onClick={() => { if ('id' in account && typeof account.id === 'string') onOpenAccount(account.id); }} className="flex w-full items-center justify-between px-4 py-3 text-left transition hover:bg-blue-50">
                    <div><div className="text-[11px] font-semibold text-navy-900">{account.name}</div><div className="text-[9px] text-navy-500">{account.number}</div></div>
                    <div className="text-right"><div className="text-[11px] font-bold text-navy-800">{formatCurrency(account.balance)}</div><div className="text-[9px] text-navy-500">{'id' in account ? 'Available' : 'Balance'}</div></div>
                  </button>
                ))}
              </div>
              <button className="flex w-full items-center justify-center gap-1 border-t border-navy-100 py-4 text-[10px] font-semibold text-blue-700 hover:bg-blue-50">Organize accounts <ChevronRight className="h-3 w-3" /></button>
            </section>

            <div className="space-y-3">
              <section className="rounded-sm bg-white/90 shadow-[0_2px_10px_rgba(37,76,105,0.12)]">
                <div className="border-b border-navy-100 px-4 py-3 text-sm font-bold text-navy-900">Totals</div>
                <div className="grid grid-cols-2 gap-4 p-5">
                  <div><div className="mb-2 flex items-center gap-2 text-[10px] font-bold text-navy-700"><Wallet className="h-3.5 w-3.5" />CASH</div><div className="text-[15px] font-bold text-navy-900">{formatCurrency(cashTotal)}</div><div className="text-[9px] text-navy-500">6 accounts</div></div>
                  <div><div className="mb-2 flex items-center gap-2 text-[10px] font-bold text-navy-700"><ArrowDownLeft className="h-3.5 w-3.5" />INVESTMENTS</div><div className="text-[15px] font-bold text-navy-900">{formatCurrency(investmentTotal)}</div><div className="text-[9px] text-navy-500">2 accounts</div></div>
                </div>
              </section>
              <button className="flex w-full items-center gap-3 rounded-sm bg-white/90 px-4 py-4 text-left shadow-[0_2px_10px_rgba(37,76,105,0.12)] hover:bg-white"><div className="flex h-7 w-7 items-center justify-center rounded bg-blue-100 text-blue-700"><Plus className="h-4 w-4" /></div><div><div className="text-[11px] font-bold text-navy-800">Open An Account</div><div className="text-[9px] text-navy-500">Let's Get Started!</div></div><ChevronRight className="ml-auto h-4 w-4 text-navy-400" /></button>
            </div>
          </div>
        </div>
      </main>
    </PortalShell>
  );
}
