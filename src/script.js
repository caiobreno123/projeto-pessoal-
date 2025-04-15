function montarPC() {
  const cpu = document.getElementById("cpu").value;
  const gpu = document.getElementById("gpu").value;
  const ram = document.getElementById("ram").value;
  const storage = document.getElementById("storage").value;
  const psu = document.getElementById("psu").value;

  if (!cpu || !gpu || !ram || !storage || !psu) {
    document.getElementById("resultado").innerHTML = "<p style='color: #f85149;'>Ei! Você precisa escolher todas as peças antes de montar o PC 😉</p>";
    return;
  }

  const [cpuName, cpuPrice] = cpu.split("|");
  const [gpuName, gpuPrice] = gpu.split("|");
  const [ramName, ramPrice] = ram.split("|");
  const [storageName, storagePrice] = storage.split("|");
  const [psuName, psuPrice] = psu.split("|");

  const total = Number(cpuPrice) + Number(gpuPrice) + Number(ramPrice) + Number(storagePrice) + Number(psuPrice);

  const resultado = `
    <h2>Sua Configuração Montada:</h2>
    <ul>
      <li><strong>Processador:</strong> ${cpuName} - R$${cpuPrice}</li>
      <li><strong>Placa de Vídeo:</strong> ${gpuName} - R$${gpuPrice}</li>
      <li><strong>Memória RAM:</strong> ${ramName} - R$${ramPrice}</li>
      <li><strong>Armazenamento:</strong> ${storageName} - R$${storagePrice}</li>
      <li><strong>Fonte:</strong> ${psuName} - R$${psuPrice}</li>
    </ul>
    <p style="color: #3fb950; font-size: 20px;"><strong>Total da brincadeira:</strong> R$${total}</p>
    <p style="margin-top: 10px;">Pronto! Agora é só ligar e jogar 🚀🔥</p>
  `;

  document.getElementById("resultado").innerHTML = resultado;
}
