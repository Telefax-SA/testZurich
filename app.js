async function enviarEmail() {

  const destinatario = document.getElementById("dest").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;

  const url = "http://192.168.100.5:44370/Notificador.asmx";

  const soapEnvelope =
    `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <Email xmlns="http://tempuri.org/">
          <destinatario>${destinatario}</destinatario>
          <asunto>${asunto}</asunto>
          <mensaje>${mensaje}</mensaje>
        </Email>
      </soap:Body>
    </soap:Envelope>`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
        "SOAPAction": "http://tempuri.org/Email"
      },
      body: soapEnvelope
    });

    const text = await response.text();
    document.getElementById("respuesta").textContent = text;

  } catch (error) {
    document.getElementById("respuesta").textContent = "Error: " + error;
  }
}
