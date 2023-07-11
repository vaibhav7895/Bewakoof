import React, { useContext } from "react";
import { Box, Heading, Text, Input, Button, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Loading from "./smallComp.jsx/Loding";

const Login = () => {
  const { loginUser, isAuth } = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      prompt("ENTER OTP");
      alert("REGISTERED SUCCESSFULLY");
      alert("Redirecting To Home Page");
      setLoading(false);
      loginUser(Name);
      navigate("/");
    }, 2000);
  };

  const [isPageLoading, setPageIsLoading] = useState(true);

  setTimeout(() => {
    setPageIsLoading(false);
  }, 1500);

  if (isPageLoading) {
    return <Loading />;
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center"   minHeight="100vh">
      <Box maxWidth="800px" p={8}>
  <Heading fontWeight="bold" mb={4} textAlign="center">
    Welcome to the world of Bewakoof!
  </Heading>
  <Box width="80%" margin="auto">
    <Box
      width={{ base: "100%", sm: "80%", md: "60%" }} // Adjust width based on screen size
      mx="auto"
    >
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://images.bewakoof.com/web/group-19-1617704502.png"
        alt="welcome"
      />
    </Box>
  </Box>
      </Box>
      <Box width="80%" maxWidth="400px" mt={8} p={8} border="1px solid #000" borderRadius="md">
        <Heading as="h2" fontWeight="bold" mb={4} textAlign="center">
          Log in / Sign up
        </Heading>
        <Text mb={4} textAlign="center">
          for Latest trends, exciting offers and everything Bewakoof!
        </Text>
        <Input
          mb={4}
          placeholder="Enter Your Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          mb={4}
          placeholder="Enter Mobile Number"
          value={Number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Button
          isLoading={isLoading}
          loadingText="REGISTER"
          colorScheme="teal"
          width="100%"
          mb={4}
          onClick={handleClick}
        >
          {!isLoading && "REGISTER"}
        </Button>
        <Text display="flex" justifyContent="center" alignItems="center" mb={4}>
          <Box width="100%" borderTop="1px solid #000" />
          <Text mx={2}>OR</Text>
          <Box width="100%" borderTop="1px solid #000" />
        </Text>
        <Button width="100%" mb={4}>
          CONTINUE WITH EMAIL
        </Button>
        <Box display="flex">
          <Button width="100%" mr={2}>
            GOOGLE
          </Button>
          <Button width="100%" ml={2}>
            FACEBOOK
          </Button>
        </Box>
        <Text mt={4} color="gray" fontSize="sm" textAlign="center">
          By creating an account or logging in, you agree with Bewakoof's{" "}
          <a href="https://www.bewakoof.com/terms-and-conditions" target="_blank" rel="noreferrer">
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="https://www.bewakoof.com/privacy-policy-and-disclaimer" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
          .
        </Text>
      </Box>
      
    </Box>
  );
};

export default Login;
