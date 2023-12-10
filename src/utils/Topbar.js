function Topbar() {
    return (
        <nav className="flex flex-row gap-4 p-4 bg-slate-900 ">
            <h1 className="font-mono text-white">PersonaPlus</h1>
            <a className="font-sans text-green-200 hover:text-green-400 underline" href="https://personaplus.vercel.app">
                Inicio
            </a>
        </nav>
    )
}

export default Topbar;