import React from "react";
import { CSSProperties } from "styled-components";
import Button from "../buttons/Button";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import Rating from "../rating/Rating";
import { StyledProductCard3 } from "./ProductCardStyle";

export interface ProductCard3Props {
  className?: string;
  style?: CSSProperties;
}

const ProductCard3: React.FC<ProductCard3Props> = ({ ...props }) => {
  return (
    <StyledProductCard3 {...props}>
      <div className="image-holder">
        <div className="sale-chip">50% off</div>
        <img src="/assets/images/products/macbook.png" alt="golden-watch" />
      </div>
      <div className="details">
        <FlexBox justifyContent="space-between">
          <div>
            <h4>ASUS ROG Strix G15</h4>
          </div>

          <div className="icon-holder">
            {/* <Icon className="favorite-icon outlined-icon">heart</Icon> */}
            <Icon className="favorite-icon" color="primary" variant="small">
              heart-filled
            </Icon>
          </div>
        </FlexBox>
        <FlexBox justifyContent="space-between">
          <div>
            <Rating
              value={3.5}
              outof={5}
              color="warn"
              onChange={(value) => {
                console.log(value, "from rating");
              }}
            />
            <div className="price">
              <h4>$445.00</h4>
              <del>$250</del>
            </div>
          </div>

          <div className="add-cart">
            <Button variant="outlined" color="primary" padding="5px">
              <Icon variant="small">minus</Icon>
            </Button>
            <span>45</span>
            <Button variant="outlined" color="primary" padding="5px">
              <Icon variant="small">plus</Icon>
            </Button>
          </div>
        </FlexBox>
      </div>
    </StyledProductCard3>
  );
};

export default ProductCard3;
