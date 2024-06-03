import * as React from "react";
import axios from "axios";

export default function Privacy() {
    const [markdownContent, setMarkdownContent] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        axios.get(
            "https://raw.githubusercontent.com/ZakaHaceCosas/personaplus/main/PRIVACY.md"
        ).then((response) => {
            const markdown = response.data;
            
            setMarkdownContent(markdown);
            setLoading(false);
        }).catch((error) => {
            console.error("Error al obtener el archivo Markdown:", error);
            setError(error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section>
            <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
        </section>
    );
}

