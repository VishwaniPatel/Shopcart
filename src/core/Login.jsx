import {
  Image,
  createStyles,
  Box,
  Flex,
  TextInput,
  Button,
  Space,
  Grid,
  Center,
  Text,
  BackgroundImage,
} from "@mantine/core";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import login from "../assets/images/LoginImage.jpg";
import Logo from "../logo/Logo";
import * as Yup from "yup";
import { getCustomerData } from "../service/UserService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AppContext";
const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  imgWrapper: {
    position: "absolute",
    top: 0,
    left: "10%",
  },
  loginContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    backgroundColor: "#003d29",
  },
  inner: {
    width: "50%",
    padding: "60px",
  },
  loginWrapper: {
    backgroundColor: "white",
    padding: "40px",
  },
}));
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});
const Login = () => {
  const { classes } = useStyles();
  const { setAuthState } = useAuth();
  const navigate = useNavigate();
  const [registeredData, setRegisteredData] = useState([]);

  // match user entered data with registered data
  const checkLoginData = (loginData) => {
    const email = loginData.email;
    const password = loginData.password;
    const matchedUser = registeredData.find(
      (user) => user.customerEmail == email && user.customerPassword == password
    );
    console.log(matchedUser);
    if (matchedUser) {
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("customerId", matchedUser.id);
      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: true,
      }));
      navigate("/home");
    } else {
      alert("Invalid Credentials. Try again.");
    }
  };

  // get value of entered data
  const handleSubmit = (values) => {
    checkLoginData(values);
    getCustomer();
  };

  // get registered user data to perform match
  const getCustomer = async () => {
    await getCustomerData().then((res) => {
      setRegisteredData(res.data);
    });
  };
  useEffect(() => {
    getCustomer();
  }, []);

  return (
    <div className={classes.wrapper}>
      <BackgroundImage
        src={login}
        h={"100%"}
        w={"40%"}
        className={classes.imgWrapper}
      ></BackgroundImage>
      <div className={classes.loginContainer}>
        <div className={classes.inner}>
          <Flex justify="center">
            <Text size={30} fw={500} p={20} color="white">
              Login
            </Text>
          </Flex>
          <Box className={classes.loginWrapper}>
            <Flex justify={"center"}>
              <Logo />
            </Flex>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field name="email">
                    {({ field }) => (
                      <TextInput
                        {...field}
                        type="email"
                        label="Email"
                        placeholder="Enter your email address"
                      />
                    )}
                  </Field>
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                  <Space h="md"></Space>
                  <Field name="password">
                    {({ field }) => (
                      <TextInput
                        {...field}
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                      />
                    )}
                  </Field>
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                  <Space h="md"></Space>
                  <Button type="submit" variant="filled">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login;
