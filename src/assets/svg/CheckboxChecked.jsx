import { useContext } from "react";
import { LightMode } from "../../components/Context/Context";

const CheckboxChecked = () => {
  const { lightDark } = useContext(LightMode);
  return (
    <svg width="17" height="27" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.309675 20.5538C-0.0899016 20.9351 -0.104752 21.5681 0.276505 21.9676C0.657763 22.3672 1.29075 22.3821 1.69033 22.0008L8.48165 15.5208L15.273 22.0008C15.6726 22.3821 16.3056 22.3673 16.6868 21.9677C17.0681 21.5681 17.0532 20.9351 16.6537 20.5538L9.93024 14.1387L16.6537 7.7235C17.0532 7.34224 17.0681 6.70925 16.6868 6.30967C16.3056 5.9101 15.6726 5.89525 15.273 6.2765L8.48165 12.7565L1.69033 6.27652C1.29075 5.89526 0.657763 5.91011 0.276505 6.30969C-0.104752 6.70927 -0.0899023 7.34226 0.309674 7.72351L7.03306 14.1387L0.309675 20.5538Z"
        fill={lightDark ? "black" : "white"}
      />
      <path d="M16 7H1V22H16V7Z" stroke={lightDark ? "black" : "white"} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
};

export default CheckboxChecked;
