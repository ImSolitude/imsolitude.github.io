import { css } from "styled-components";
import BeatLoader from "react-spinners/BeatLoader";

const override = css`
  position: relative;
  top: 2px;
  & > *:not(:last-child) {
    margin-right: 2px;
  }
`;
const Spinner = ({ color }) => {
  return (
    <>
      <BeatLoader css={override} size={15} margin={0} color={color || "#fff"} />
    </>
  );
};

export default Spinner;
