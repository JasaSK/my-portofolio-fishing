"use client";

import { useEffect, useState } from "react";
export default function Profile() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const body = document.body;
    const profile = document.getElementById("profile");

    if (isDarkMode) {
      body.classList.remove("text-gray-900");
      body.classList.add("text-gray-100");
      profile?.classList.remove("bg-white");
      profile?.classList.add("bg-gray-900");
    } else {
      body.classList.remove("text-gray-100");
      body.classList.add("text-gray-900");
      profile?.classList.remove("bg-gray-900");
      profile?.classList.add("bg-white");
    }
  }, [isDarkMode]);
}
