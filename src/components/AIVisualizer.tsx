import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GoogleGenAI } from '@google/genai';
import { Upload, Image as ImageIcon, Film, Loader2 } from 'lucide-react';

export const AIVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'image' | 'video'>('image');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize AI client lazily to prevent top-level crashes if API key is missing
  const getAiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("API key is missing. Please set GEMINI_API_KEY in your environment.");
    }
    return new GoogleGenAI({ apiKey });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setResult(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateImage = async () => {
    if (!selectedImage || !prompt) return;
    setIsProcessing(true);
    setError(null);

    try {
      const base64Data = selectedImage.split(',')[1];
      const mimeType = selectedImage.split(';')[0].split(':')[1];

      const ai = getAiClient();
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: {
          parts: [
            {
              inlineData: {
                data: base64Data,
                mimeType: mimeType,
              },
            },
            {
              text: prompt,
            },
          ],
        },
      });

      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setResult(`data:image/png;base64,${part.inlineData.data}`);
          foundImage = true;
          break;
        }
      }
      
      if (!foundImage) {
        throw new Error("No image returned from the model.");
      }
    } catch (err: any) {
      console.error(err);
      setError('فشل في معالجة الصورة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGenerateVideo = async () => {
    if (!selectedImage) return;
    setIsProcessing(true);
    setError(null);

    try {
      const base64Data = selectedImage.split(',')[1];
      const mimeType = selectedImage.split(';')[0].split(':')[1];

      const ai = getAiClient();
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt || 'Animate this image smoothly',
        image: {
          imageBytes: base64Data,
          mimeType: mimeType,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const videoResponse = await fetch(downloadLink, {
          method: 'GET',
          headers: {
            'x-goog-api-key': process.env.GEMINI_API_KEY || '',
          },
        });
        const blob = await videoResponse.blob();
        setResult(URL.createObjectURL(blob));
      } else {
        throw new Error("No video returned.");
      }
    } catch (err: any) {
      console.error(err);
      setError('فشل في إنشاء الفيديو. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section id="ai-clinic" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#2A1A10] mb-4">{t.ai.title}</h2>
          <p className="text-xl text-[#4A3219] mb-8">{t.ai.subtitle}</p>
          <div className="w-24 h-1 bg-[#C59D82] mx-auto rounded-full"></div>
        </div>

        <div className="bg-[#FDFBF7] rounded-3xl overflow-hidden shadow-xl border border-[#E8DCC8]">
          {/* Tabs */}
          <div className="flex border-b border-[#E8DCC8]">
            <button
              onClick={() => { setActiveTab('image'); setResult(null); }}
              className={`flex-1 py-4 flex items-center justify-center space-x-2 rtl:space-x-reverse font-bold transition-colors ${
                activeTab === 'image' ? 'bg-[#2A1A10] text-white' : 'text-[#4A3219] hover:bg-[#E8DCC8]'
              }`}
            >
              <ImageIcon className="w-5 h-5" />
              <span>{t.ai.imageEdit.title}</span>
            </button>
            <button
              onClick={() => { setActiveTab('video'); setResult(null); }}
              className={`flex-1 py-4 flex items-center justify-center space-x-2 rtl:space-x-reverse font-bold transition-colors ${
                activeTab === 'video' ? 'bg-[#2A1A10] text-white' : 'text-[#4A3219] hover:bg-[#E8DCC8]'
              }`}
            >
              <Film className="w-5 h-5" />
              <span>{t.ai.videoGen.title}</span>
            </button>
          </div>

          <div className="p-8">
            <div className="mb-8 text-center">
              <p className="text-[#4A3219] mb-6">
                {activeTab === 'image' ? t.ai.imageEdit.desc : t.ai.videoGen.desc}
              </p>
              
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                ref={fileInputRef}
                onChange={handleImageUpload}
              />
              
              {!selectedImage ? (
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="mx-auto flex flex-col items-center justify-center w-64 h-64 border-2 border-dashed border-[#2A1A10] rounded-2xl bg-white hover:bg-[#FDFBF7] transition-colors cursor-pointer"
                >
                  <Upload className="w-12 h-12 text-[#2A1A10] mb-4" />
                  <span className="text-[#2A1A10] font-medium">{t.ai.upload}</span>
                </button>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-md">
                    <img src={selectedImage} alt="Original" className="w-full h-auto object-cover aspect-square" />
                    <button 
                      onClick={() => { setSelectedImage(null); setResult(null); }}
                      className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder={activeTab === 'image' ? t.ai.imageEdit.prompt : t.ai.videoGen.prompt}
                      className="w-full p-4 rounded-xl border border-[#E8DCC8] focus:outline-none focus:ring-2 focus:ring-[#2A1A10] bg-white resize-none h-32"
                    />
                    
                    <button
                      onClick={activeTab === 'image' ? handleGenerateImage : handleGenerateVideo}
                      disabled={isProcessing || (activeTab === 'image' && !prompt)}
                      className="w-full bg-[#2A1A10] text-white py-4 rounded-xl font-bold hover:bg-[#8C6A4B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mx-2" />
                          {t.ai.loading}
                        </>
                      ) : (
                        activeTab === 'image' ? t.ai.imageEdit.generate : t.ai.videoGen.generate
                      )}
                    </button>
                    
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                  </div>
                </div>
              )}
            </div>

            {/* Result Area */}
            {result && (
              <div className="mt-12 border-t border-[#E8DCC8] pt-8">
                <h3 className="text-2xl font-serif text-center text-[#2A1A10] mb-6">النتيجة / Result</h3>
                <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  {activeTab === 'image' ? (
                    <img src={result} alt="Generated Result" className="w-full h-auto" />
                  ) : (
                    <video src={result} controls autoPlay loop className="w-full h-auto" />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
