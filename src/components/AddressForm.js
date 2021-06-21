/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import arrow from '../assets/continue-arrow.svg';
import Input from './Input';

const AddressForm = ({ forward, failureMsg, }) => {
  const styles = {
    container: {
      margin: 'auto',
      width: '80%',
    },

    form: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
    },

    button: {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      marginBottom: '5px',
      marginTop: '20px',
    },

    error: {
      color: '#eb1e1d',
      fontSize: '1em',
      marginBottom: '20px',
    }
  }

  const [address, setAddress] = useState();

  return (
    <div css={styles.container}>
      <div css={styles.form}>
        <Input
          label={'Enter Address'}
          placeholder={'add street, state/province, zip, country'}
          value={address}
          onChange={e => setAddress(e.target.value)}
          submit={() => forward(address)}
        />
        <button css={styles.button} onClick={() => forward(address)}>
          <img src={arrow} alt="continue-arrow"></img>
        </button>
      </div>
      {failureMsg ? <div css={styles.error}>{failureMsg}</div> : null}
    </div>
  );
};

export default AddressForm;