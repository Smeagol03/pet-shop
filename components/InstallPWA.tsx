"use client";
import React, { useEffect, useState } from "react";
import { Download, X, Smartphone } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Cek apakah aplikasi sudah terinstall
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)",
    ).matches;

    const handler = (e: Event) => {
      // Mencegah browser menampilkan prompt default
      e.preventDefault();
      // Simpan event agar bisa dipicu nanti
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Munculkan popup setelah beberapa detik (agar tidak mengganggu saat landing)
      if (!isStandalone) {
        const timer = setTimeout(() => {
          setShowPopup(true);
        }, 3000);
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Tampilkan prompt instalasi
    deferredPrompt.prompt();

    // Tunggu respon user
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setShowPopup(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-8 z-50 animate-in fade-in slide-in-from-bottom-10 h-max max-w-sm">
      <div className="bg-slate-900 border border-slate-800 text-white p-5 rounded-3xl shadow-2xl relative overflow-hidden group">
        {/* Dekorasi Background */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex gap-4">
          <div className="bg-teal-500/10 p-3 rounded-2xl text-teal-500 shrink-0">
            <Smartphone size={24} />
          </div>
          <div>
            <h4 className="font-bold text-sm mb-1 leading-tight">
              Install Paws & Tails
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Tambahkan ke layar utama untuk akses lebih cepat dan mudah.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleInstallClick}
                className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all"
              >
                <Download size={14} /> Install Sekarang
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="text-slate-300 hover:text-white px-3 py-2 rounded-xl text-xs font-medium transition-colors"
              >
                Nanti saja
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
