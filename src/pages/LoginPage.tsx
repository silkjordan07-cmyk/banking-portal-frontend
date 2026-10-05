import { useState } from 'react';
import { Eye, EyeOff, Fingerprint, Hand, LockKeyhole } from 'lucide-react';
import CnbLogo from '@/components/CnbLogo';
import type { View } from '@/lib/data';

interface LoginPageProps {
  onNavigate: (view: View) => void;
}

export default function LoginPage({ onNavigate }: LoginPageProps) {
  const [username, setUsername] = useState('324usn');
  const [password, setPassword] = useState('Olivia1_2');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
  className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/s7.png')",
  }}
>
      <div className="flex-1 flex items-center justify-center px-4 py-10 sm:py-16">
        <div className="w-full max-w-[370px] animate-fade-in-up">
          <div className="bg-white/95 backdrop-blur-sm rounded-md shadow-2xl border border-white/70 overflow-hidden">
            <div className="flex justify-center px-6 pt-6">
              <CnbLogo size="lg" />
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                onNavigate('dashboard');
              }}
              className="p-6 sm:p-8"
            >
              <div className="grid grid-cols-[1fr_auto] gap-3 items-end">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="username" className="block text-xs font-medium text-navy-600 mb-1">
                      Username
                    </label>
                    <input
                      id="username"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      className="w-full rounded-sm border border-navy-200 bg-white px-3 py-2 text-sm text-navy-800 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-xs font-medium text-navy-600 mb-1">
                      Enter your password
                    </label>
                    <div className="relative">
                      <LockKeyhole className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-400" />
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="w-full rounded-sm border border-navy-200 bg-white py-2 pl-8 pr-8 text-sm text-navy-800 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-200"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((visible) => !visible)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-navy-400 hover:text-blue-700"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pb-1">
                  <button type="button" className="h-12 w-20 border border-blue-200 bg-blue-50/30 text-sm font-medium text-blue-700 hover:bg-blue-50">
                    Switch
                  </button>
                  <button type="button" className="flex h-14 w-20 flex-col items-center justify-center gap-1 text-xs font-medium text-blue-700 hover:bg-blue-50">
                    <Hand className="h-6 w-6" />
                    Forgot?
                  </button>
                </div>
              </div>

              <button type="submit" className="mt-7 w-full rounded-sm bg-blue-500 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-600">
                Sign in
              </button>

              <button type="button" className="mx-auto mt-8 flex items-center gap-2 text-sm font-medium text-navy-500 hover:text-blue-700">
                <Fingerprint className="h-4 w-4" />
                Sign in with a passkey
              </button>
            </form>
          </div>

          <p className="mt-5 text-center text-xs text-white/80">
            City National Bank · Secure online banking
          </p>
        </div>
      </div>
    </div>
  );
}
