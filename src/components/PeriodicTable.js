import React from 'react';
import { elements } from 'assets/elements';
import WrapperGrid from 'styledComponents/WrapperGrid';
import Element from './Element';
import FlexEnd from 'styledComponents/FlexEnd';
import CenterText from 'styledComponents/CenterText';
import FlexMiddle from 'styledComponents/FlexMiddle';

const PeriodicTable = () => {
  return (
    <FlexEnd>
      {elements.map((col, index) => (
        <WrapperGrid>
          <CenterText>{index + 1}</CenterText>
          {col.items.map((el, i) => {
            if (index === 0) {
              return (
                <FlexMiddle>
                  <CenterText>{i + 1}</CenterText>
                  <Element {...el} />
                </FlexMiddle>
              );
            }
            return <Element {...el} />;
          })}
        </WrapperGrid>
      ))}
    </FlexEnd>
  );
};

export default PeriodicTable;
