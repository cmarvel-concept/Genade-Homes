import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Upload, Link as LinkIcon, Check, Copy, AlertCircle } from "lucide-react";

export default function LogoManager() {
  const [file, setFile] = useState<File | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLogoInfo();
  }, []);

  const fetchLogoInfo = async () => {
    try {
      const res = await fetch("/api/logo-info");
      const data = await res.json();
      if (data.url) {
        setLogoUrl(data.url);
      }
    } catch (err) {
      console.error("Failed to fetch logo info", err);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setError(null);
    const formData = new FormData();
    formData.append("logo", file);

    try {
      const res = await fetch("/api/upload-logo", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      setLogoUrl(data.url);
      setFile(null);
    } catch (err) {
      setError("Failed to upload image. Please try again.");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const fullUrl = logoUrl ? `${window.location.origin}${logoUrl}` : "";
  const htmlSnippet = `<img src="${fullUrl}" alt="Logo" />`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-4xl font-light tracking-tight text-slate-900">Logo Asset Manager</h1>
          <p className="mt-2 text-slate-500">Upload your logo and get a permanent URL for external integration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Upload Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-slate-800">Upload New Logo</h2>
            <div className="relative group">
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className={`border-2 border-dashed rounded-2xl p-12 text-center transition-colors ${file ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 group-hover:border-slate-300'}`}>
                <Upload className={`mx-auto h-12 w-12 mb-4 ${file ? 'text-emerald-500' : 'text-slate-400'}`} />
                <p className="text-slate-600 font-medium">
                  {file ? file.name : "Click or drag to upload logo"}
                </p>
                <p className="text-xs text-slate-400 mt-2">Supports PNG, JPG, SVG (Max 5MB)</p>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <button
              onClick={handleUpload}
              disabled={!file || uploading}
              className={`w-full py-3 rounded-full font-medium transition-all ${
                !file || uploading
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                  : "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl active:scale-[0.98]"
              }`}
            >
              {uploading ? "Uploading..." : "Upload Logo"}
            </button>
          </div>

          {/* Preview & Integration Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-slate-800">Current Logo & Integration</h2>
            
            {logoUrl ? (
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-2xl p-8 flex items-center justify-center border border-slate-100">
                  <img src={logoUrl} alt="Current Logo" className="max-h-32 object-contain" />
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 block">External URL</label>
                    <div className="flex gap-2">
                      <input
                        readOnly
                        value={fullUrl}
                        className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-mono text-slate-600"
                      />
                      <button
                        onClick={() => copyToClipboard(fullUrl)}
                        className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} className="text-slate-500" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 block">HTML Snippet</label>
                    <div className="flex gap-2">
                      <input
                        readOnly
                        value={htmlSnippet}
                        className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-mono text-slate-600"
                      />
                      <button
                        onClick={() => copyToClipboard(htmlSnippet)}
                        className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} className="text-slate-500" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 rounded-2xl p-12 text-center border border-slate-100">
                <p className="text-slate-400 italic">No logo uploaded yet.</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
          <h3 className="text-amber-800 font-medium flex items-center gap-2 mb-2">
            <LinkIcon size={18} />
            External Usage Guide
          </h3>
          <p className="text-amber-700 text-sm leading-relaxed">
            To use this logo in an external HTML file, copy the <strong>HTML Snippet</strong> above and paste it into your code. 
            The URL is hosted on this application's server and will remain accessible as long as the app is running.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
