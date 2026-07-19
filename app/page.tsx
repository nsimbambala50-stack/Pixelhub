export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <header className="p-4 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold">PixelHub</h1>
        <button>☰</button>
      </header>

      <div className="p-4">
        <input 
          placeholder="Buscar assets" 
          className="w-full p-3 rounded-lg bg-gray-900 border-gray-700"
        />
      </div>

      <div className="flex gap-2 px-4 pb-4 overflow-x-auto">
        {['All', 'Sprites', 'Tilesets', 'UI', 'SFX', 'Music'].map(cat => (
          <button key={cat} className="px-4 py-2 bg-gray-800 rounded-full whitespace-nowrap">{cat}</button>
        ))}
      </div>

      <div className="grid gap-4 p-4">
        <div className="bg-gray-900 rounded-xl p-4 flex gap-4">
          <img src="https://placehold.co/100x100/10b981/white" className="rounded-lg"/>
          <div className="flex-1">
            <h3 className="text-lg font-bold">Fantasy Hero Sprite</h3>
            <p className="text-gray-400">por IRI</p>
            <p>⭐</p>
            <button className="mt-2 px-4 py-2 bg-green-600 rounded-lg">Download ZIP</button>
          </div>
        </div>
      </div>

      <footer className="text-center p-4 text-gray-500">
        Feito em Angola 🇦🇴 by IRI
      </footer>
    </main>
  )
        }
