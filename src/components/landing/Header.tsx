import Box from '@component/Box';
import Button from '@component/buttons/Button';
import IconButton from '@component/buttons/IconButton';
import Container from '@component/Container';
import FlexBox from '@component/FlexBox';
import Icon from '@component/icon/Icon';
import Image from '@component/Image';
import Sidenav from '@component/sidenav/Sidenav';
import Typography from '@component/Typography';
import { getTheme } from '@utils/utils';
import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { Link as Scroll } from 'react-scroll';
import styled from 'styled-components';

const headerHeight = 72;

const HeaderWrapper = styled.div<{ fixed: boolean }>`
  box-shadow: ${(props) => props.fixed && getTheme('shadows.regular')};

  .link {
    transition: color 250ms ease-in-out;
    cursor: pointer;
    :hover {
      color: ${getTheme('colors.primary.main')};
    }
  }

  ${(props) =>
    props.fixed
      ? `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    height: ${headerHeight}px;
    z-index: 99;

    .link {
      color: inherit;
    }

    @keyframes slide-from-top {
      from {
        top: -${headerHeight}px;
      }
      to {
        top: 0;
      }
    }
    
    animation: slide-from-top 250ms ease-in-out;
    
    & + div {
      padding-top: ${headerHeight}px;
    }
  `
      : ''}

  .menu {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    .right-links {
      display: none;
    }

    .menu {
      display: unset;
    }
  }
`;

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isFixed, setFixed] = useState(false);

  const toggleSidenav = () => {
    setOpen((open) => !open);
  };

  const scrollListener = useCallback(
    debounce(() => {
      if (window?.pageYOffset >= headerHeight) setFixed(true);
      else setFixed(false);
    }, 50),
    []
  );

  useEffect(() => {
    if (!window) return;

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <HeaderWrapper fixed={isFixed}>
      <Container>
        <FlexBox
          justifyContent="space-between"
          alignItems="center"
          height={headerHeight}
        >
          <Scroll to="top" duration={400} smooth={true} isDynamic>
            <Box cursor="pointer">
              <Image
                width="96px"
                height="44px"
                src="/assets/images/logo.svg"
                alt="logo"
              />
            </Box>
          </Scroll>

          <FlexBox className="right-links" alignItems="center">
            <Scroll
              to="features"
              duration={400}
              offset={-headerHeight - 16}
              smooth={true}
            >
              <Typography
                className="link"
                color="text.muted"
                p="0.25rem 1.25rem"
              >
                Features
              </Typography>
            </Scroll>
            <Scroll
              to="demos"
              duration={400}
              offset={-headerHeight - 16}
              smooth={true}
            >
              <Typography
                className="link"
                color="text.muted"
                p="0.25rem 1.25rem"
              >
                Demos
              </Typography>
            </Scroll>
            <Scroll
              to="technologies"
              duration={400}
              offset={-headerHeight - 16}
              smooth={true}
            >
              <Typography
                className="link"
                color="text.muted"
                p="0.25rem 1.25rem"
              >
                Technologies
              </Typography>
            </Scroll>
            <Scroll
              to="price"
              duration={400}
              offset={-headerHeight}
              smooth={true}
            >
              <Typography
                className="link"
                color="text.muted"
                p="0.25rem 1.25rem"
                mr="3rem"
              >
                Pricing
              </Typography>
            </Scroll>
            {/* <a
              href="https://themeforest.net/item/bonik-react-ecommerce-template/31837448?ref=bonik"
              target="_blank"
              rel="noreferrer noopener"
            > */}
            <a href="https://1.envato.market/oeNbNe">
              <Button variant="outlined" color="primary">
                Purchase Now
              </Button>
            </a>
            {/* </a> */}
          </FlexBox>

          {/* mobile menu */}
          <Sidenav
            handle={
              <IconButton className="menu">
                <Icon>menu</Icon>
              </IconButton>
            }
            open={open}
            position="right"
            width={260}
            toggleSidenav={toggleSidenav}
          >
            <Box p="1rem">
              <Scroll
                to="features"
                duration={400}
                offset={-headerHeight - 16}
                smooth={true}
              >
                <Typography
                  className="link"
                  py="0.5rem"
                  onClick={toggleSidenav}
                >
                  Features
                </Typography>
              </Scroll>
              <Scroll
                to="demos"
                duration={400}
                offset={-headerHeight - 16}
                smooth={true}
              >
                <Typography
                  className="link"
                  py="0.5rem"
                  onClick={toggleSidenav}
                >
                  Demos
                </Typography>
              </Scroll>
              <Scroll
                to="technologies"
                duration={400}
                offset={-headerHeight - 16}
                smooth={true}
              >
                <Typography
                  className="link"
                  py="0.5rem"
                  onClick={toggleSidenav}
                >
                  Technologies
                </Typography>
              </Scroll>
              <Scroll
                to="price"
                duration={400}
                offset={-headerHeight}
                smooth={true}
              >
                <Typography
                  className="link"
                  py="0.5rem"
                  onClick={toggleSidenav}
                  mb="1rem"
                >
                  Pricing
                </Typography>
              </Scroll>

              {/* <a
                href="https://themeforest.net/item/bonik-react-ecommerce-template/31837448?ref=bonik"
                target="_blank"
                rel="noreferrer noopener"
              > */}
              <Button variant="outlined" color="primary">
                Purchase Now
              </Button>
              {/* </a> */}
            </Box>
          </Sidenav>
        </FlexBox>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
