/** @jsxImportSource @emotion/react */

const widgetStyle = {
  backgroundColor: '#FFFFFF',
  borderRadius: '15px',
  boxShadow: '0px 42px 20px -20px rgba(0,0,0,0.65)',
  marginBottom: '10px',
  position: 'relative',
  width: '100%',
};

const WidgetContainer = ({ children }) => {
  return <div css={widgetStyle}>{children}</div>;
};

export default WidgetContainer;
