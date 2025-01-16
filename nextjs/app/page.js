export function Menu() {
    return <div>Menu principal</div>;
}

export function Titulo() {
    return <h1>Viva Santana!</h1>;
}

export default function Home() {
    return (
        <div>
            <Menu />
            <Titulo />
        </div>
    );
}
