import PropTypes from "prop-types";
import { Container } from "./Progress.styled";

const ProgressBar = ({ value, max, color, width }) => {
  ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string,
  };

  ProgressBar.defaultProps = {
    max: 100,
    color: "lightBlue",
    width: "250px",
  };

  return (
    <Container color={color} width={width}>
      <progress value={value} max={max} />
    </Container>
  );
};
export default ProgressBar;
