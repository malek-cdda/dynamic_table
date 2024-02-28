import React from "react";
import {
  Card,
  CardCounting,
  CardFollowing,
  CardHeader,
  CardHeaderSubtitle,
  CardHeaderTitle,
  CardHeaderWrapper,
  CardLeftArea,
  CardPosition,
} from "./Card-Styled";
import Image from "next/image";
import styled from "styled-components";
import CardButton from "../Card/CardButton";

const CardStyled = () => {
  return (
    <Card>
      <CardHeaderWrapper>
        <CardHeader>
          <CardLeftArea>
            <Image
              src="/assets/profile.png"
              alt=""
              width={1000}
              height={1000}></Image>
          </CardLeftArea>
          <div>
            <CardHeaderTitle> Redesign Layout</CardHeaderTitle>
            <CardHeaderSubtitle>
              <CardPosition>
                <span className="position_1">Netflix</span>
                <span className="position_2"> </span>
              </CardPosition>
              <CardCounting>
                {/* <image src="/assets/stopwatch.svg" alt="stopwatch" /> */}
                <span className="counting_1"> Urgent</span>
                <span className="counting_2"> </span>
              </CardCounting>
              <CardFollowing>
                <Image
                  src="/assets/clock.svg"
                  width={1000}
                  height={1000}
                  alt=""
                />
                4 months (Estimated)
              </CardFollowing>
            </CardHeaderSubtitle>
          </div>
        </CardHeader>
      </CardHeaderWrapper>
    </Card>
  );
};

export default CardStyled;
