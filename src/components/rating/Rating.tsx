import { colorOptions } from "interfaces";
import React, { useEffect, useState } from "react";
import { CSSProperties } from "styled-components";
import StyledRating from "./RatingStyle";
import Star from "./Star";

export interface RatingProps {
  value?: number;
  outof?: number;
  readonly?: boolean;
  color?: colorOptions;
  className?: string;
  style?: CSSProperties;
  size?: "small" | "medium" | "large";
  onChange?: (value: number) => void;
}

const Rating: React.FC<RatingProps> = ({
  value,
  color,
  outof,
  readonly,
  onChange,
  ...props
}) => {
  const [state, setState] = useState(value);

  let fullStar = parseInt(state.toString());
  let halfStar = Math.ceil(state - fullStar);
  let emptyStar = outof - Math.ceil(state);
  let starList = [];

  const handleStarClick = (inputValue) => {
    if (!readonly) {
      setState(inputValue);
      if (onChange) onChange(inputValue);
    }
  };

  useEffect(() => {
    setState(value);
  }, [value]);

  for (let i = 0; i < fullStar; i++) {
    let inputValue = i + 1;

    starList.push(
      <Star
        key={i}
        value={5}
        color={color}
        onClick={() => handleStarClick(inputValue)}
      />
    );
  }

  for (let i = 0; i < halfStar; i++) {
    let inputValue = i + fullStar + 1;

    starList.push(
      <Star
        key={inputValue}
        value={(state - fullStar) * 10}
        outof={10}
        color={color}
        onClick={() => handleStarClick(inputValue)}
      />
    );
  }

  for (let i = 0; i < emptyStar; i++) {
    let inputValue = i + halfStar + fullStar + 1;

    starList.push(
      <Star
        key={inputValue}
        value={0}
        color={color}
        onClick={() => handleStarClick(inputValue)}
      />
    );
  }

  return (
    <StyledRating color={color} value={state} readonly={readonly} {...props}>
      {starList}
    </StyledRating>
  );
};

Rating.defaultProps = {
  color: "secondary",
  outof: 5,
  value: 0,
  readonly: true,
};

export default Rating;
