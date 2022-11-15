import { Container, Text, Grid } from "@mantine/core";
import Image from "next/image";
import styles from "../styles/CollegeTitle.module.css";

const CollegeTitle = () => {
  return (
    <Container>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}>
        <Image
          src={"/bhclogo.png"} alt="BHC college logo"
          width={80}
          height={100}/>
        <div style={{
          marginLeft: "20px"
        }}>
          <h1 style={{
            marginBottom: "5px"
          }}>Bishop Heber College (Autonomous)</h1>
          <Text>College of Excellence</Text>
        </div>
      </div>
    </Container>
  );
};

export default CollegeTitle;
