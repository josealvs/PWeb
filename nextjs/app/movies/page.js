export default async function Home({ searchParams }) {
    const { titleSearchKey = "bagdad", type = "" } = searchParams;
  
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=9876113d&s=${titleSearchKey}&type=${type}`
    );
  
    const data = await res.json();
  
    const Movies = await Promise.all(
      data.Search.map(async (m) => {
        const detailRes = await fetch(
          `http://www.omdbapi.com/?apikey=9876113d&i=${m.imdbID}&plot=short`
        );
        return detailRes.json();
      })
    );
    return (
        <div>
            <h3>Resultados de "{titleSearchKey}"</h3>
            <section style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                {Movies.map(({ imdbID, Title, Year, Type, Plot, Poster }) => (
                    <article 
                        key={imdbID} 
                        style={{ border: "1px solid #ccc", padding: "8px", maxWidth: "200px" }}
                    >
                        <h4>{`${Title} (${Year})`}</h4>
                        <p>Tipo: {Type}</p>
                        <p>{Plot}</p>
                        {Poster && Poster !== "N/A" ? (
                            <img 
                                src={Poster} 
                                alt={`Pôster de ${Title}`} 
                                style={{ width: "100%" }}
                            />
                        ) : (
                            <p>Imagem não disponível</p>
                        )}
                    </article>
                ))}
            </section>
        </div>
    );
}    