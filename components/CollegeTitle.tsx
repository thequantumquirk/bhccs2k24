import { Container, Text, Grid } from "@mantine/core";
import Image from "next/image";
import styles from "../styles/CollegeTitle.module.css";

const CollegeTitle = () => {
  return (
    <div style={{
      background: "#013e6a",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "20px",
        color: "white"
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
    </div>
  );
};

export default CollegeTitle;
