import { Container, Title, Text, Button } from "@mantine/core";

export default function SuccessPage() {
  return (
    <Container size={420} my={40}>
      <Title ta="center">Registration Successful!</Title>
      <Text ta="center" mt="md">
        Your account has been created successfully. You can now log in.
      </Text>
    </Container>
  );
}
