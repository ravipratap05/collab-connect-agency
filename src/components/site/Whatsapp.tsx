import { useState, type KeyboardEvent } from "react";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";
const WHATSAPP_NUMBER = "917505314726";
const enquiries = [
  {
    label: "Social Media Management",
    message:
      "Hi CollabConnect! I'm interested in your Social Media Management services. Could you please share your packages and details?",
  },
  {
    label: "Brand Collaborations & UGC",
    message:
      "Hi CollabConnect! I'm interested in Brand Collaborations and UGC campaigns. Could you share more details?",
  },
  {
    label: "Website Development",
    message:
      "Hi CollabConnect! I'm looking for website development services. Could you please share your services and pricing?",
  },
];
export function Whatsapp() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const sendMessage = (customMessage?: string) => {
    const text =
      customMessage?.trim() ||
      message.trim() ||
      "Hi CollabConnect! I'd like to know more about your services.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
    if (e.key === "Escape") {
      setOpen(false);
    }
  };
  return (
    <div className="fixed bottom-3 right-4 z-[9999] sm:bottom-5 sm:right-6">
      {/* CHAT POPUP */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with CollabConnect"
className="absolute bottom-[68px] right-0 w-[calc(100vw-32px)] max-w-[360px] max-h-[calc(100dvh-110px)] overflow-y-auto overscroll-contain rounded-[22px] border shadow-[0_20px_70px_rgba(0,0,0,0.2)] sm:w-[360px]"
          style={{
            background: "var(--surface-card)",
            borderColor: "var(--border)",
          }}
        >
          {/* HEADER */}
          <div
            className="px-5 py-4 text-white"
            style={{ background: "#552632" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-bold tracking-tight">
                  CC
                </div>
                <div>
                  <div className="text-[15px] font-semibold">
                    CollabConnect
                  </div>
                  <div className="mt-0.5 text-[11px] text-white/75">
                    Digital Growth Agency
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          {/* CHAT BODY */}
          <div
            className="p-4"
            style={{ background: "var(--surface-page)" }}
          >
            {/* WELCOME MESSAGE */}
            <div
              className="mb-4 w-fit max-w-[95%] rounded-[17px] rounded-tl-sm border p-4 shadow-sm"
              style={{
                background: "var(--surface-card)",
                borderColor: "var(--border)",
                color: "var(--text-main)",
              }}
            >
              <p className="text-[14px] font-semibold">
                Hey! Welcome to CollabConnect.
              </p>
              <p className="mt-2 text-[13px] leading-[1.8]" style={{
                color: "var(--text-secondary)",
              }}>
                Looking to grow your brand or collaborate with creators? Tell us what you need — we're here to help!
              </p>
              <div
                className="mt-2 text-right text-[10px]"
                style={{ color: "var(--text-secondary)" }}
              >
                Just now
              </div>
            </div>
            {/* QUICK ENQUIRIES */}
            <p
              className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: "var(--text-secondary)" }}
            >
              How can we help you today?
            </p>
            <div className="space-y-2">
              {enquiries.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => sendMessage(item.message)}
                  className="group flex w-full items-center justify-between gap-2 rounded-xl border px-3.5 py-3 text-left text-[12px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-[#963E50]"
                  style={{
                    background: "var(--surface-card)",
                    borderColor: "var(--border)",
                    color: "var(--text-main)",
                  }}
                >
                  {item.label}
                  <ChevronRight
                    size={16}
                    className="shrink-0 transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--primary)" }}
                  />
                </button>
              ))}
            </div>
            {/* CUSTOM MESSAGE */}
            <div className="relative mt-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Or type your own message..."
                rows={2}
                className="w-full resize-none rounded-[15px] border p-3.5 pr-12 text-[13px] outline-none transition-all focus:border-[#963E50]"
                style={{
                  background: "var(--surface-card)",
                  color: "var(--text-main)",
                  borderColor: "var(--border)",
                }}
              />
              <button
                type="button"
                onClick={() => sendMessage()}
                aria-label="Send message"
                className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition hover:scale-105 hover:bg-[#20bd5a]"
              >
                <Send size={16} />
              </button>
            </div>
            {/* WHATSAPP CTA */}
            <button
              type="button"
              onClick={() => sendMessage()}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-[13px] font-semibold text-white shadow-sm transition hover:brightness-105"
              style={{ background: "#552632" }}
            >
              <MessageCircle size={17} />
              Continue on WhatsApp
            </button>
            <p
              className="mt-3 text-center text-[10px]"
              style={{ color: "var(--text-secondary)" }}
            >
              We usually reply within a few minutes.
            </p>
          </div>
        </div>
      )}
      {/* FLOATING WHATSAPP BUTTON */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
      >
        {open ? (
          <X size={25} />
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.24-1.64a11.93 11.93 0 005.81 1.5h.01c6.59 0 11.95-5.36 11.95-11.95a11.9 11.9 0 00-3.49-8.43zM12.06 21.85a9.88 9.88 0 01-5.04-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.9 9.9 0 01-1.52-5.3c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.16 1.04 7.04 2.92a9.9 9.9 0 012.91 7.05c0 5.48-4.46 9.94-9.94 9.94zm5.45-7.45c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />
          </svg>
        )}
      </button>
    </div>
  );
}
