import { useState } from 'react';
import TransactionDetailsModal from '@/components/TransactionDetailsModal';
import { ArrowDownRight, ArrowLeftRight, ArrowUpRight, Download, FileText, Printer, Search, Settings, ShieldAlert, StopCircle, MessageSquare } from 'lucide-react';
import PortalShell from '@/components/PortalShell';
import { accountDetails, accountTransactions, accounts, formatCurrency, type View } from '@/lib/data';

interface AccountPageProps {
  accountId: string;
  onNavigate: (view: View) => void;
}

const actions = [
  { label: 'Transfer', icon: ArrowLeftRight },
  { label: 'Documents', icon: FileText },
  { label: 'Stop payments', icon: StopCircle },
  { label: 'Alert preferences', icon: ShieldAlert },
  { label: 'Settings', icon: Settings },
  { label: 'Attach to a conversation', icon: MessageSquare },
];

export default function AccountPage({ accountId, onNavigate }: AccountPageProps) {
  const account = accounts.find((item) => item.id === accountId) ?? accounts[0];
  const detail = accountDetails.find((item) => item.accountId === account.id);
  const rows = accountTransactions[account.id] ?? (account.id === 'now' ? [] : []);
  const [selectedTransaction, setSelectedTransaction] = useState<typeof rows[number] | null>(null);

  return (
    <PortalShell activeNav="Accounts" onNavigate={onNavigate}>
      <main className="portal-landscape min-h-[calc(100vh-72px)] px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1050px]">
          <div className="mb-4 flex items-end justify-between px-1">
            <div><h1 className="text-[21px] font-bold leading-tight text-navy-950">{account.name}</h1><div className="text-[11px] font-medium text-navy-700">{account.number}</div></div>
            <div className="text-right"><div className="text-[20px] font-bold text-navy-950">{formatCurrency(account.balance)}</div><div className="flex items-center justify-end gap-1 text-[10px] text-navy-700">Available <span className="rounded-full border border-navy-400 px-0.5 text-[8px]">i</span></div></div>
          </div>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-sm bg-white/90 shadow-[0_2px_10px_rgba(37,76,105,0.12)]">
              <div className="flex items-center justify-between border-b border-navy-100 px-4 py-3"><h2 className="text-sm font-bold text-navy-900">Transactions</h2><div className="flex items-center gap-3 text-navy-500"><Download className="h-4 w-4" /><Printer className="h-4 w-4" /><Search className="h-4 w-4" /></div></div>
              <div className="divide-y divide-navy-50">
                {rows.length === 0 ? <div className="px-5 py-10 text-center text-xs text-navy-500">No transactions scheduled.</div> : rows.map((row) => { const positive = row.amount > 0; return <button key={row.id} onClick={() => setSelectedTransaction(row)} className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-blue-50/60"><div className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full ${positive ? 'bg-success-50 text-success-600' : 'bg-blue-50 text-blue-600'}`}>{positive ? <ArrowDownRight className="h-3.5 w-3.5" /> : <ArrowUpRight className="h-3.5 w-3.5" />}</div><div className="min-w-0 flex-1"><div className="truncate text-[10px] font-semibold text-navy-900">{row.description}</div><div className="text-[9px] text-navy-400">{row.date}</div></div><div className="text-right"><div className={`text-[10px] font-bold ${positive ? 'text-success-600' : 'text-navy-900'}`}>{positive ? '+' : ''}{formatCurrency(row.amount)}</div><div className="text-[9px] text-navy-400">{formatCurrency(account.balance)}</div></div></button>; })}
              </div>
            </section>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {actions.map((action) => <button key={action.label} onClick={() => { if (action.label === 'Documents') onNavigate('documents'); if (action.label === 'Transfer') onNavigate('transfers'); }} className="flex h-[58px] min-w-[62px] flex-1 flex-col items-center justify-center gap-1 rounded-md bg-[#0965a3] px-1 text-[8px] font-semibold text-white shadow-sm hover:bg-[#07598f]"><action.icon className="h-4 w-4" />{action.label}</button>)}
              </div>
              <section className="rounded-sm bg-white/90 shadow-[0_2px_10px_rgba(37,76,105,0.12)]">
                <div className="border-b border-navy-100 px-4 py-3"><h2 className="text-sm font-bold text-navy-900">Details</h2></div>
                {detail ? <div className="text-[10px] text-navy-600">
                  <DetailGroup title="Account numbers" rows={[["Account number", detail.accountNumber], ["Routing number", detail.routingNumber]]} />
                  <DetailGroup title="Account information" rows={[["Owner", detail.owner], ...(detail.otherNames ? [["Other names on account", detail.otherNames] as [string, string]] : []), ["Date opened", detail.dateOpened]]} />
                  <DetailGroup title="Activity" rows={[["Last statement balance", detail.lastStatementBalance], ["Date of last statement", detail.dateOfLastStatement], ["Date of last deposit", detail.dateOfLastDeposit]]} />
                  <DetailGroup title="Interest" rows={[["Rate", detail.rate], ["Accrued", detail.accrued], ["Paid YTD", detail.paidYtd], ["Paid last year", detail.paidLastYear]]} />
                </div> : <div className="px-4 py-8 text-xs text-navy-500">Account details are not available for this account.</div>}
              </section>
            </div>
          </div>
        </div>
      </main>
      {selectedTransaction && <TransactionDetailsModal transaction={selectedTransaction} onClose={() => setSelectedTransaction(null)} />}
    </PortalShell>
  );
}

interface DetailGroupProps { title: string; rows: [string, string][]; }
function DetailGroup({ title, rows }: DetailGroupProps) {
  return <div className="border-b border-navy-100 px-4 py-3 last:border-b-0"><div className="mb-2 font-bold text-navy-800">{title}</div><div className="space-y-2">{rows.map(([label, value]) => <div key={label} className="flex justify-between gap-4"><span className="text-navy-400">{label}</span><span className="text-right font-medium text-navy-700">{value}</span></div>)}</div></div>;
}
