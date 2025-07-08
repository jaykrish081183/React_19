import styled from "styled-components";

const Heading = styled.h1`
  color: green;
  margin: 20px;
  padding: 20px;
`;
const CardStyle = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 200px;
  text-align: center;
`;
const ImgStyle = styled.img`
  width: 100px;
  margin: 10px;
  border-radius: 50%;
`;
const DivStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
const StyleComponent = () => {
  return (
    <div>
      <Heading>Styled Component Example</Heading>
      <p>This is a user profile component with CSS styling.</p>
      <DivStyle>
        <CardStyle>
          <ImgStyle src="../public/img_avatar.png" alt="Placeholder"/>
          <h2>Jayesh Patel</h2>
          <h2>Software Developer</h2>
        </CardStyle>
      </DivStyle>
      <hr />
    </div>
  );
};

export default StyleComponent;