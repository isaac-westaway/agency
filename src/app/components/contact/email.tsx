import * as React from "react";

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailProps {
  name: string;
  email: string;
  business: string;
  message: string;
  service: string;
}
const EmailComponent: React.FC<Readonly<EmailProps>> = ({
  name,
  business,
  email,
  message,
  service,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              New Contact Message
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello Isaac,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              You got an email from <strong>{name}</strong>. <br />
              Their email is &nbsp;{email} and their business name is&nbsp;
              <b>{business}</b>. Their message is: <br />
              {message}
              <br />
              And the service they are interested in is: {service}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailComponent;
