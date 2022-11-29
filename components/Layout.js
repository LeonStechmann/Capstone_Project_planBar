import styled from "styled-components";
import {Navbar} from "./Navbar";

const Layout = ({children}) => {
  return (
    <>
      <StyledHeading>Kneipen-Tour App</StyledHeading>
      {children}
      <Navbar />
    </>
  );
};

const StyledHeading = styled.h1`
  text-align: center;
`;

export default Layout;
