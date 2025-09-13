import { useState } from 'react';

export default function InteractiveArea() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600' onClick={() => setActivePage('home')}>Home</button>
        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600' onClick={() => setActivePage('profile')}>Profile</button>
        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600' onClick={() => setActivePage('settings')}>Settings</button>
      </div>
      <div>
        {activePage === 'home' && <div>Bienvenido a Home</div>}
        {activePage === 'profile' && <div>Tu Perfil</div>}
        {activePage === 'settings' && <div>Configuración</div>}
      </div>
    </div>
  );
}
