import { ChevronLeft, ChevronRight, CreditCard, MoreHorizontal, UserRound } from 'lucide-react';
import PortalShell from '@/components/PortalShell';
import type { View } from '@/lib/data';

interface BillPayPageProps { onNavigate: (view: View) => void; }

const weeks = [['', '', '', '', '1', '2', '3'], ['4', '5', '6', '7', '8', '9', '10'], ['11', '12', '13', '14', '15', '16', '17'], ['18', '19', '20', '21', '22', '23', '24'], ['25', '26', '27', '28', '29', '30', '31']];

export default function BillPayPage({ onNavigate }: BillPayPageProps) {
  return <PortalShell activeNav="Bill pay" onNavigate={onNavigate}>
    <main className="portal-landscape min-h-[calc(100vh-72px)] px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1050px]"><h1 className="mb-7 px-1 text-[21px] font-bold text-navy-950">Bill pay</h1>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.5fr_0.9fr]">
          <section className="min-h-[108px] rounded-sm bg-white/90 shadow-[0_2px_10px_rgba(37,76,105,0.12)]"><div className="flex items-center justify-between border-b border-navy-100 px-4 py-3"><span className="text-[11px] font-bold text-navy-900">Payments</span><button className="text-[9px] font-semibold text-blue-700 hover:text-blue-900">+ New payee</button></div><div className="flex items-center justify-center py-7 text-[10px] font-semibold text-navy-500">We couldn't find any payments or payees.</div></section>
          <div className="space-y-3"><div className="flex rounded-sm bg-white/90 shadow-[0_2px_10px_rgba(37,76,105,0.12)]"><button className="flex flex-1 flex-col items-center gap-1 border-r border-navy-100 py-3 text-[9px] font-semibold text-navy-800"><CreditCard className="h-4 w-4" />Pay a bill</button><button className="flex flex-1 flex-col items-center gap-1 border-r border-navy-100 py-3 text-[9px] font-semibold text-navy-800"><UserRound className="h-4 w-4" />Pay a person</button><button className="flex flex-1 flex-col items-center gap-1 py-3 text-[9px] font-semibold text-navy-800"><MoreHorizontal className="h-4 w-4" />Manage payments</button></div>
            <Calendar /></div>
        </div>
      </div>
    </main>
  </PortalShell>;
}

function Calendar() { return <section className="rounded-sm bg-white/90 p-4 shadow-[0_2px_10px_rgba(37,76,105,0.12)]"><div className="mb-4 flex items-center justify-between"><span className="text-[11px] font-bold text-navy-800">October 2026</span><div className="flex gap-2 text-navy-500"><ChevronLeft className="h-3.5 w-3.5" /><ChevronRight className="h-3.5 w-3.5" /></div></div><div className="grid grid-cols-7 text-center text-[9px] font-semibold text-navy-500">{['SUN', 'MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT'].map((day) => <span key={day} className="pb-2">{day}</span>)}{weeks.flatMap((week, weekIndex) => week.map((day, dayIndex) => <span key={`${weekIndex}-${dayIndex}`} className={`flex h-7 items-center justify-center text-[10px] ${day === '5' ? 'mx-auto w-6 rounded-full bg-[#0965a3] font-bold text-white' : 'text-navy-700'}`}>{day}</span>))}</div></section>; }
