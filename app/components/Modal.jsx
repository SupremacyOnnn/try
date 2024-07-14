"use client";

import { useEffect, useRef, useState } from "react";
import { FaLink, FaRegWindowClose } from "react-icons/fa";
import { toast } from "react-toastify";
import { createPortal } from "react-dom";
import { useRouter, usePathname } from "next/navigation";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);
  useEffect(() => {
    if (!pathname.includes("/info")) {
      setIsOpen(false);
    }
  }, [pathname]);

  function onHide() {
    if (pathname.includes("/info")) {
      setIsOpen(false);
      router.push("/");
    } else {
      setIsOpen(false);
    }
  }

  function copyToClipboard() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(
      () => {
        console.log("URL copied to clipboard:", url);
        setCopied(true);
        toast("Url Copied : " + url);
        setTimeout(() => setCopied(false), 2000);
      },
      (err) => {
        console.error("Failed to copy URL to clipboard:", err);
      }
    );
  }

  return (
    <>
      {isOpen &&
        createPortal(
          <dialog
            ref={modalRef}
            onClose={onHide}
            className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md bg-gray-200 dark:bg-gray-900 dark:text-gray-100"
          >
            <div className="flex justify-end flex-row gap-3">
              <span
                onClick={copyToClipboard}
                className="flex justify-end cursor-pointer"
              >
                <FaLink size={20} className="text-white" />
              </span>
              <span
                onClick={onHide}
                className="flex justify-end cursor-pointer"
              >
                <FaRegWindowClose size={20} className="text-white" />
              </span>
            </div>

            <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-md">
              {children}
            </div>
          </dialog>,
          document.getElementById("modal-root-id")
        )}
    </>
  );
};

export default Modal;
