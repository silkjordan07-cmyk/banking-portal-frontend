import PortalShell from '@/components/PortalShell';
import type { View } from '@/lib/data';

interface PayLoanPageProps { onNavigate: (view: View) => void; }

export default function PayLoanPage({ onNavigate }: PayLoanPageProps) {
  return <PortalShell activeNav="Pay a Loan" onNavigate={onNavigate}>
    <main className="portal-landscape min-h-[calc(100vh-72px)] px-4 py-6 sm:px-6 lg:px-10"><div className="mx-auto max-w-[1050px]"><div className="rounded-t-sm bg-navy-950 px-4 py-3"><div className="flex items-center justify-center gap-16 text-[10px] font-semibold text-white/80"><span className="border-b-2 border-blue-400 pb-2 text-white">Activity</span><span>Pay a Loan</span></div></div><div className="flex items-center justify-center gap-1 py-3"><button className="rounded-l-sm bg-navy-900 px-4 py-1 text-[9px] font-semibold text-white">Scheduled</button><button className="rounded-r-sm border border-navy-300 bg-white px-4 py-1 text-[9px] font-semibold text-navy-700">History</button></div><div className="mx-auto max-w-[430px] rounded-sm bg-white/90 px-5 py-3 text-center text-[10px] font-semibold text-navy-600 shadow-[0_2px_10px_rgba(37,76,105,0.12)]">You currently have no scheduled transactions.</div></div></main>
  </PortalShell>;
}
