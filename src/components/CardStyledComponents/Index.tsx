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

const Index = () => {
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
              <CardPosition>Netflix</CardPosition>
              <CardCounting>
                {/* <image src="/assets/stopwatch.svg" alt="stopwatch" /> */}
                Urgent
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

export default Index;
