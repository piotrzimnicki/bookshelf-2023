import styled from 'styled-components';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export const App = () => {
  return (
    <StyledApp>
      <NxWelcome title="spa" />
    </StyledApp>
  );
};
