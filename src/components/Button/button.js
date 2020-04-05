import Button from "react-bootstrap/Button"
import styled from "styled-components"

export const StyledButton = styled(Button)`
  background-color: #6e8a8a;
  color: #fff;
  border-radius: 1px;
  border-color: #6e8a8a;
  margin-top: 1.5rem;
  font-size: 1rem;
  transition: all 0.2s ease-out;
  display: block;
  &:hover:enabled {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);

    background-color: #c1d6d6;
    border-color: #c1d6d6;
    color: #fff;
  }
  &:disabled {
    background-color: #d5d5df;
    border-color: #d5d5df;
    cursor: not-allowed;
  }
`
