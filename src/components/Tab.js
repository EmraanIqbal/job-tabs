import { Box, Container, Heading, Text, VStack } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import "../App.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import axios from "axios";
import { Spinner } from "@chakra-ui/spinner";

const url = "https://course-api.com/react-tabs-project";
const Tab = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const reponse = await axios.get(url);
    const newJobs = reponse.data;

    console.log(newJobs);
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <Box>
        <Spinner
          thickness="4px"
          speed="0.57s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          mt="200"
          ml="700"
        />
      </Box>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <Box>
      <Heading textAlign="center" as="h1" size="2xl" mt="70" mb="3">
        Experience
      </Heading>
      <Text className="underline"></Text>
      <Container maxW="container.lg">
        <VStack>
        <Heading as="h4" size="md">
          {title}
        </Heading>
        <Heading
          as="h6"
          size="xs"
          color="#617d98"
          p=".375rem .75rem"
          bg="#dae2ec"
          display="inline-block"
          borderRadius="5"
        >
          {company}
        </Heading>
        <Text>{dates}</Text>
        <Text>{duties}</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Tab;
