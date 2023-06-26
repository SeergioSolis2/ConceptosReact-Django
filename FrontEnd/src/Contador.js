import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <><p>Contador: {contador}</p><button onClick={incrementar}>Incrementar</button></>
  );
};

export default Contador;