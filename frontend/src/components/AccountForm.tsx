"use client";

import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Container,
  Stack,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function AccountForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 8 ? null : "Password must be at least 8 characters",
      confirmPassword: (value, values) =>
        value === values.password ? null : "Passwords do not match",
      firstName: (value) => (value.trim() ? null : "First name is required"),
      lastName: (value) => (value.trim() ? null : "Last name is required"),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      const { confirmPassword, ...userData } = values;
      await api.createUser(userData);

      notifications.show({
        title: "Success!",
        message: "Account created successfully",
        color: "green",
        icon: <IconCheck size="1.1rem" />,
      });

      form.reset();
      router.push("/success");
    } catch (error) {
      notifications.show({
        title: "Error",
        message:
          error instanceof Error ? error.message : "Something went wrong",
        color: "red",
        icon: <IconX size="1.1rem" />,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center">Create Account</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <Group grow>
              {" "}
              {/* Add this for side-by-side */}
              <TextInput
                label="First Name"
                placeholder="John"
                required
                {...form.getInputProps("firstName")}
              />
              <TextInput
                label="Last Name"
                placeholder="Doe"
                required
                {...form.getInputProps("lastName")}
              />
            </Group>
            <TextInput
              label="Email"
              placeholder="you@example.com"
              required
              {...form.getInputProps("email")}
            />

            <TextInput
              label="Phone"
              placeholder="+977 9812345678"
              {...form.getInputProps("phone")}
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              {...form.getInputProps("password")}
            />

            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm your password"
              required
              {...form.getInputProps("confirmPassword")}
            />

            <Button fullWidth mt="xl" type="submit" loading={loading}>
              Create Account
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
