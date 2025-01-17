import { MariaPrea, OutroComponente, MensagemPersonalizada } from "./componentes";

export default function NovaRotaHome() {
    return (
        <div>
            <h1>Nova Rota, Nova Página</h1>
            <MariaPrea mensagem="Morreu Maria Preá..." />
            <OutroComponente />
            <MensagemPersonalizada titulo="Mensagem Importante" texto="Next.js é muito poderoso!" />
        </div>
    );
}
