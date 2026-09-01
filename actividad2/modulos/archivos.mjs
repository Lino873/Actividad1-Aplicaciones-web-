import { writeFile, readFile } from "fs/promises";
import path from "path";

const rutaArchivo = path.join(process.cwd(), "usuarios.json");

export async function escribirUsuarios(usuarios) {
    await writeFile(
        rutaArchivo,
        JSON.stringify(usuarios, null, 2),
        "utf-8"
    );
}

export async function leerUsuarios() {
    const datosArchivo = await readFile(rutaArchivo, "utf-8");

    return JSON.parse(datosArchivo);
}