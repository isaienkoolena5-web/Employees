import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 20px;
  background-color: #2f3542; 
`;

export const Card = styled.div`
  background-color: #ffffff; 
  border-radius: 8px;
  padding: 40px;
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.div`
  font-size: 16px;
  color: #5a5a5a;
`;

export const Value = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #363636; 
`;