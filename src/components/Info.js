/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Info = ({ children }) => {

  const grid = {
    columnGap: '1.5rem',
    display: 'grid',
    gridTemplateColumns: '12rem 12rem',
    gridTemplateRows: '6rem 6rem',
    padding: '1.5rem',
    rowGap: '0.5rem',
  };

  return <div css={grid}>{children}</div>;
};

Info.Box = ({ title, children }) => {

  const Box = styled.div`
    background-color: #f8f8fb;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  `;
  
  const Title = styled.div`
    color: #afafd0;
    font-size: 0.85em;
    font-weight: 500;
  `;

  return (
    <Box>
      <Title>{title}</Title>
      {children}
    </Box>
  );
};

Info.Body = ({fontSize, children}) => {
  const BodyText = styled.div`
    font-size: ${fontSize || '1.4em'};
    font-weight: 500;
  `
  return <BodyText>{children}</BodyText>
}

export default Info;
