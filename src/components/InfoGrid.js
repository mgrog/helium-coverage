/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const InfoGrid = ({ children }) => {

  const Grid = styled.div`
    display: grid;
    grid-template-columns: 12rem 12rem;
    grid-template-rows: 6rem 6rem;
    padding: 1.5rem;
    row-gap: 0.5rem;
    column-gap: 1.5rem;
  `;

  return <Grid>{children}</Grid>;
};

InfoGrid.Box = ({ title, children }) => {

  const styles = {
    box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#f8f8fb',
      padding: '1rem',
      borderRadius: '10px',
    },

    title: {
      fontSize: '0.85em',
      color: '#afafd0',
      fontWeight: '500',
    }
  }

  return (
    <div css={styles.box}>
      <div css={styles.title}>{title}</div>
      {children}
    </div>
  );
};

InfoGrid.Body = ({children}) => {
  const Text = styled.div`
    font-size: 1.4em;
    font-weight: 500;
  `
  return <Text>{children}</Text>
}

export default InfoGrid;
