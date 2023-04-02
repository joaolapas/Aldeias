import React, { useState, useEffect } from 'react';

function TimeCounter() {
  const [tempoDecorrido, setTempoDecorrido] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempoDecorrido(tempoDecorrido => tempoDecorrido + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const segundos = tempoDecorrido % 60;
  const minutos = Math.floor(tempoDecorrido / 60) % 60;
  const horas = Math.floor(tempoDecorrido / 3600) % 24;
  const dias = Math.floor(tempoDecorrido / 86400);

  const tempoDecorridoFormatado = `${dias}d ${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

  return (
    <div>{tempoDecorridoFormatado}</div>
  );
}

export default TimeCounter;
