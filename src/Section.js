import Btn from "./Btn";

function Section({ h, p, i, ih, b, cla }) {
    const renderImage = i !== null ? <img src={i}/> : null;
    const renderBtn = (ih !== null && b !== null) ? <Btn className={cla} text={b} href={ih} /> : null;

    return (
        <section>
            {h && <h1>{h}</h1>}
            {p && <h3>{p}</h3>}
            {renderImage}
            {renderBtn}
        </section>
    );
}

export default Section;
