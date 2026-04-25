import styled from "@emotion/styled";

export const InfoCard = styled.div<{ $isHidden: boolean }>`
  display: ${props => (props.$isHidden ? 'none' : 'flex')};
  width: 456px;
  height: 470px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 60px;
  flex-direction: column;
  gap: 50px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    width: 100%;
    max-width: 590px;
  }
`;

export const InfoLabel = styled.div`
color: #6F6F6F;
    width: 336px;
    height: 21px;
    font-size: 18px;
    line-height: 10%;
`;


export const InfoValue = styled.div`
display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const InfoBlock = styled.div`
width: 336px;
    height: 36px;
    color: #20099e;
    font-size: 25px;
    line-height: 130%;
    font-weight: 700;
    word-break: break-word;

`;
