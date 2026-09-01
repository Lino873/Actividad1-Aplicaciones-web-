const URL = "https://api.escuelajs.co/api/v1/users";

export async function obtenerUsuarios() {
    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    return await respuesta.json();
}