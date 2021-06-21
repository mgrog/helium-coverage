/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import logo from '../assets/helium-logo.svg';
import { css, keyframes } from '@emotion/react';
import { Fragment } from 'react';
import Transition from './Transition';

const Logo = styled.div`
  height: 30px;
  left: calc(50% - 15px);
  position: absolute;
  top: calc(50% - 10px);
  width: 30px;
`;

const styles = {
  innerCircle: {
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    height: '28px',
    left: '1px',
    position: 'absolute',
    top: '1px',
    width: '28px',
    zIndex: 999,
  },

  circle: {
    backgroundColor: '#29d391',
    borderRadius: '50%',
    height: '30px',
    opacity: '0.5',
    position: 'absolute',
    width: '30px',
    zIndex: 998,
  },

  img: {
    position: 'absolute',
    zIndex: 1000,
  },
};

const ping = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.4);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
`;

const PingLogo = () => {
  return (
    <Logo>
      <img css={styles.img} src={logo} alt="logo spinner"></img>
      <div
        css={css`
          ${styles.circle} animation: ${ping} 1.2s linear infinite
        `}></div>
      <div css={styles.innerCircle}></div>
    </Logo>
  );
};

const LoadingView = ({ loading, children }) => {
  return (
    <Fragment>
      {loading ? <PingLogo /> : null}
      <Transition trigger={!loading}>{children}</Transition>
    </Fragment>
  );
};

export default LoadingView;
