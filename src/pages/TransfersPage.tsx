import { ArrowLeftRight, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import PortalShell from '@/components/PortalShell';
import type { View } from '@/lib/data';

interface TransfersPageProps {
  onNavigate: (view: View) => void;
}

const days = [
  ['', '', '', '', '1', '2', '3'],
  ['4', '5', '6', '7', '8', '9', '10'],
  ['11', '12', '13', '14', '15', '16', '17'],
  ['18', '19', '20', '21', '22', '23', '24'],
  ['25', '26', '27', '28', '29', '30', '31'],
];

export default function TransfersPage({ onNavigate }: TransfersPageProps) {
  return (
    <PortalShell activeNav="Transfers" onNavigate={onNavigate}>
      <main className="portal-landscape min-h-[calc(100vh-72px)] px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1050px]">
          <h1 className="mb-7 px-1 text-[21px] font-bold text-navy-950">Transfers</h1>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.5fr_0.9fr]">
            <section className="min-h-[125px] rounded-sm bg-white/90 shadow-[0_2px_10px_rgba(37,76,105,0.12)]">
              <div className="border-b border-navy-100 px-4 py-3 text-sm font-bold text-navy-900">Transfers</div>
              <div className="flex flex-col items-center justify-center px-5 py-7 text-center">
                <ArrowLeftRight className="mb-2 h-4 w-4 text-navy-500" />
                <div className="text-[10px] font-semibold text-navy-600">No transfers scheduled.</div>
                <div className="mt-2 text-[10px] text-navy-500">Schedule a future or recurring transfer so you don't have to worry about it later.</div>
              </div>
            </section>

            <div className="space-y-3">
              <button className="flex w-full items-center gap-3 rounded-sm bg-white/90 px-4 py-4 text-left text-[11px] font-semibold text-navy-800 shadow-[0_2px_10px_rgba(37,76,105,0.12)] hover:bg-white"><ArrowLeftRight className="h-4 w-4 text-navy-600" />Make a transfer</button>
              <section className="rounded-sm bg-white/90 p-4 shadow-[0_2px_10px_rgba(37,76,105,0.12)]">
                <div className="mb-4 flex items-center justify-between"><span className="text-[11px] font-bold text-navy-800">October 2026</span><div className="flex gap-2 text-navy-500"><ChevronLeft className="h-3.5 w-3.5" /><ChevronRight className="h-3.5 w-3.5" /></div></div>
                <div className="grid grid-cols-7 text-center text-[9px] font-semibold text-navy-500">{['SUN', 'MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT'].map((day) => <span key={day} className="pb-2">{day}</span>)}{days.flatMap((week, index) => week.map((day, dayIndex) => <span key={`${index}-${dayIndex}`} className={`flex h-7 items-center justify-center text-[10px] ${day === '4' ? 'mx-auto w-6 rounded-full bg-[#0965a3] font-bold text-white' : 'text-navy-700'}`}>{day}</span>))}</div>
                <p className="mt-4 text-[8px] leading-relaxed text-navy-400">Only the next scheduled transaction is shown for your recurring transfers.</p>
              </section>
              <section className="flex items-start gap-3 rounded-sm bg-white/90 p-4 shadow-[0_2px_10px_rgba(37,76,105,0.12)]"><Zap className="mt-0.5 h-4 w-4 text-blue-600" /><div><div className="text-[11px] font-bold text-navy-800">Need to move money quickly?</div><p className="mt-1 text-[9px] leading-relaxed text-navy-500">Rapid transfers allow you to use an eligible external card to move money in minutes.</p></div></section>
            </div>
          </div>
        </div>
      </main>
    </PortalShell>
  );
}
