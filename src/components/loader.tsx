import React from "react";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";

interface SpinnerProps {
  m?: string;
  withText?: boolean;
}

const SpinnerWrapper = styled.div<{ m: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: ${(props) => props.m};

  span {
    margin-top: 1rem;
  }
`;

const Spinner: React.FC<SpinnerProps> = ({
  m = "3rem 0 0",
  withText = true,
}) => {
  return (
    <SpinnerWrapper m={m}>
      <CircularProgress />
      {withText && <span>Loading...</span>}
    </SpinnerWrapper>
  );
};

export default Spinner;
