import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import {
  swing,
  bounceInUp,
  slideInDown,
  slideInRight,
  zoomIn,
} from "react-animations";
import React, { type RefObject } from "react";
import { ContactForm } from "../../shared/ContactForm";
import { codeFontFamily, fontSizes, buttonStyle } from "../../../styles";

const SlideInDown = styled.span`
  display: inline-block;
  animation: 1s ${keyframes`${slideInDown}`};
`;

const SlideInRight = styled.span`
  display: inline-block;
  animation: 1s ${keyframes`${slideInRight}`};
`;

const Name = styled.h2`
  color: #fadf63;
  font-weight: 700;
  animation: 1s ${keyframes`${zoomIn}`};
`;

const HandSwing = styled.div`
  display: inline-block;
  animation: 1s ${keyframes`${swing}`} infinite;
`;

const BounceIn = styled.div`
  animation: 1s ${keyframes`${bounceInUp}`};
`;

const MainPage = (props: { projects: RefObject<HTMLDivElement> }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Box className="page bg-blue">
        <Box>
          <Typography fontSize={fontSizes.L} fontFamily={codeFontFamily}>
            <HandSwing>👋</HandSwing>
            <SlideInDown>Hi</SlideInDown> <SlideInRight>I am</SlideInRight>
          </Typography>
          <Name>Anastasiia Yershova</Name>
          <Typography
            fontSize={fontSizes.L}
            fontFamily={codeFontFamily}
            sx={{ opacity: "75%" }}
          >
            <SlideInDown>Frontend Developer based in the UK</SlideInDown>
          </Typography>
          <BounceIn>
            <Stack
              marginTop={1.5}
              direction="row"
              display="flex"
              justifyContent="space-evenly"
            >
              <Button
                onClick={() => {
                  props.projects.current?.scrollIntoView();
                }}
                sx={buttonStyle({ color: "yellow" })}
              >
                See my projects
              </Button>
              <Button onClick={handleOpen} sx={buttonStyle({ color: "blue" })}>
                Contact me
              </Button>
            </Stack>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ContactForm type="modal" setOpen={setOpen} />
            </Modal>
          </BounceIn>
        </Box>
      </Box>
    </Box>
  );
};
export default MainPage;
