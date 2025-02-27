"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import Loader from "../ui/loader";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setResponse("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setResponse("❌ " + data.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-3"
        rows={4}
        required
      ></textarea>

      <Button type="submit" className="w-full py-2 rounded" disabled={loading}>
        {loading ? <Loader /> : "Send Message"}
      </Button>

      {response && (
        <p className="mt-3 text-center text-green-600">{response}</p>
      )}
    </form>
  );
}
