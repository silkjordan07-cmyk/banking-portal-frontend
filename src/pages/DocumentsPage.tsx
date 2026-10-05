import { ArrowLeft, FileText } from 'lucide-react';
import PortalShell from '@/components/PortalShell';
import { accounts, type View } from '@/lib/data';

interface DocumentsPageProps { onNavigate: (view: View) => void; }

const extraAccounts = [{ name: 'CD 1054', number: 'x1054' }, { name: 'IRA CD 0958', number: 'x0958' }];

export default function DocumentsPage({ onNavigate }: DocumentsPageProps) {
  return <PortalShell activeNav="Documents" onNavigate={onNavigate}>
    <main className="portal-landscape min-h-[calc(100vh-72px)] px-4 py-6 sm:px-6 lg:px-10"><div className="mx-auto flex max-w-[1050px] justify-center"><section className="w-full max-w-[370px] rounded-sm bg-white/90 shadow-[0_2px_10px_rgba(37,76,105,0.12)]"><div className="relative border-b border-navy-100 px-4 py-3 text-center text-[11px] font-bold text-navy-900"><button onClick={() => onNavigate('dashboard')} className="absolute left-4 top-3 text-navy-500 hover:text-blue-700" aria-label="Back"><ArrowLeft className="h-3.5 w-3.5" /></button>Documents</div><div className="border-b border-navy-100 py-4 text-center"><FileText className="mx-auto mb-1 h-4 w-4 text-navy-700" /><div className="text-[11px] font-semibold text-navy-800">Documents</div><div className="mt-1 text-[9px] text-navy-500">Go Paperless with your Statements!</div></div><div className="flex justify-between border-b border-navy-100 px-4 py-4 text-[10px]"><span className="font-semibold text-navy-700">Notify at</span><span className="font-medium text-navy-700">momkwest@yahoo.com</span></div><div className="px-4 py-4"><div className="mb-3 text-[9px] font-semibold text-navy-500">Accounts to enroll</div>{[...accounts.map((account) => ({ name: account.name, number: account.number })), ...extraAccounts].map((account) => <label key={account.name} className="flex items-center gap-2 border-b border-navy-100 py-2 text-[10px] font-medium text-navy-700"><input type="checkbox" checked readOnly className="h-3 w-3 accent-blue-700" /><span>{account.name} ({account.number})</span></label>)}<button className="mx-auto mt-5 block rounded-sm bg-[#0870ae] px-5 py-2 text-[10px] font-semibold text-white hover:bg-[#07598f]">Enroll</button></div></section></div></main>
  </PortalShell>;
}
