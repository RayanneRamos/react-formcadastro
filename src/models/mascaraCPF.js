import React from 'react';
import NumberFormat from 'react-number-format';

const MascaraCPF = () => {
  return (
    <NumberFormat 
      format="###.###.###-##"
      mask="_"
    />  
  );
}

export default MascaraCPF;