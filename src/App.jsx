import React, { useEffect, useState } from 'react'

const App = () => {
  const [bgColor, setBgColor] = useState(() => {
    return localStorage.getItem('selectedBgColor') || 'bg-gray-900';
  });

  useEffect(() => {
    localStorage.setItem('selectedBgColor', bgColor);
  }, [bgColor]);


  const colors = [
    { name: 'Red', class: 'bg-red-600', text: 'text-white' },
    { name: 'Blue', class: 'bg-blue-500', text: 'text-white' },
    { name: 'Green', class: 'bg-green-500', text: 'text-white' },
    { name: 'Purple', class: 'bg-purple-500', text: 'text-white' },
    { name: 'Pink', class: 'bg-pink-500', text: 'text-white' },
    { name: 'Yellow', class: 'bg-yellow-500', text: 'text-black' },
    { name: 'Orange', class: 'bg-orange-500', text: 'text-white' },
    { name: 'Teal', class: 'bg-teal-500', text: 'text-white' },
    { name: 'Indigo', class: 'bg-indigo-500', text: 'text-white' },
    { name: 'Gray', class: 'bg-gray-900', text: 'text-white' },
    { name: 'Lime', class: 'bg-lime-500', text: 'text-black' },
    { name: 'Cyan', class: 'bg-cyan-500', text: 'text-black' },
    { name: 'Rose', class: 'bg-rose-500', text: 'text-white' },
    { name: 'Violet', class: 'bg-violet-500', text: 'text-white' },
    { name: 'Emerald', class: 'bg-emerald-500', text: 'text-white' },
    { name: 'Sky', class: 'bg-sky-500', text: 'text-white' },
    { name: 'Amber', class: 'bg-amber-500', text: 'text-black' },
    { name: 'Fuchsia', class: 'bg-fuchsia-500', text: 'text-white' },
    { name: 'Slate', class: 'bg-slate-600', text: 'text-white' },
    { name: 'Stone', class: 'bg-stone-600', text: 'text-white' },
    { name: 'Neutral', class: 'bg-neutral-700', text: 'text-white' },
    { name: 'Zinc', class: 'bg-zinc-700', text: 'text-white' },
  ];
  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-500 flex flex-col items-center justify-center`}>
      <div className="text-center mb-8">
        <h1 className='text-4xl font-bold text-white mb-4'>
          Background Changer
        </h1>
        <p className='text-xl text-gray-300'>
          Change the background color of the page
        </p>
      </div>

      <div className='flex flex-wrap gap-4 justify-center max-w-4xl mx-auto px-4'>
        { 
          colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setBgColor(color.class)}
              className={`${color.class} ${color.text} px-6 py-3 rounded-lg font-semibold hover:scale-105 transform transition-all duration shadow-lg hover:shadow-xl border-2 border-white/20`}
            >
              {color.name}
            </button>
          ))
        }
      </div>

      <div className='mt-8 text-center'>
        <div className='bg-white/10 backdrop-blur-md rounded-lg px-6 py-3'>
          <p className='text-white font-medium'>
            Current Background :<span className='font-bold'>{colors.find(c => c.class === bgColor)?.name || 'Gray'}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App