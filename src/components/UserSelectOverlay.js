/** @jsxImportSource @emotion/react */

const UserSelectOverlay = ({ children, mount }) => {
  const styles = {
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    left: '2.5%',
    minHeight: '95%',
    minWidth: '95%',
    position: 'absolute',
    top: '2.5%',
    zIndex: '2',
  };

  return mount ? <div css={styles}>{children}</div> : null;
};

export default UserSelectOverlay;
