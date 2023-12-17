function Btn({ text, href }) {
    return (
        <a className="rounded-md transition-all duration-300 p-4 text-center font-sans cursor-pointer bg-green-900 text-white hover:text-black hover:bg-green-300" href={href}>
            {text}
        </a>
    );
}

export default Btn;