import Btn from "./Btn";

function Section({ h, p, i, ih, b }) {
    const renderImage = i !== null ? <img className="w-72 object-scale-down h-auto" src={i}/> : null;
    const renderBtn = (ih !== null && b !== null) ? <Btn text={b} href={ih} /> : null;

    return (
        <section className="flex bg-white flex-row h-screen w-auto mx-auto items-center justify-center gap-4">
            {renderImage}
            <div className="flex flex-col items-start justify-items-start gap-2 max-w-lg">
                {h && <h1 className="font-mono text-xl text-black">{h}</h1>}
                {p && <h3 className="font-sans text-black">{p}</h3>}
                {renderBtn}
            </div>
        </section>
    );
}

export default Section;
