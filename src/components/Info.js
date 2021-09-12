/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const SubTitle = styled.div`
  color: #afafd0;
  font-size: 0.85em;
  font-weight: 500;
`;

const Box = styled.div`
  background-color: #f8f8fb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const Grid = styled.div`
  column-gap: 1.5rem;
  display: grid;
  grid-template-columns: 12rem 12rem;
  grid-template-rows: 6rem 6rem;
  padding: 1.5rem;
  row-gap: 0.5rem;
`;

const Info = ({ children }) => {
  return <Grid>{children}</Grid>;
};

Info.SubTitle = ({ children }) => {
  return <SubTitle>{children}</SubTitle>;
};

Info.Box = ({ title, children }) => {
  return (
    <Box>
      <SubTitle>{title}</SubTitle>
      {children}
    </Box>
  );
};

Info.Body = ({ fontSize, children }) => {
  const style = {
    fontSize: fontSize || '1.4em',
    fontWeight: 500,
  };
  return <div css={style}>{children}</div>;
};

export default Info;
