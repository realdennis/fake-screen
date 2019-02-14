import React from 'react';
import styled from 'styled-components';

function MineSweeperView({
  state,
  onChangeCeilState,
  onReset,
  onChangeDifficulty,
}) {
  return (
    <Div>
      <header className="mine__header" />
      <section className="mine__content">
        <div className="mine__content__inner">
          <Ceils ceils={state.ceils} />
        </div>
      </section>
    </Div>
  );
}

function Ceils({ ceils }) {
  return ceils.map((ceil, index) => {
    return (
      <div key={index}>{ceil.minesAround >= 0 ? ceil.minesAround : 'x'}</div>
    );
  });
}

const Div = styled.div`
  .mine__header {
    height: 30px;
    background-color: red;
  }
  .mine__content__inner {
    display: grid;
    grid-template-columns: repeat(10, 40px);
    grid-template-rows: repeat(10, 40px);
    div {
      background: gray;
    }
  }
`;

export default MineSweeperView;
