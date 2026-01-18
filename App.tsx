import React from 'react';
import { Background } from './components/Background';
import { AuthForm } from './components/AuthForm';

function App() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden bg-slate-900">
      <Background />
      <AuthForm />
      
      {/* Footer / Credits */}
      <div className="fixed bottom-4 left-0 right-0 text-center text-xs text-slate-500 z-10">
        <p>&copy; 2024 Lumina Inc. Secure Authentication Gateway.</p>
      </div>
    </div>
  );
}

export default App;