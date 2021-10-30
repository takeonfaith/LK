import styled from "styled-components";

const SwitchToggleWrapper = styled.div`
  user-select: none;
  width: 56px;
  height: 30px;
  margin: 10px;

  .checkbox {
    display: none;
  }

  .toggleBody {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    background: rgb(233, 233, 233);
    cursor: pointer;
    border-radius: 50px;
    padding: 3px;
    transition: 0.2s background;
  }

  .toggleCircle {
    height: 100%;
    // background: rgb(102, 102, 102);
    background: #fff;
    width: 25px;
    display: block;
    border-radius: 100%;
    border: 6px solid rgba(255, 255, 255, 0.301);
    transition: 0.2s margin-left, 0.2s transform, 0.2s box-shadow;
  }

  .checkbox:checked + .toggleBody .toggleCircle {
    // background: rgb(65, 192, 97);

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
