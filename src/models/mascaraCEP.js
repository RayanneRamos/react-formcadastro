import React from 'react';
import NumberFormat from 'react-number-format';

const MascaraCEP = () => {
  return (
    <NumberFormat 
      format="#####-###"
      mask="_"
    />  
  );
}

export default MascaraCEP;