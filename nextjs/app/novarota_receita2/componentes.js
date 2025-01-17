export function MariaPrea({ mensagem }) {
    return <h2>{mensagem}</h2>;
}

export function OutroComponente() {
    return <p>Este é outro componente dentro da página!</p>;
}

export function MensagemPersonalizada({ titulo, texto }) {
    return (
        <div>
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>
    );
}
