"use client";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState, ChangeEvent, FocusEvent } from "react";

import { sendContactForm } from "@/src/app/components/libs/api";
import { ChakraProviderClient } from "../providers/ChakraProvider";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormState {
  isLoading: boolean;
  error: string;
  values: FormValues;
}

const initValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initState: FormState = {
  isLoading: false,
  error: "",
  values: initValues,
};

export default function Home() {
  const toast = useToast();
  const [state, setState] = useState<FormState>(initState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const { values, isLoading, error } = state;

  const onBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [event.target.name]: true }));

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <ChakraProviderClient>
      <div className="bg-black">
        <Container maxW="450px" mt={12} className="text-white bg-black">
          <Heading className="mb-5">Contact</Heading>
          {error && (
            <Text color="red.300" my={4} fontSize="xl">
              {error}
            </Text>
          )}
          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="John Doe"
              name="name"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            mb={5}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              errorBorderColor="red.300"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl
            mb={5}
            isRequired
            isInvalid={touched.subject && !values.subject}
          >
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              name="subject"
              placeholder="Business Website Inquiry"
              errorBorderColor="red.300"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
            mb={5}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              rows={4}
              errorBorderColor="red.300"
              placeholder="Hey I'm liking the looks of your services, and my business could really do with a website. Please reply ASAP."
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
              className="text-white"
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          <Button
            variant="outline"
            colorScheme="blue"
            isLoading={isLoading}
            isDisabled={
              !values.name ||
              !values.email ||
              !values.subject ||
              !values.message
            }
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Container>
      </div>
    </ChakraProviderClient>
  );
}
