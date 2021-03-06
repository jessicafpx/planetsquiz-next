import styled from 'styled-components';

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 350px;
  padding-top: 25px;
  margin: 0 17%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;
