export async function getDictionaryResults(search: string) {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
    if (!res.ok) {
        throw {
            message: `${res.status}: Failed to fetch dictionary data`, 
        }
    }
    const data = await res.json()
    return data;
}