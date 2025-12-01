document.getElementById("btn-ip").addEventListener("click", async () => {
    const resultado = document.getElementById("resultado");
    resultado.textContent = "Consultando...";

    try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        resultado.textContent = "Tu IP pública es: " + data.ip;
    } catch (error) {
        resultado.textContent = "Error al obtener la IP.";
        console.error(error);
    }
});
