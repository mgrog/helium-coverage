/** @jsxImportSource @emotion/react */

const style = {
  backgroundColor: '#474EFD',
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  cursor: 'pointer',
  fontSize: '1.2em',
  padding: '0.8rem',
};

const Button = ({ children, handleClick }) => {
  return (
    <button css={style} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
