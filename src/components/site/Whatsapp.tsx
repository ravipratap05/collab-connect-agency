import { useState } from "react";

export function Whatsapp() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const text =
      message.trim() ||
      "Hi CollabConnect, I would like to know more about your services.";

    window.open(
      `https://wa.me/919568942885?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {open && (
        <div className="absolute bottom-20 right-0 w-[320px] overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="bg-[#008069] px-5 py-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">CollabConnect</div>
                <div className="text-xs opacity-90">Online</div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-2xl leading-none"
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
          </div>

          <div className="bg-[#efeae2] p-4">
            <div className="mb-4 w-fit max-w-[85%] rounded-xl bg-white px-4 py-3 text-sm text-gray-700 shadow-sm">
              Hi there 👋
              <br />
              How can I help you?
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              rows={2}
              className="w-full resize-none rounded-xl border-0 bg-white p-3 text-sm outline-none"
            />

            <button
              onClick={sendMessage}
              className="mt-3 w-full rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Open WhatsApp chat"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-9 w-9 fill-current"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.24-1.64a11.93 11.93 0 005.81 1.5h.01c6.59 0 11.95-5.36 11.95-11.95a11.9 11.9 0 00-3.49-8.43zM12.06 21.85a9.88 9.88 0 01-5.04-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.9 9.9 0 01-1.52-5.3c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.16 1.04 7.04 2.92a9.9 9.9 0 012.91 7.05c0 5.48-4.46 9.94-9.94 9.94zm5.45-7.45c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />
        </svg>
      </button>
    </div>
  );
}
