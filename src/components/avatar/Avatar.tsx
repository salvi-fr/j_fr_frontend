import React from "react";
import { BorderProps, ColorProps } from "styled-system";
import StyledAvatar from "./AvatarStyle";

export interface AvatarProps extends BorderProps, ColorProps {
  src?: string;
  size?: number;
  children?: any;
  [key: string]: any;
}

const Avatar: React.FC<AvatarProps> = ({ src, size, children, ...props }) => {
  return (
    <StyledAvatar size={size} {...props}>
      {src && <img src={src} alt="avatar" />}
      {!src && children && <span>{children}</span>}
    </StyledAvatar>
  );
};

Avatar.defaultProps = {
  size: 48,
};

export default Avatar;
