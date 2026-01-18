import React, { useState } from 'react';
import { AuthMode } from '../types';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { MailIcon, LockIcon, UserIcon, GoogleIcon, ArrowRightIcon } from './Icons';

export const AuthForm: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>(AuthMode.LOGIN);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Successfully ${mode === AuthMode.LOGIN ? 'logged in' : 'signed up'}!`);
    }, 1500);
  };

  const toggleMode = () => {
    setMode(prev => prev === AuthMode.LOGIN ? AuthMode.SIGNUP : AuthMode.LOGIN);
    setFormData({ name: '', email: '', password: '' });
  };

  const isLogin = mode === AuthMode.LOGIN;

  return (
    <div className="relative z-10 w-full max-w-5xl h-[600px] flex rounded-3xl overflow-hidden glass-panel shadow-2xl animate-fade-in">
      {/* Left Panel - Visual/Brand */}
      <div className={`
        relative w-full md:w-1/2 flex flex-col justify-between p-12 transition-all duration-700 ease-in-out
        bg-gradient-to-br from-indigo-900/40 to-purple-900/40
        ${isLogin ? 'order-1' : 'order-2'}
      `}>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-white/10 rounded-xl backdrop-blur-md flex items-center justify-center mb-8 border border-white/20">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
            {isLogin ? "Welcome back." : "Join the future."}
          </h1>
          <p className="text-indigo-200 text-lg leading-relaxed max-w-sm">
            {isLogin 
              ? "Your gateway to the decentralized universe. Enter your credentials to access the nexus." 
              : "Create an account to start your journey through the digital cosmos."}
          </p>
        </div>

        <div className="relative z-10 mt-auto">
           <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
             <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-xs font-medium text-indigo-200">System Status</span>
             </div>
             <p className="text-sm text-slate-300">All systems operational. Network latency: 12ms.</p>
           </div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none"></div>
      </div>

      {/* Right Panel - Form */}
      <div className={`
        w-full md:w-1/2 bg-slate-900/80 backdrop-blur-xl p-12 flex flex-col justify-center relative
        ${isLogin ? 'order-2' : 'order-1'}
      `}>
        <div className="max-w-md w-full mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {isLogin ? 'Sign In' : 'Create Account'}
            </h2>
            <button 
              onClick={toggleMode}
              className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              {isLogin ? 'Need an account?' : 'Already a member?'}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="animate-slide-up" style={{animationDelay: '0ms'}}>
                <Input
                  label="Full Name"
                  icon={<UserIcon className="w-5 h-5" />}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
            )}
            
            <div className="animate-slide-up" style={{animationDelay: '100ms'}}>
              <Input
                label="Email Address"
                type="email"
                icon={<MailIcon className="w-5 h-5" />}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="animate-slide-up" style={{animationDelay: '200ms'}}>
              <Input
                label="Password"
                type="password"
                icon={<LockIcon className="w-5 h-5" />}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
              {isLogin && (
                <div className="flex justify-end mt-2">
                  <a href="#" className="text-xs text-slate-400 hover:text-indigo-400 transition-colors">
                    Forgot password?
                  </a>
                </div>
              )}
            </div>

            <div className="pt-4 animate-slide-up" style={{animationDelay: '300ms'}}>
              <Button type="submit" isLoading={isLoading}>
                <span className="flex items-center justify-center gap-2">
                  {isLogin ? 'Sign In' : 'Create Account'}
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </form>

          <div className="relative my-8 animate-slide-up" style={{animationDelay: '400ms'}}>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-900 text-slate-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{animationDelay: '500ms'}}>
            <Button variant="outline" type="button" className="flex items-center justify-center gap-2">
              <GoogleIcon className="w-5 h-5" />
              <span>Google</span>
            </Button>
            <Button variant="outline" type="button" className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span>GitHub</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};