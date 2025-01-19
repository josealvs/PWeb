
export async function searchMovies(formData) {
    const titleSearchKey = formData.get("titleSearchKey")
    const yearSearchKey = formData.get("yearSearchKey")

    let url = `http://www.omdbapi.com/?apikey=9876113d&s=${titleSearchKey}`
    if (yearSearchKey) {
        url += `&y=${yearSearchKey}`
    }

    const httpRes = await fetch(url)
    const jsonRes = await httpRes.json()

    return jsonRes
}
