"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const image = e.target.image.value.trim();
    const email = e.target.email.value.trim().toLowerCase();
    const password = e.target.password.value;

  
    if (!name || !email || !password) {
      alert("⚠️ Please fill all required fields");
      return;
    }

  
    if (image && !image.startsWith("http")) {
      alert("⚠️ Please enter a valid image URL");
      return;
    }

    if (password.length < 8) {
      alert("⚠️ Password must be at least 8 characters");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      alert("⚠️ Password must contain 1 uppercase letter");
      return;
    }

    if (!/[0-9]/.test(password)) {
      alert("⚠️ Password must contain 1 number");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
      });

      console.log({ data, error });

      if (error) {
        alert("❌ Signup failed: " + error.message);
        return;
      }

      alert("✅ Account created successfully!");

      router.push("/");
    } catch (err) {
      alert("❌ Something went wrong!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" autoComplete="off" />
          <FieldError />
        </TextField>

        <TextField name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" autoComplete="off" />
          <FieldError />
        </TextField>

        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="john@example.com" autoComplete="off" />
          <FieldError />
        </TextField>

        <TextField isRequired name="password" type="password">
          <Label>Password</Label>
          <Input placeholder="Enter your password" autoComplete="new-password" />
          <Description>
            Must be 8+ chars with 1 uppercase & 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit" isDisabled={loading}>
            <Check />
            {loading ? "Submitting..." : "Submit"}
          </Button>

          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </Card>
  );
}