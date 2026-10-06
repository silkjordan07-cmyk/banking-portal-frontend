import type { ReactNode } from 'react';
import { Camera, FileText, MessageSquare, Tag, X } from 'lucide-react';
import { formatCurrency, type Transaction } from '@/lib/data';

interface TransactionDetailsModalProps { transaction: Transaction; onClose: () => void; }

export default function TransactionDetailsModal({ transaction, onClose }: TransactionDetailsModalProps) {
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/70 px-4 py-6" role="dialog" aria-modal="true" aria-label="Transaction details">
    <section className="max-h-[90vh] w-full max-w-[445px] overflow-y-auto rounded-md bg-white shadow-2xl">
      <div className="flex items-start justify-between border-b border-navy-100 px-5 py-4"><div className="flex min-w-0 items-start gap-3"><div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-navy-300 text-navy-500"><Tag className="h-3 w-3" /></div><div><h2 className="text-[12px] font-bold text-navy-900">{transaction.description}</h2><div className="text-[10px] text-navy-600">{transaction.category ?? 'General'}</div></div></div><div className="flex items-start gap-4"><div className="text-right"><div className="text-[13px] font-bold text-navy-900">{formatCurrency(transaction.amount)}</div><div className="text-[10px] text-navy-700">{transaction.status === 'Pending' ? `Pending · ${transaction.detailDate}` : transaction.detailDate}</div></div><button onClick={onClose} className="text-navy-500 hover:text-navy-900" aria-label="Close transaction details"><X className="h-4 w-4" /></button></div></div>
      {transaction.status !== 'Pending' && <div className="space-y-1 border-b border-navy-100 p-4"><DetailAction icon={<FileText />} label="Edit details" highlighted /><DetailAction icon={<Tag />} label="Add tags" /><DetailAction icon={<FileText />} label="Add notes" /><div className="border-b border-navy-100 pb-3"><DetailAction icon={<Camera />} label="Add images" /><div className="ml-2 mt-1 flex h-7 w-7 items-center justify-center rounded border border-dashed border-navy-200 text-lg text-blue-700">+</div></div><DetailAction icon={<MessageSquare />} label="Attach to a conversation" /></div>}
      {transaction.similarTransactions && <div className="border-b border-navy-100 px-5 py-4"><div className="mb-2 text-[11px] font-semibold text-navy-700">Similar transactions</div>{['September 3', 'August 3', 'July 3', 'June 3'].map((date, index) => <div key={date} className="flex justify-between py-1 text-[10px] text-navy-500"><span>{date}</span><span>{transaction.similarTransactions?.[index]}</span></div>)}<button className="float-right mt-2 text-[10px] font-semibold text-blue-700">View all</button><div className="clear-both" /></div>}
      <div className="px-5 py-4 text-[9px] leading-4 text-navy-400"><div>City National Bank - {transaction.account}</div><div>{transaction.description}</div><div>Transaction category information is automatically generated.</div></div>
    </section>
  </div>;
}

function DetailAction({ icon, label, highlighted = false }: { icon: ReactNode; label: string; highlighted?: boolean }) { return <div className={`flex items-center gap-3 py-2 text-[10px] font-medium ${highlighted ? 'text-blue-700' : 'text-navy-700'}`}><span className="text-navy-500 [&>svg]:h-3.5 [&>svg]:w-3.5">{icon}</span>{label}</div>; }
