import { CSSTransition } from 'react-transition-group';

const Transition = ({ trigger, children, unmountOnExit, timeout = 200 }) => {
  return (
    <CSSTransition
      in={trigger}
      timeout={timeout}
      classNames="fade"
      exit={false}
      unmountOnExit={unmountOnExit}>
      {children}
    </CSSTransition>
  );
};

export default Transition;
