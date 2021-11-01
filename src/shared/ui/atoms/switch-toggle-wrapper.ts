import styled from "styled-components";

const SwitchToggleWrapper = styled.div`
  user-select: none;
  width: 56px;
  height: 30px;

  .checkbox {
    display: none;
  }

  .toggleBody {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    background: var(--search);
    cursor: pointer;
    border-radius: 50px;
    padding: 3px;
    transition: 0.2s background;
  }

  .toggleCircle {
    height: 100%;
    background: var(--theme);
    width: 25px;
    display: block;
    border-radius: 100%;
    transition: 0.2s;
  }

  .checkbox:checked + .toggleBody .toggleCircle {
    background: #fff;
    margin-left: calc(100% - 25px);
    box-shadow: 0 0 30px #6290e4;
  }

  .checkbox:checked + .toggleBody {
    background: #6290e4;
  }

  .checkbox:active + .toggleBody .toggleCircle {
    transform: scale(0.9);
  }
`;

export default SwitchToggleWrapper;
