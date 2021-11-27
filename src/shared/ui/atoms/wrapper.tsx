import styled from "styled-components";
import { Loading } from ".";

const WrapperBlock = styled.div<{ loading: boolean }>`
  width: 100%;
  padding: 10px;
  /* position: relative; */

  .loading {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.2s;
    opacity: ${({ loading }) => (loading ? 1 : 0)};
    visibility: ${({ loading }) => (loading ? "visible" : "hidden")};
    transform: scale(${({ loading }) => (loading ? "1" : "0.98")});
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 40px;
    }
  }

  .content {
    transition: 0.2s;
    opacity: ${({ loading }) => (loading ? 0 : 1)};
    visibility: ${({ loading }) => (loading ? "hidden" : "visible")};
    transform: scale(${({ loading }) => (loading ? "0.98" : "1")});
  }
`;

interface Props {
  children: JSX.Element | string;
  loading: boolean;
}

const Wrapper = ({ children, loading = false }: Props) => {
  return (
    <WrapperBlock loading={loading}>
      <span className="loading">
        <Loading />
      </span>
      <div className="content">{children}</div>
    </WrapperBlock>
  );
};

export default Wrapper;
