import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComment, FaSmile } from "react-icons/fa";

export default function AdvancedChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatMessages");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(0);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const sessionId = "usuario_123";
  const messagesEndRef = useRef(null);

  const audioRef = useRef(
    typeof Audio !== "undefined"
      ? new Audio(
        "https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.mp3"
      )
      : null
  );

  // Guardar historial
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  // Scroll automático
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  // Notificación de nuevos mensajes
  useEffect(() => {
    if (!open && messages.length > 0) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.sender === "ai") {
        setUnread((prev) => prev + 1);
        audioRef.current?.play().catch(() => { });
      }
    }
  }, [messages, open]);

  // Enviar mensaje al Webhook n8n
  const sendMessage = async (msg) => {
    try {
      const res = await fetch(
        "https://n8n.homelasvegasnevada.com/webhook/303a1701-1712-455d-b913-c1d85a470352",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId, chatInput: msg }),
        }
      );
      const data = await res.json();
      return data.output || "…";
    } catch (error) {
      console.error(error);
      return "Error: no se pudo enviar el mensaje";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const textToSend = input;
    setMessages((prev) => [...prev, { sender: "user", type: "text", text: textToSend }]);
    setInput("");
    setLoading(true);

    const aiResponse = await sendMessage(textToSend);
    setMessages((prev) => [
      ...prev,
      { sender: "ai", type: "text", text: aiResponse },
    ]);
    setLoading(false);
  };

  const toggleChat = () => {
    setOpen(!open);
    if (!open) setUnread(0);
  };

  const addEmoji = (emoji) => {
    setInput((prev) => prev + emoji);
  };

  return (
    <>
      {/* Chat flotante */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-5 w-11/12 max-w-xs sm:w-80 max-h-[500px] bg-white border border-gray-300 rounded-lg flex flex-col shadow-2xl z-50"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white font-bold text-center py-2 rounded-t-lg">
              GustavoDev AI
            </div>

            {/* Mensajes */}
            <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, x: msg.sender === "user" ? 50 : -50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`max-w-[80%] break-words px-4 py-2 rounded-2xl shadow-md ${msg.sender === "user"
                      ? "self-end bg-blue-600 text-white"
                      : "self-start bg-gray-200 text-black"
                    }`}
                >
                  {msg.text}
                </motion.div>
              ))}

              {/* AI escribiendo */}
              {loading && (
                <motion.div className="flex items-center gap-1 self-start px-4 py-2 rounded-2xl shadow-md max-w-[20%] bg-gray-200">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="bg-gray-700 rounded-full w-2 h-2"
                      animate={{ y: ["0%", "-50%", "0%"] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 0.6,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>

              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex gap-1 p-2 border-t text-black border-gray-300 items-center relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Escribe un mensaje..."
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Botón de emoji */}
              <button
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="text-yellow-500 hover:text-yellow-800"
              >
                <FaSmile />
              </button>

              {/* Botón enviar */}
              <button
                onClick={handleSend}
                className="px-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Enviar
              </button>

              {/* Emoji picker */}
              {showEmojiPicker && (
                <div className="absolute bottom-12 right-0 bg-white border p-2 rounded shadow-lg grid grid-cols-6 gap-1 z-50">
                  {["😀", "😂", "😍", "😎", "👍", "🎉"].map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => addEmoji(emoji)}
                      className="text-lg"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante */}
      <motion.button
        onClick={toggleChat}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-5 right-5 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-xl z-50 hover:bg-blue-700 transition-transform duration-300 ${open ? "rotate-45" : ""
          }`}
      >
        <FaComment />
        {unread > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
            {unread}
          </span>
        )}
      </motion.button>
    </>
  );
}
