"use client";

import { useRouter } from "next/navigation";

export default function BackLink() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back(); // This uses Next.js router to go back
  };

  return (
    <button
      onClick={handleBackClick}
      className="mx-auto block text-lg rounded-lg mb-7 underline text-blue-600"
    >
      Go Back
    </button>
  );
}
