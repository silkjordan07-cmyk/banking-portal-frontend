```tsx
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
              Welcome to the secure messaging area. This is a demonstration
              portal for testing the user interface and navigation.
            </p>
          </section>
        </div>
      </main>
    </PortalShell>
  );
}
```
