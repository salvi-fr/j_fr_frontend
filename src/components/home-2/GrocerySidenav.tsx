import Accordion from "@component/accordion/Accordion";
import AccordionHeader from "@component/accordion/AccordionHeader";
import Box from "@component/Box";
import Card from "@component/Card";
import FlexBox from "@component/FlexBox";
import Icon from "@component/icon/Icon";
import NavLink from "@component/nav-link/NavLink";
import { SemiSpan } from "@component/Typography";
import groceryNavigations from "@data/groceryNavigations";
import React, { Fragment } from "react";

export interface GrocerySidenavProps {
  isFixed?: boolean;
}

const GrocerySidenav: React.FC<GrocerySidenavProps> = ({ isFixed }) => {
  const renderChild = (childList: any[], type = "parent") => {
    if (type === "parent")
      return childList.map((item) => (
        <Fragment key={item.title}>
          <NavLink href={item.href} color="gray.700">
            <FlexBox>
              <SemiSpan ml="2rem" py="6px" color="inherit" flex="1 1 0">
                {item.title}
              </SemiSpan>
            </FlexBox>
          </NavLink>

          {item.child && renderChild(item.child, "child")}
        </Fragment>
      ));
    else
      return childList.map((item) => (
        <NavLink href={item.href} color="gray.700">
          <FlexBox key={item.title}>
            <SemiSpan ml="3rem" py="6px" color="inherit" flex="1 1 0">
              {item.title}
            </SemiSpan>
          </FlexBox>
        </NavLink>
      ));
  };

  return (
    <Card
      position="relative"
      p="20px 20px 14px 24px"
      boxShadow="large"
      height="100%"
      borderRadius={0}
      overflow={isFixed ? "auto" : "unset"}
    >
      {groceryNavigations.map((item) => (
        <Box mb="0.5rem" key={item.title} color="gray.700">
          {item.child ? (
            <Accordion expanded>
              <AccordionHeader
                px="0px"
                py="6px"
                color="inherit"
                justifyContent="flex-start"
              >
                <Box flex="1 1 0">
                  <NavLink href={item.href} color="gray.700">
                    <FlexBox flex="1 1 0">
                      <Icon
                        variant="small"
                        mr="0.75rem"
                        defaultcolor="currentColor"
                      >
                        {item.icon}
                      </Icon>
                      <SemiSpan
                        color="inherit"
                        fontWeight="600"
                        mr="9px"
                        flex="1 1 0"
                      >
                        {item.title}
                      </SemiSpan>
                    </FlexBox>
                  </NavLink>
                </Box>
              </AccordionHeader>
              {item.child ? renderChild(item.child) : null}
            </Accordion>
          ) : (
            <NavLink href={item.href} color="gray.700">
              <FlexBox py="6px" color="inherit" key={item.title}>
                <Icon variant="small" mr="0.75rem">
                  {item.icon}
                </Icon>
                <SemiSpan
                  color="inherit"
                  fontWeight="600"
                  mr="9px"
                  flex="1 1 0"
                >
                  {item.title}
                </SemiSpan>
              </FlexBox>
            </NavLink>
          )}
        </Box>
      ))}
    </Card>
  );
};

export default GrocerySidenav;

// position="fixed" left="calc((100% - 1200px) / 2)"
