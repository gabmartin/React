import React from "react";
import useUser from "../hooks/useUser";

export default function MoreInfo() {
    const { name, years } = useUser();

    return (
        <div>
            <h1>Información del usuario</h1>
            <p>Nombre: {name}</p>
            <p>Edad: {years}</p>
        </div>
    );
}