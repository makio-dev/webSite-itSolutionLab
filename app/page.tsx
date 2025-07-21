"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "",
    content: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.content.length > 500) {
      alert("お問い合わせ内容は500文字以内で入力してください。");
      return;
    }
    console.log("Form submitted:", formData);
    alert("お問い合わせを送信いたしました。ありがとうございます。");
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-blue-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-900 font-sans">
                株式会社ITソリューション・ラボ
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#home"
                className="text-gray-700 hover:text-blue-800 transition-colors cursor-pointer whitespace-nowrap font-medium"
              >
                HOME
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-blue-800 transition-colors cursor-pointer whitespace-nowrap font-medium"
              >
                サービス
              </Link>
              <Link
                href="#partners"
                className="text-gray-700 hover:text-blue-800 transition-colors cursor-pointer whitespace-nowrap font-medium"
              >
                パートナー募集
              </Link>
              <Link
                href="#company"
                className="text-gray-700 hover:text-blue-800 transition-colors cursor-pointer whitespace-nowrap font-medium"
              >
                会社概要
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-blue-800 transition-colors cursor-pointer whitespace-nowrap font-medium"
              >
                お問い合わせ
              </Link>
            </nav>

            <button
              className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i
                className={`ri-${isMenuOpen ? "close" : "menu"}-line text-xl`}
              ></i>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-200">
              <nav className="flex flex-col space-y-3">
                <Link
                  href="#home"
                  className="text-gray-700 hover:text-blue-800 transition-colors cursor-pointer font-medium"
                >
                  HOME
                </Link>
                <Link
                  href="#services"
                  className="text-gray-700 hover:text-blue-800 transition-colors cursor-pointer font-medium"
                >
                  サービス
                </Link>
                <Link
                  href="#partners"
                  className="text-gray-700 hover:text-blue-800 transition-colors cursor-pointer font-medium"
                >
                  パートナー募集
                </Link>
                <Link
                  href="#company"
                  className="text-gray-700 hover:text-blue-800 transition-colors cursor-pointer font-medium"
                >
                  会社概要
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 hover:text-blue-800 transition-colors cursor-pointer font-medium"
                >
                  お問い合わせ
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden"
      >
        <div className="absolute inset-0">
          <video
            src="https://public.readdy.ai/ai/video_res/3c4b4bd3-1957-411b-8e3c-97e4695313b4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-800/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="w-full max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              株式会社ITソリューション・ラボ
            </h1>
            <div className="w-24 h-1 bg-cyan-400 mb-8"></div>
            <h2 className="text-2xl md:text-3xl text-cyan-100 font-medium mb-6">
              お客様に寄り添う、ハンズオン型ITコンサルティング
            </h2>
            <p className="text-lg md:text-xl text-cyan-100 mb-12 leading-relaxed">
              信頼性と親しみやすさを兼ね備えた、真のプロフェッショナルパートナーとして皆様のビジネスを支援いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#services"
                className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-cyan-400 transition-colors cursor-pointer whitespace-nowrap shadow-lg"
              >
                サービスを見る
              </Link>
              <Link
                href="#contact"
                className="inline-block bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-medium hover:bg-cyan-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://readdy.ai/api/search-image?query=Abstract%20business%20process%20transformation%20concept%20with%20flowing%20lines%20and%20geometric%20shapes%2C%20modern%20minimalist%20design%20with%20blue%20and%20orange%20color%20accents%2C%20professional%20atmosphere%20suggesting%20innovation%20and%20strategic%20thinking%2C%20clean%20contemporary%20visual%20elements%20representing%20business%20methodology%20and%20approach%2C%20dynamic%20composition%20with%20focus%20on%20process%20optimization%20and%20workflow%20improvement%2C%20sophisticated%20gradient%20backgrounds%20with%20emphasis%20on%20business%20excellence%20and%20client-focused%20solutions&width=1920&height=600&seq=approach-bg&orientation=landscape"
            alt="Approach Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                私たちが選ぶ、"現場第一"のITコンサルティング
              </h2>
              <div className="w-16 h-1 bg-orange-500 mx-auto mb-12"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* 従来のIT（技術中心） */}
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-close-line text-2xl text-white"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-600 mb-4">
                      従来のIT（技術中心）
                    </h3>
                  </div>
                  <div className="flex justify-center space-x-6 mb-6">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <i className="ri-settings-3-line text-xl text-gray-500"></i>
                    </div>
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <i className="ri-code-s-slash-line text-xl text-gray-500"></i>
                    </div>
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <i className="ri-server-line text-xl text-gray-500"></i>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    技術ありきのアプローチ
                    <br />
                    システム導入が目的化
                    <br />
                    現場の実情を軽視
                  </p>
                </div>
              </div>

              {/* 当社のアプローチ（業務中心） */}
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-orange-200">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-check-line text-2xl text-white"></i>
                    </div>
                    <h3 className="text-xl font-bold text-orange-600 mb-4">
                      当社のアプローチ（業務中心）
                    </h3>
                  </div>
                  <div className="flex justify-center space-x-6 mb-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <i className="ri-team-line text-xl text-white"></i>
                    </div>
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <i className="ri-handshake-line text-xl text-white"></i>
                    </div>
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <i className="ri-flow-chart text-xl text-white"></i>
                    </div>
                  </div>
                  <p className="text-orange-600 text-sm leading-relaxed font-medium">
                    现場の業務を深く理解
                    <br />
                    実務レベルでの支援
                    <br />
                    継続的な改善提案
                  </p>
                </div>
              </div>
            </div>

            {/* メインメッセージ */}
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl leading-relaxed text-gray-800 mb-8">
                私たちは、ITの
                <span className="text-orange-500 font-semibold relative">
                  "技術"
                </span>
                そのものではなく、
                <br className="hidden md:block" />
                <span className="text-orange-500 font-semibold relative">
                  "業務"
                </span>
                に焦点をあてたITコンサルティングサービスを提供しています。
                <br className="hidden md:block" />
                お客様の現場に深く入り込み、実務レベルで支援する
                <br className="hidden md:block" />
                <span className="text-orange-500 font-semibold relative">
                  「ハンズオン型」
                </span>
                のスタイルが特徴です。
              </p>

              <div className="flex justify-center space-x-8 mb-8">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <i className="ri-handshake-line text-xl text-white"></i>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <i className="ri-briefcase-line text-xl text-white"></i>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <i className="ri-target-line text-xl text-white"></i>
                </div>
              </div>

              <p className="text-lg text-gray-600 italic">
                技術ありきではなく、あなたの業務を理解することから始めます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20space%20with%20technology%20professionals%20collaborating%20on%20laptops%20and%20digital%20screens%2C%20contemporary%20business%20environment%20with%20deep%20blue%20accent%20lighting%2C%20team%20of%20diverse%20professionals%20working%20together%20on%20IT%20solutions%2C%20clean%20minimalist%20office%20design%20with%20glass%20partitions%20and%20modern%20furniture%2C%20professional%20atmosphere%20with%20focus%20on%20innovation%20and%20teamwork%2C%20soft%20natural%20lighting%20mixed%20with%20blue%20tech%20ambiance&width=1920&height=800&seq=office-collaboration-bg&orientation=landscape"
            alt="Office Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                私たちの強み
              </h2>
              <div className="w-16 h-1 bg-cyan-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 font-medium">
                お客様のビジネスを支える3つの価値
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <i className="ri-focus-3-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  ハンズオン型支援
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  私たちはITの"技術"ではなく"業務"に焦点をあて、現場に深く入り込む「ハンズオン型」の支援を提供しています。
                </p>
              </div>

              <div className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-cyan-500">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <i className="ri-team-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  協業による価値創造
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  当社のサービスは単独で成り立ちません。現場を支える人や協力企業とともに価値ある支援を実現します。
                </p>
              </div>

              <div className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-purple-500">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <i className="ri-rocket-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  成長支援パートナー
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  成長の形が変わっても、真のパートナーであり続けたい。独立・開業を目指す方や法人化を目指す方の支援も行い、前向きなキャリアを応援しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://readdy.ai/api/search-image?query=IT%20consulting%20team%20working%20with%20multiple%20monitors%20displaying%20data%20analytics%20and%20system%20architecture%20diagrams%2C%20modern%20technology%20workspace%20with%20deep%20blue%20ambient%20lighting%2C%20professional%20consultants%20analyzing%20business%20processes%20and%20digital%20transformation%20strategies%2C%20sleek%20office%20environment%20with%20glass%20surfaces%20and%20contemporary%20design%2C%20focus%20on%20innovation%20and%20technical%20expertise%2C%20dynamic%20composition%20suggesting%20speed%20and%20efficiency&width=1920&height=1000&seq=it-consulting-services&orientation=landscape"
            alt="IT Services Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                サービス紹介
              </h2>
              <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="mb-6">
                  <img
                    src="https://readdy.ai/api/search-image?query=Business%20strategy%20meeting%20with%20executives%20discussing%20new%20IT%20initiatives%20around%20conference%20table%2C%20modern%20corporate%20boardroom%20with%20large%20screens%20displaying%20project%20timelines%20and%20business%20metrics%2C%20professional%20atmosphere%20with%20deep%20blue%20accent%20lighting%2C%20focus%20on%20strategic%20planning%20and%20innovation%2C%20clean%20contemporary%20office%20design%20with%20glass%20and%20steel%20elements%2C%20dynamic%20composition%20suggesting%20forward%20momentum%20and%20business%20growth&width=400&height=300&seq=business-strategy-service&orientation=landscape"
                    alt="IT事業推進支援"
                    className="w-full h-48 object-cover object-top rounded-lg"
                  />
                </div>
                <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-lightbulb-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  IT事業推進支援
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  新規事業や社内改革を企画段階から支援。目的明確化、施策立案、実行計画策定まで伴走します。
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="mb-6">
                  <img
                    src="https://readdy.ai/api/search-image?query=IT%20department%20team%20collaborating%20on%20system%20optimization%20and%20process%20improvement%2C%20modern%20office%20workspace%20with%20multiple%20computer%20screens%20showing%20technical%20dashboards%20and%20workflow%20diagrams%2C%20professional%20IT%20specialists%20working%20together%20on%20digital%20transformation%20projects%2C%20contemporary%20office%20environment%20with%20blue%20accent%20lighting%2C%20focus%20on%20teamwork%20and%20technical%20excellence%2C%20clean%20minimalist%20design%20with%20emphasis%20on%20productivity%20and%20efficiency&width=400&height=300&seq=it-department-support&orientation=landscape"
                    alt="IT部門業務支援"
                    className="w-full h-48 object-cover object-top rounded-lg"
                  />
                </div>
                <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-settings-3-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  IT部門業務支援
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  スキル不足や業務遂行力向上のため、業務整理・プロセス改善・進め方指導を通じ部門全体を強化。
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="mb-6">
                  <img
                    src="https://readdy.ai/api/search-image?query=Software%20development%20project%20team%20working%20on%20system%20architecture%20and%20coding%2C%20modern%20tech%20office%20with%20large%20monitors%20displaying%20code%20and%20project%20management%20tools%2C%20professional%20developers%20and%20project%20managers%20collaborating%20on%20software%20solutions%2C%20contemporary%20workspace%20with%20blue%20accent%20lighting%20and%20glass%20partitions%2C%20focus%20on%20technical%20innovation%20and%20project%20delivery%2C%20dynamic%20composition%20suggesting%20progress%20and%20achievement&width=400&height=300&seq=system-development-project&orientation=landscape"
                    alt="システム開発プロジェクト支援"
                    className="w-full h-48 object-cover object-top rounded-lg"
                  />
                </div>
                <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-clipboard-line text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  システム開発プロジェクト支援
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  PMOとして参画し、課題解決や進捗管理、プロジェクト運営の指導を行います。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        id="partners"
        className="py-20 bg-white relative overflow-hidden min-h-screen"
      >
        {/* パララックス背景 */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full opacity-40"
            style={{
              backgroundImage:
                'url("https://readdy.ai/api/search-image?query=Professional%20business%20partnership%20meeting%20with%20diverse%20team%20of%20entrepreneurs%20and%20executives%20shaking%20hands%20and%20collaborating%2C%20modern%20corporate%20environment%20with%20deep%20blue%20lighting%20accents%2C%20focus%20on%20teamwork%20and%20business%20relationships%2C%20contemporary%20office%20setting%20with%20glass%20conference%20rooms%20and%20sleek%20furniture%2C%20atmosphere%20of%20trust%20and%20professional%20cooperation%2C%20dynamic%20composition%20suggesting%20growth%20and%20success%2C%20clean%20minimalist%20design%20with%20emphasis%20on%20partnership%20and%20collaboration&width=1920&height=1000&seq=business-partnership-bg&orientation=landscape")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                パートナー募集
              </h2>
              <div className="w-16 h-1 bg-cyan-500 mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 font-medium">
                私たちは次の3つの形でパートナーを募集しています。
              </p>

              <div className="max-w-4xl mx-auto">
                {/* 強調メッセージ */}
                <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-blue-200 mb-12 transform transition-all duration-300 hover:scale-105">
                  <h3 className="text-3xl font-bold text-blue-900 mb-8 leading-tight">
                    私たちのサービスは、単独では成り立ちません。
                  </h3>

                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center transform transition-all duration-300 hover:scale-110">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                        <i className="ri-user-heart-line text-2xl text-white"></i>
                      </div>
                      <p className="text-lg font-semibold text-gray-800">
                        現場で支える人
                      </p>
                    </div>
                    <div className="text-center transform transition-all duration-300 hover:scale-110">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                        <i className="ri-lightbulb-line text-2xl text-white"></i>
                      </div>
                      <p className="text-lg font-semibold text-gray-800">
                        一緒に考える人
                      </p>
                    </div>
                    <div className="text-center transform transition-all duration-300 hover:scale-110">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                        <i className="ri-building-2-line text-2xl text-white"></i>
                      </div>
                      <p className="text-lg font-semibold text-gray-800">
                        専門性を補完しあう企業
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl">
                    <p className="text-xl text-white font-medium leading-relaxed">
                      そんな多様な
                      <span className="text-yellow-300 font-bold bg-white/20 px-2 py-1 rounded">
                        "仲間"
                      </span>
                      とともに、価値ある支援を実現したいと考えています。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-16">
              {/* 従業員パートナー */}
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border-l-8 border-blue-600 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-6 shadow-xl">
                    <i className="ri-user-star-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-blue-900">
                    従業員パートナー（正社員／パートタイマー）
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* 正社員採用 */}
                  <div className="space-y-6">
                    <div className="flex items-center mb-4">
                      <img
                        src="https://readdy.ai/api/search-image?query=Professional%20business%20consultant%20working%20with%20client%20in%20modern%20office%20environment%2C%20corporate%20executive%20in%20business%20suit%20providing%20IT%20consulting%20services%2C%20contemporary%20office%20setting%20with%20blue%20accent%20lighting%20and%20glass%20surfaces%2C%20focus%20on%20professional%20expertise%20and%20client%20engagement%2C%20dynamic%20composition%20suggesting%20business%20success%20and%20consulting%20excellence%2C%20clean%20minimalist%20design%20with%20emphasis%20on%20professional%20service%20delivery&width=400&height=300&seq=fulltime-employee&orientation=landscape"
                        alt="正社員採用"
                        className="w-24 h-24 rounded-full object-cover object-top mr-4 shadow-lg"
                      />
                      <h4 className="text-2xl font-bold text-blue-900">
                        正社員採用
                      </h4>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-bold text-blue-800 mb-2 flex items-center">
                          <i className="ri-briefcase-line mr-2"></i>
                          職種・業務内容
                        </h5>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          主に当社が受注した案件において、クライアントの課題解決に直接携わっていただきます。
                        </p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-bold text-blue-800 mb-2 flex items-center">
                          <i className="ri-user-search-line mr-2"></i>募集職種
                        </h5>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• ITコンサルタント</li>
                          <li>• 営業担当（外回り・人材フォロー）</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-bold text-blue-800 mb-2 flex items-center">
                          <i className="ri-heart-line mr-2"></i>求める人物像
                        </h5>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• 主体的に動ける方</li>
                          <li>• クライアントの現場を支える意欲のある方</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* パートタイマー採用 */}
                  <div className="space-y-6">
                    <div className="flex items-center mb-4">
                      <img
                        src="https://readdy.ai/api/search-image?query=Professional%20remote%20worker%20in%20home%20office%20setting%20using%20laptop%20for%20business%20operations%2C%20modern%20workspace%20with%20clean%20desk%20setup%20and%20natural%20lighting%2C%20focus%20on%20flexible%20work%20arrangements%20and%20work-life%20balance%2C%20contemporary%20home%20office%20design%20with%20professional%20atmosphere%2C%20dynamic%20composition%20suggesting%20productivity%20and%20remote%20work%20efficiency%2C%20clean%20minimalist%20design%20with%20emphasis%20on%20modern%20working%20styles&width=400&height=300&seq=parttime-employee&orientation=landscape"
                        alt="パートタイマー採用"
                        className="w-24 h-24 rounded-full object-cover object-top mr-4 shadow-lg"
                      />
                      <h4 className="text-2xl font-bold text-cyan-900">
                        パートタイマー採用
                      </h4>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <h5 className="font-bold text-cyan-800 mb-2 flex items-center">
                          <i className="ri-briefcase-line mr-2"></i>
                          職種・業務内容
                        </h5>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          社内から当社業務を支えていただくポジションです。
                        </p>
                      </div>

                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <h5 className="font-bold text-cyan-800 mb-2 flex items-center">
                          <i className="ri-user-search-line mr-2"></i>募集職種
                        </h5>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• 社内事務（会計・請求・受発注など）</li>
                          <li>
                            • リモート営業（IT案件と技術者のマッチング業務）
                          </li>
                        </ul>
                      </div>

                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <h5 className="font-bold text-cyan-800 mb-2 flex items-center">
                          <i className="ri-time-line mr-2"></i>働き方の特徴
                        </h5>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• 週数日／時短勤務可</li>
                          <li>• リモート中心、出社や外出時には手当支給</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 業務委託パートナー */}
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border-l-8 border-purple-600 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mr-6 shadow-xl">
                    <i className="ri-handshake-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-purple-900">
                    業務委託パートナー（個人事業主／法人）
                  </h3>
                </div>

                <div className="flex items-center mb-6">
                  <img
                    src="https://readdy.ai/api/search-image?query=Independent%20IT%20consultant%20working%20on%20consulting%20project%20with%20multiple%20clients%2C%20professional%20freelancer%20in%20modern%20coworking%20space%20with%20laptop%20and%20business%20documents%2C%20contemporary%20workspace%20with%20purple%20accent%20lighting%2C%20focus%20on%20business%20partnership%20and%20professional%20collaboration%2C%20dynamic%20composition%20suggesting%20expertise%20and%20independence%2C%20clean%20minimalist%20design%20with%20emphasis%20on%20consulting%20services%20and%20business%20relationships&width=400&height=300&seq=business-contractor&orientation=landscape"
                    alt="業務委託パートナー"
                    className="w-24 h-24 rounded-full object-cover object-top mr-4 shadow-lg"
                  />
                  <h4 className="text-2xl font-bold text-purple-900">
                    業務委託パートナー
                  </h4>
                </div>

                <div className="space-y-6">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-800 mb-2 flex items-center">
                      <i className="ri-briefcase-line mr-2"></i>業務内容
                    </h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      ITコンサルティングや営業などの業務を、委託契約にてご担当いただける事業者様を募集しています。
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-800 mb-2 flex items-center">
                      <i className="ri-task-line mr-2"></i>対象業務
                    </h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• コンサルティング支援</li>
                      <li>• 営業活動</li>
                      <li>• 人材フォローなど</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-800 mb-2 flex items-center">
                      <i className="ri-star-line mr-2"></i>
                      パートナーシップの特徴
                    </h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      当社が請け負う業務の一部を、専門性のある外部パートナーにお任せします。信頼関係を築ける方を歓迎します。
                    </p>
                  </div>
                </div>
              </div>

              {/* 業務提携パートナー企業 */}
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border-l-8 border-orange-600 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full flex items-center justify-center mr-6 shadow-xl">
                    <i className="ri-building-2-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-orange-900">
                    業務提携パートナー企業
                  </h3>
                </div>

                <div className="flex items-center mb-6">
                  <img
                    src="https://readdy.ai/api/search-image?query=Corporate%20business%20partnership%20meeting%20with%20executives%20from%20different%20companies%20shaking%20hands%20in%20modern%20conference%20room%2C%20professional%20business%20alliance%20and%20collaboration%20between%20IT%20companies%2C%20contemporary%20office%20environment%20with%20orange%20accent%20lighting%2C%20focus%20on%20strategic%20partnership%20and%20business%20cooperation%2C%20dynamic%20composition%20suggesting%20mutual%20growth%20and%20success%2C%20clean%20minimalist%20design%20with%20emphasis%20on%20corporate%20partnership%20and%20business%20development&width=400&height=300&seq=business-partnership&orientation=landscape"
                    alt="業務提携パートナー企業"
                    className="w-24 h-24 rounded-full object-cover object-top mr-4 shadow-lg"
                  />
                  <h4 className="text-2xl font-bold text-orange-900">
                    業務提携パートナー企業
                  </h4>
                </div>

                <div className="space-y-6">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-bold text-orange-800 mb-2 flex items-center">
                      <i className="ri-handshake-line mr-2"></i>提携内容
                    </h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      当社と対等な立場で、協業・連携できる企業様を募集しています。
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-bold text-orange-800 mb-2 flex items-center">
                      <i className="ri-lightbulb-line mr-2"></i>協業例
                    </h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>
                        •
                        技術者リソースを持つ企業様と、当社の業務支援ノウハウを組み合わせた共同提案
                      </li>
                      <li>
                        • システム開発会社様との連携によるトータルIT支援の提供
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-bold text-orange-800 mb-2 flex items-center">
                      <i className="ri-target-line mr-2"></i>目指す関係性
                    </h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      相互に補完しあい、クライアントへより広範で質の高い支援を実現する関係性を目指します。
                    </p>
                  </div>
                </div>
              </div>

              {/* 独立支援について */}
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border-l-8 border-green-600 transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mr-6 shadow-xl">
                    <i className="ri-rocket-line text-2xl text-white"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-green-900">
                    独立支援について
                  </h3>
                </div>

                <div className="flex items-center mb-6">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20business%20mentor%20supporting%20entrepreneur%20in%20starting%20new%20business%20venture%2C%20modern%20office%20setting%20with%20successful%20business%20owner%20providing%20guidance%20to%20aspiring%20independent%20consultant%2C%20contemporary%20workspace%20with%20green%20accent%20lighting%2C%20focus%20on%20mentorship%20and%20business%20development%2C%20dynamic%20composition%20suggesting%20growth%20and%20career%20advancement%2C%20clean%20minimalist%20design%20with%20emphasis%20on%20independence%20and%20professional%20support&width=400&height=300&seq=independence-support&orientation=landscape"
                    alt="独立支援"
                    className="w-24 h-24 rounded-full object-cover object-top mr-4 shadow-lg"
                  />
                  <h4 className="text-2xl font-bold text-green-900">
                    成長のかたちが変わっても、ずっとパートナーでありたい
                  </h4>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      私たちは、
                    </p>
                    <ul className="text-gray-700 text-sm space-y-2 mb-4">
                      <li>• 正社員として働く方が独立・開業を目指すことや、</li>
                      <li>• 個人事業主の方が法人化を目指すことも、</li>
                    </ul>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      それぞれの前向きなキャリアとして応援しています。
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm leading-relaxed mb-2">
                      実際にそのようなキャリアを希望される方に対し、開業準備や業務移行の支援も行っています。
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      形は変わっても、これからも長く共に働ける「真のパートナー」として、成長を応援したいと考えています。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* お問い合わせ案内 */}
            <div className="text-center mt-16 bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
              <p className="text-lg text-gray-700 mb-6 font-medium">
                ご興味のある方はまずご連絡ください。柔軟に対応いたします。
              </p>
              <Link
                href="#contact"
                className="inline-block bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-900 transition-colors cursor-pointer whitespace-nowrap shadow-lg transform hover:scale-105"
              >
                お問い合わせする
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section
        id="company"
        className="py-20 bg-gradient-to-br from-gray-100 to-blue-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20corporate%20headquarters%20building%20exterior%20with%20glass%20facade%20and%20steel%20architecture%2C%20professional%20business%20office%20complex%20with%20contemporary%20design%20and%20blue%20accent%20lighting%2C%20sleek%20urban%20corporate%20environment%20representing%20trust%20and%20stability%2C%20clean%20architectural%20lines%20with%20emphasis%20on%20innovation%20and%20reliability%2C%20dynamic%20composition%20suggesting%20corporate%20success%20and%20growth%2C%20sophisticated%20business%20atmosphere%20with%20focus%20on%20professional%20excellence&width=1920&height=800&seq=corporate-headquarters&orientation=landscape"
            alt="Company Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                会社概要
              </h2>
              <div className="w-16 h-1 bg-cyan-500 mx-auto"></div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      社名
                    </h3>
                    <p className="text-gray-700">
                      株式会社ITソリューション・ラボ
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      所在地
                    </h3>
                    <p className="text-gray-700">
                      神奈川県川崎市高津区久地3-2-21
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      代表
                    </h3>
                    <p className="text-gray-700">松澤順一</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      設立
                    </h3>
                    <p className="text-gray-700">2025年1月</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      事業内容
                    </h3>
                    <p className="text-gray-700">
                      ITコンサル、ソフトウェア開発・保守、クラウド・EC運営など
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      理念
                    </h3>
                    <p className="text-gray-700">
                      新技術・アイデアを研究し、実用的な解決策を提供。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://readdy.ai/api/search-image?query=Professional%20business%20contact%20and%20communication%20concept%20with%20modern%20office%20environment%2C%20corporate%20executives%20engaging%20in%20business%20consultation%20and%20client%20meetings%2C%20contemporary%20workspace%20with%20blue%20accent%20lighting%20and%20glass%20surfaces%2C%20atmosphere%20of%20accessibility%20and%20professional%20service%2C%20focus%20on%20business%20communication%20and%20customer%20support%2C%20dynamic%20composition%20suggesting%20connectivity%20and%20business%20relationships%2C%20clean%20minimalist%20design%20with%20emphasis%20on%20client%20engagement&width=1920&height=800&seq=business-contact-bg&orientation=landscape"
            alt="Contact Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                お問い合わせ
              </h2>
              <div className="w-16 h-1 bg-cyan-400 mx-auto mb-6"></div>
              <p className="text-lg text-cyan-100 font-medium">
                独立支援も受付中（詳細はお問い合わせください）
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl">
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      お名前 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      会社名・団体名
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      メールアドレス *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-900 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    お問い合わせ種別 *
                  </label>
                  <select
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">選択してください</option>
                    <option value="service">サービスについて</option>
                    <option value="partner">パートナー募集について</option>
                    <option value="independence">独立支援について</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    お問い合わせ内容 * (500文字以内)
                  </label>
                  <textarea
                    name="content"
                    required
                    rows={6}
                    maxLength={500}
                    value={formData.content}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.content.length}/500文字
                  </p>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-cyan-400 transition-colors cursor-pointer whitespace-nowrap shadow-lg"
                  >
                    送信する
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-2">
              株式会社ITソリューション・ラボ
            </h3>
            <p className="text-cyan-200 mb-6">神奈川県川崎市高津区久地3-2-21</p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
              <Link
                href="#"
                className="text-cyan-200 hover:text-white transition-colors cursor-pointer"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="#"
                className="text-cyan-200 hover:text-white transition-colors cursor-pointer"
              >
                サイトマップ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
