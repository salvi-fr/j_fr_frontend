import Card from "@component/Card";
import React from "react";

export interface CarouselCard2Props {}

const CarouselCard2: React.FC<CarouselCard2Props> = () => {
  return (
    <Card p="40px 72px" boxShadow="none" bg="primary.main">
      ami tore na charibo
    </Card>
  );
};

export default CarouselCard2;
