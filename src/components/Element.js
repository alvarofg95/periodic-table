import React from 'react';
import WrapperBorder from 'styledComponents/WrapperBorder';
import FlexWrapper from 'styledComponents/FlexWrapper';
import SmallText from 'styledComponents/SmallText';
import BoldText from 'styledComponents/BoldText';

const Element = ({ atomicNumber, atomicMass, name, chemicalSymbol, group }) => {
  function handleOver() {
    console.log({ atomicNumber });
  }

  return (
    <WrapperBorder className={group && group.color} onPointerOver={handleOver}>
      <FlexWrapper>
        <SmallText>{atomicNumber}</SmallText>
        <SmallText>{atomicMass}</SmallText>
      </FlexWrapper>
      <BoldText>{chemicalSymbol}</BoldText>
      <SmallText>{name}</SmallText>
    </WrapperBorder>
  );
};

export default Element;
