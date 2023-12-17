import Btn from "./Btn";

function Section({ h, p, i, ih, b, clase }) {
    const renderImage = i !== null ? <img src={i}/> : null;
    const renderBtn = (ih !== null && b !== null) ? <Btn text={b} href={ih} className={clase} /> : null;

    return (
        <section>
            {renderImage}
            <div>
                {h && <h1>{h}</h1>}
                {p && <h3>{p}</h3>}
                {renderBtn}
            </div>
        </section>
    );
}

export default Section;
