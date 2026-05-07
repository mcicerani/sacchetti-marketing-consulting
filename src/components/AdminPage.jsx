import React, { useState, useEffect } from 'react';
import { Studio } from 'sanity';
import studioConfig from '../sanity/studioConfig';

const PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'sacchetti2024';
const STORAGE_KEY = 'admin_auth';

const AdminPage = () => {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') setAuthed(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      setAuthed(true);
    } else {
      setError(true);
      setInput('');
    }
  };

  if (authed) {
    return (
      <div style={{ height: '100dvh' }}>
        <Studio config={studioConfig} />
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-ghost flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm flex flex-col items-center gap-6">
        <img src="/logo-min.png" alt="Sacchetti Marketing" className="h-16 rounded-full bg-logo p-2" />
        <h1 className="font-marcellus text-2xl text-gray-900">Area Admin</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <label className="font-work text-sm text-gray-600" htmlFor="admin-password">
            Password
          </label>
          <input
            id="admin-password"
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-work focus:outline-none focus:ring-2 focus:ring-logo/40"
            autoFocus
          />
          {error && (
            <p className="text-sm text-logo font-work" role="alert">Password errata.</p>
          )}
          <button
            type="submit"
            className="bg-logo hover:bg-logo-dark text-white font-work text-sm rounded-full py-2.5 transition-colors duration-200"
          >
            Accedi
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
