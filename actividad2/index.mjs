import { obtenerUsuarios } from "./modulos/api.mjs";
import { escribirUsuarios, leerUsuarios } from "./modulos/archivos.mjs";

try {
    const usuarios = await obtenerUsuarios();

    const usuariosFormateados = usuarios.map(usuario => ({
        id: usuario.id,
        email: usuario.email,
        name: usuario.name
    }));

    await escribirUsuarios(usuariosFormateados);

    console.log("Datos guardados correctamente.");

    const usuariosLeidos = await leerUsuarios();

    console.log("Usuarios leídos desde el archivo:");
    console.log(usuariosLeidos);

} catch (error) {
    console.error("Ocurrió un error:", error.message);
}