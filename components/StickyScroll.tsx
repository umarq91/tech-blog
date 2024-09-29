"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  },
  {
    title: "Real-time Changes",
    description:
      "See changes as they happen. Our platform allows you to track every modification in real time, removing confusion about the latest project version. Embrace the simplicity of real-time updates.",
  },
  {
    title: "Version Control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures you’re always working on the most recent version, eliminating manual updates and keeping your team aligned.",
  },
  {
    title: "Innovative IT Solutions",
    description:
      "We deliver cutting-edge IT solutions to help businesses stay ahead in the fast-paced digital landscape, with innovative strategies tailored to meet unique business needs.",
  },
  {
    title: "Certified Cloud Experts",
    description:
      "Our team of certified cloud experts provides reliable, secure, and scalable cloud solutions to enhance your business operations and improve efficiency.",
  },
  {
    title: "Full Stack Development",
    description:
      "From frontend to backend, our full-stack development services cover everything you need for a robust, scalable, and feature-rich application that meets your business objectives.",
  },
  {
    title: "DevOps Excellence",
    description:
      "Optimize your development pipeline with our expert DevOps services, designed to improve collaboration, automate workflows, and enhance delivery speed and reliability.",
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "Unlock the power of data with our engineering and analytics solutions. We provide insights that drive smarter business decisions, helping you leverage data to its full potential.",
  },
  {
    title: "AI Solutions & Blockchain Development",
    description:
      "Stay ahead of the technological curve with our AI and blockchain services, providing intelligent automation, security, and innovation to transform your business.",
  },
];

export default function StickyScrollComponent() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
