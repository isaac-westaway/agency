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
  Select,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { ChakraProviderClient } from "../providers/ChakraProvider";

type TouchedState = {
  name?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
};

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

const initTouched: TouchedState = {};

export default function ContactForm() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState<TouchedState>(initTouched);

  const handleSelectBlur = () =>
    setTouched((prev) => ({
      ...prev,
      subject: true,
    }));

  const { values, isLoading, error } = state;

  const onBlur = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [event.target.name]: true }));

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
      } as typeof prev.values,
    }));

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) =>
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
  };

  return (
    <ChakraProviderClient>
      <Container maxW="450px" mt={12} className="text-white">
        <Heading>Contact</Heading>
        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            errorBorderColor="red.300"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            errorBorderColor="red.300"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.subject && !values.subject}
          className="text-white"
          mb={5}
        >
          <FormLabel>Service Inquiry</FormLabel>
          <Select
            placeholder="Select service"
            className="text-white"
            onChange={handleSelectChange}
            errorBorderColor="red.300"
            value={values.subject}
            name="subject"
            onBlur={handleSelectBlur}
          >
            <option className="text-black">Website Production (Business)</option>
            <option className="text-black">Website Production (Personal)</option>
            <option className="text-black">UI/UX Design</option>
          </Select>
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
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <Button
          variant="outline"
          colorScheme="blue"
          isLoading={isLoading}
          isDisabled={
            !values.name || !values.email || !values.subject || !values.message
          }
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Container>
    </ChakraProviderClient>
  );
}
