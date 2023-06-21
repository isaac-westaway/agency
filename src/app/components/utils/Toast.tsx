"use client"

import { useEffect, useState } from "react";
import { useToast, UseToastOptions } from "@chakra-ui/react";

type ToastPosition = "top" | "top-right" | "top-left" | "bottom" | "bottom-right" | "bottom-left";

interface ToastProps {
  options: Omit<UseToastOptions, "position"> & { position?: ToastPosition };
}

const Toast: React.FC<ToastProps> = ({ options }) => {
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const toastId = toast(options);
      return () => {
        toast.close(toastId);
      };
    }
  }, [isOpen, toast, options]);

  return null;
};

export default Toast;
