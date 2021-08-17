import React, { Fragment, useEffect, useState } from "react";
import Box from "../Box";
import { Chip } from "../Chip";
import FlexBox from "../FlexBox";

type Step = {
  title: string;
  disabled: boolean;
};

type StepperProps = {
  selectedStep?: number;
  stepperList: Step[];
  onChange?: (Step, index) => void;
};

const Stepper: React.FC<StepperProps> = ({
  selectedStep,
  stepperList,
  onChange,
}) => {
  const [selected, setSelected] = useState(selectedStep - 1);

  const handleStepClick = (step: Step, ind) => () => {
    if (!step.disabled) {
      setSelected(ind);
      if (onChange) onChange(step, ind);
    }
  };

  useEffect(() => {
    setSelected(selectedStep - 1);
  }, [selectedStep]);

  return (
    <FlexBox
      alignItems="center"
      flexWrap="wrap"
      justifyContent="center"
      my="-4px"
    >
      {stepperList.map((step, ind) => (
        <Fragment key={step.title}>
          <Chip
            bg={ind <= selected ? "primary.main" : "primary.light"}
            color={ind <= selected ? "white" : "primary.main"}
            p="0.5rem 1.5rem"
            fontSize="14px"
            fontWeight="600"
            my="4px"
            cursor={step.disabled ? "not-allowed" : "pointer"}
            onClick={handleStepClick(step, ind)}
          >
            {ind + 1}. {step.title}
          </Chip>
          {ind < stepperList.length - 1 && (
            <Box
              width="50px"
              height="4px"
              bg={ind < selected ? "primary.main" : "primary.light"}
            />
          )}
        </Fragment>
      ))}
    </FlexBox>
  );
};

Stepper.defaultProps = {
  selectedStep: 1,
};

export default Stepper;
