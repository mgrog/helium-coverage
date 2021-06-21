/** @jsxImportSource @emotion/react */

const Input = ({ label, text, onChange, placeholder, submit }) => {

  const styles = {
    container: {
      alignItems: 'flexStart',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },

    label: {
      fontSize: '1em',
    },

    input: {
      backgroundColor: '#e5e5e5',
      border: 'none',
      borderRadius: '5px',
      margin: '0.25rem 0',
      padding: '0.8rem',
    }
  }

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      submit();
    }
  };

  return (
    <div css={styles.container}>
      {label ? <label css={styles.label}>{label}</label> : null}
      <input
        css={styles.input}
        value={text}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default Input;
