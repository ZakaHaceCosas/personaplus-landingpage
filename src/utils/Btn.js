function Btn({ text, href }) {
    return (
        <a className="p-4 text-center font-sans cursor-pointer bg-green-800 text-white hover:bg-green-400 hover:text-black" href={href}>
            {text}
        </a>
    );
}

export default Btn;