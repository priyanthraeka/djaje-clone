import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsApp = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send/?phone=6281339820739&text=Halo+djaje.com%0D%0ASaya+mau+pesen+jajan&type=phone_number&app_absent=0"
      target="_blank"
      className="fixed bottom-3 right-3 rounded-xl p-2 bg-[#25D366]"
    >
      <BsWhatsapp size={35} color="white" />
    </Link>
  );
};

export default WhatsApp;
