import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #2f3542;
  padding: 20px;
  padding-top: 20px;
  box-sizing: border-box;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  justify-content: center;
  width: 100%;
  max-width: 1200;
  margin: 0 auto;
  padding: 0 300px;
`;

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;
