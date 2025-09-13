import React from 'react';

// Definimos el tipo que recibirá la prop

export default function InteractiveArea({ setActivePage }) {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h1 className="text-xl font-semibold">Portfolio Dashboard</h1>
      </div>
      <nav className="mt-6 space-y-2">
        <button className='flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100' onClick={() => setActivePage('home')}> <span class="mr-3">👤</span> Perfil Personal</button>
        <button className='flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100' onClick={() => setActivePage('colors')}> <span class="mr-3">🎨</span> Colores</button>
        <button className='flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100' onClick={() => setActivePage('tecnologies')}> <span class="mr-3">💻</span> Tecnologías</button>
        <button className='flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100' onClick={() => setActivePage('projects')}> <span class="mr-3">📁</span> Proyectos</button>
        <button className='flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100' onClick={() => setActivePage('gallery')}> <span class="mr-3">🖼️</span> Galería</button>
        <button className='flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100' onClick={() => setActivePage('contact')}> <span class="mr-3">📩</span> Contacto</button>
      </nav>
    </aside>
  );
}
