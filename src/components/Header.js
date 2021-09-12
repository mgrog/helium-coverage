/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import resetIcon from '../assets/reset-btn.svg';

const HeaderRow = styled.div`
  z-index: 5;
  position: relative;
`;

const Title = styled.div`
  align-items: center;
  color: #474efd;
  display: flex;
  font-size: 1.1em;
  font-weight: 700;
  justify-content: space-between;
  padding: 1rem 1rem 0.2rem 1.5rem;
`;

const Img = styled.img`
  height: 1.6rem;
`;

const HR = styled.hr`
  background-color: #e5e5e5;
  border: none;
  color: #e5e5e5;
  height: 1px;
  margin: 0;
  width: 100%;
`;

const ResetBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Header = ({ text, reset, showReset, visible }) => {
  const styles = {
    visibility: {
      visibility: visible ? 'visible' : 'hidden',
    },
  };

  return (
    <HeaderRow>
      <Title style={styles.visibility}>
        {text}
        {showReset ? (
          <ResetBtn onClick={() => reset()}>
            <Img src={resetIcon} alt="logo spinner"></Img>
          </ResetBtn>
        ) : null}
      </Title>
      <HR style={styles.visibility} />
    </HeaderRow>
  );
};

export default Header;
