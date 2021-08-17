import { colorOptions } from "interfaces";
import React, { useEffect, useState } from "react";
import { colors } from "../../utils/themeColors";

export interface StarProps {
  value?: number;
  outof?: number;
  color?: colorOptions;
  onClick?: () => void;
}

const Star: React.FC<StarProps> = ({ value, outof, color, ...props }) => {
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(Math.random());
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={`url(#star-${id})`}
      stroke={color ? colors[color].main : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-star"
      {...props}
    >
      <defs>
        <linearGradient id={`star-${id}`}>
          <stop offset={value / outof} stopColor={colors[color].main} />
          <stop
            offset={value / outof}
            stopColor={colors.body.paper}
            stopOpacity="1"
          />
        </linearGradient>
      </defs>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
};

Star.defaultProps = {
  outof: 5,
  value: 0,
  color: "secondary",
};

export default Star;
