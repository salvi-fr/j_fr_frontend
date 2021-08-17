import React, {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { AccordionWrapper } from "./AccordionStyle";

export interface AccordionProps {
  expanded?: boolean;
  children: ReactElement[] | any;
}

const Accordion: React.FC<AccordionProps> = ({
  expanded = false,
  children,
}) => {
  const [open, setOpen] = useState(expanded);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);

  const ref = useRef(null);

  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    let parent = ref.current;

    if (parent) {
      setHeaderHeight(parent.children[0].scrollHeight);
      setParentHeight(parent.scrollHeight);
    }
  }, [ref.current]);

  const modifiedChildren = Children.map(children, (child, ind) => {
    if (ind === 0) return cloneElement(child, { open, onClick: toggle });
    else return child;
  });

  return (
    <AccordionWrapper ref={ref} height={open ? parentHeight : headerHeight}>
      {modifiedChildren}
    </AccordionWrapper>
  );
};

Accordion.defaultProps = {
  expanded: false,
};

export default Accordion;
