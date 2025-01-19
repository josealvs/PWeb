"use client"

import { useState, useCallback } from "react";

export default function Home() {
    const [resultMovies, setResultMovies] = useState([]);
    const [titleSearchKey, setTitleSearchKey] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAction = useCallback(async (formData) => {
        const titleSearchKey = formData.get("titleSearchKey");
        setTitleSearchKey(titleSearchKey);

        setLoading(true);
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=9876113d&s=${titleSearchKey}`);
        const jsonRes = await httpRes.json();
        setResultMovies(jsonRes.Search || []);
        setLoading(false);
    }, []);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <MovieForm handleAction={handleAction} titleSearchKey={titleSearchKey} setTitleSearchKey={setTitleSearchKey} loading={loading} />
            <MovieTable movies={resultMovies} />
        </div>
    );
}

export function MovieForm({ handleAction, titleSearchKey, setTitleSearchKey, loading }) {
    const handleInputChange = (e) => {
        setTitleSearchKey(e.target.value);
    };

    return (
        <form className="bg-white p-6 rounded-lg shadow-lg mb-6" onSubmit={(e) => { e.preventDefault(); handleAction(new FormData(e.target)); }}>
            <div className="flex items-center gap-4">
                <label htmlFor="idTitleSearchKey" className="font-semibold text-lg text-gray-700">Título</label>
                <input
                    id="idTitleSearchKey"
                    name="titleSearchKey"
                    value={titleSearchKey}
                    onChange={handleInputChange}
                    className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Digite o título do filme"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className={`p-3 rounded-md bg-blue-500 text-white ${loading ? 'opacity-50' : 'hover:bg-blue-600'} transition-colors`}
                >
                    {loading ? 'Carregando...' : 'Pesquisar'}
                </button>
            </div>
        </form>
    );
}

export function MovieTable({ movies }) {
    return (
        <div className="mt-8">
            <h2 className="font-semibold text-xl text-gray-800 mb-4">Resultados da Pesquisa</h2>
            {movies.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {movies.map((m) => (
                        <div key={m.imdbID} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="font-semibold text-lg text-gray-800">{m.Title}</div>
                            <div className="text-sm text-gray-500">Ano: {m.Year}</div>
                            <div className="mt-4">
                                <img src={m.Poster} alt={m.Title} className="w-full rounded-lg shadow-md" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-gray-500">Nenhum filme encontrado.</div>
            )}
        </div>
    );
}
