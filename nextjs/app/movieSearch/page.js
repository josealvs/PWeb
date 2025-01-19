"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MovieSearch() {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        const query = new URLSearchParams();
        if (title) query.append("titleSearchKey", title);
        if (year) query.append("yearSearchKey", year);

        if (query.toString()) {
            router.push(`/movies?${query.toString()}`);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="idTitleSearchKey">Título</label>
                <input 
                    id="idTitleSearchKey" 
                    name="titleSearchKey" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="idYearSearchKey">Ano</label>
                <input 
                    id="idYearSearchKey" 
                    name="yearSearchKey" 
                    value={year} 
                    onChange={(e) => setYear(e.target.value)}
                />

                <button type="submit">Pesquisar</button>
            </form>
        </div>
    );
}
