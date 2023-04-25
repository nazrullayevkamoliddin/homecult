import { defaultProps } from 'prism-react-renderer';
import { IconType } from '../../types/icon.types';

const CloseIcon: IconType = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.3999 2.40002L21.5999 21.6M2.3999 21.6L21.5999 2.40002"
        stroke={props.stroke ?? 'black'}
      />
    </svg>
  );
};

export default CloseIcon;
