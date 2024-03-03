import styled from "styled-components";
export const Card = styled.div<any>`
  background-color: black;
  border-radius: 12px;
  padding: 16px 12px 0px 12px;
  padding: ${(props: any) =>
    props.$actionButtonPosition === "top" ? "16px 12px 0px 12px" : "20px 12px"};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
`;
export const CardHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 24px;
  // border-bottom: 1px #808080 solid;
`;
export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
`;
export const CardLeftArea = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  background-color: transparent;
  border: 2px solid #808080;
  padding: 12px;
  img: {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export const CardHeaderTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;
export const CardHeaderSubtitle = styled.div`
  font-size: 14px;
  color: #808080;
  display: flex;
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const CardPosition = styled.div`
  padding-right: 12px;
  color: #808080;
  line-height: 18px;
  display: flex;
  justify-content: space-around;
  position: relative;
  .position_2 {
    position: absolute;
    width: 1px;
    height: 70%;

    background-color: #808080;
    top: 20%;
    right: 0px;
  }
`;
export const CardCounting = styled.span`
  padding: 0px 12px;
  display: flex;
  align-items: center;
  color: #808080;
  gap: 4px;
  line-height: 18px;
  display: flex;
  justify-content: space-around;
  position: relative;
  .counting_2 {
    position: absolute;
    width: 1px;
    height: 70%;
    background-color: #808080;
    top: 20%;
    right: 0px;
  }
`;
export const CardFollowing = styled.span`
  padding-left: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #808080;
  line-height: 18px;
  img {
    width: 18px;
    height: 18px;
  }
`;
// ?!card body style area
export const CardBodyAreaWrapper = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  // gap: 12px;
  // padding: 0px 0px;
`;
export const CardBodyPartWrapper = styled.div<any>`
  width: 50%;

  min-height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-self: center;
  padding: 6px 12px;
  position: relative;
  border-bottom: ${(props: any) => {
    if (props.$isKey >= 3) {
      if (props.$isIndex == 0 || props.$isIndex == 1) {
        return " 1px solid #4F4F4F";
      }
    } else if (props.$isKey == 3) {
      if (props.$isIndex == 0) {
        return "none";
      }
    }
    // return props.isKey == 3 ? "1px solid #4F4F4F" : "none";
  }};
  &:before {
    content: "";
    background-color: ${(props: any) => {
      if (props.$isKey == 4 || props.$isKey == 2) {
        if (props.$isIndex == 0 || props.$isIndex == 2) {
          return "  #4F4F4F";
        }
      } else if (props.$isKey == 3) {
        if (props.$isIndex == 0) {
          return "  #4F4F4F";
        }
      }

      // return props.isKey == 3 ? "1px solid #4F4F4F" : "none";
    }};
    width: 1px;
    height: 50px;
    right: 0;
    top: 10px;
    position: absolute;
  }
  // background-color: red;
`;
export const CardBodyTitle = styled.p`
  color: #808080;
`;
export const CardTimeLineText = styled.span`
  font-size: 14px;
  color: white;
  font-weight: 500;
`;
// divider card body code
export const CardBodyDivider = styled.div`
  position: absolute;
  height: 1px;
  width: calc(100% - 24px);
  background-color: #808080;
  margin: 40px;
`;
// action area component
export const CardUpperActionButtonWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #333333;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  // background: url("/assets/eye.svg") no-repeat;
  padding: 3px;
`;
export const ToggleButton = styled.button``;
export const ActionButtonArea = styled.div<any>`
  width: 130px;
  height: auto;
  position: absolute;
  right: 35px;
  top: -16px;
  border-radius: 12px;
  background-color: #333333;
  padding: ${(props: any) => (props.$isAction === "paddings" ? "4px" : "0px")};
  transition: all 0.5s ease-in-out;
  &:before {
    content: "";
    position: absolute;
    top: 16%;
    right: -20px;
    width: 0;
    height: 0;
    border-left: 10px solid #333333;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
`;
export const CardFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  // padding: 12px 0px;
`;
