import React, { useState } from 'react';
import { InputProps } from '../../types';
import { EyeIcon, EyeOffIcon } from '../Icons';

export const Input: React.FC<InputProps> = ({ 
  label, 
  icon, 
  type = 'text', 
  error, 
  className = '', 
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="group relative w-full mb-6">
      <div className="relative">
        {icon && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-400 transition-colors duration-300">
            {icon}
          </div>
        )}
        
        <input
          type={inputType}
          className={`
            peer block w-full border-b-2 border-slate-700 bg-transparent py-2.5 
            ${icon ? 'pl-8' : ''} pr-8 
            text-sm text-slate-100 placeholder-transparent focus:border-indigo-500 focus:outline-none 
            ${error ? 'border-red-500' : ''}
            transition-all duration-300
            ${className}
          `}
          placeholder={label}
          {...props}
        />
        
        <label className={`
          absolute left-0 -top-3.5 text-xs text-slate-400 transition-all 
          peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 
          ${icon ? 'peer-placeholder-shown:top-2 peer-placeholder-shown:left-8' : 'peer-placeholder-shown:top-2'}
          peer-focus:-top-3.5 peer-focus:left-0 peer-focus:text-xs peer-focus:text-indigo-400
          pointer-events-none
        `}>
          {label}
        </label>

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 focus:outline-none transition-colors"
          >
            {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
          </button>
        )}
      </div>
      
      {error && (
        <span className="absolute -bottom-5 left-0 text-xs text-red-400 animate-slide-up">
          {error}
        </span>
      )}
    </div>
  );
};