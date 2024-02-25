import styled from "styled-components";
export const Card = styled.div`
  background-color: black;
  border-radius: 12px;
  padding: 20px;
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
  border-bottom: 1px #808080 solid;
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
export const CardPosition = styled.span`
  padding-right: 12px;
  border-right: 1px solid #808080;
  color: #808080;
  line-height: 18px;
`;
export const CardCounting = styled.span`
  padding: 0px 12px;
  border-right: 1px solid #808080;
  display: flex;
  align-items: center;
  color: #808080;
  gap: 4px;
  line-height: 18px;
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
