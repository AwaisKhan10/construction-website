"use client";

import { useTranslations } from "next-intl";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { serviceKeys } from "@/data/services";
import { Phone, Mail, MessageCircle, MapPin, AlertTriangle } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tServices = useTranslations("services");

  const offices = [
    { city: "Frankfurt", address: "Frankfurter Str. 100, 65760 Frankfurt", phone: "+49 69 1234 5678" },
    { city: "Paris", address: "12 Avenue des Champs-Élysées, 75008 Paris", phone: "+33 1 2345 6789" },
    { city: "Dubai", address: "Sheikh Zayed Road, Business Bay, Dubai", phone: "+971 4 123 4567" },
  ];

  return (
    <>
      <PageHero
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        image="https://images.unsplash.com/photo-1423666639047-7eb312a7f3b3?w=1920&q=80"
      />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold mb-6">{t("title")}</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder={t("form.name")} className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm focus:outline-none focus:border-secondary" />
                  <input type="email" placeholder={t("form.email")} className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm focus:outline-none focus:border-secondary" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="tel" placeholder={t("form.phone")} className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm focus:outline-none focus:border-secondary" />
                  <input type="text" placeholder={t("form.company")} className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm focus:outline-none focus:border-secondary" />
                </div>
                <select className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm focus:outline-none focus:border-secondary text-muted">
                  <option value="">{t("form.selectService")}</option>
                  {serviceKeys.map((key) => (
                    <option key={key} value={key}>{tServices(`list.${key}.title`)}</option>
                  ))}
                </select>
                <textarea placeholder={t("form.message")} rows={5} className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm focus:outline-none focus:border-secondary resize-none" />
                <Button type="submit" className="w-full sm:w-auto">{t("form.submit")}</Button>
              </form>

              <div className="flex flex-wrap gap-4 mt-8">
                <a href="tel:+496912345678" className="flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-sm text-sm hover:border-secondary transition-colors">
                  <Phone className="w-4 h-4 text-secondary" /> {t("call")}
                </a>
                <a href="mailto:info@meridianbuild.com" className="flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-sm text-sm hover:border-secondary transition-colors">
                  <Mail className="w-4 h-4 text-secondary" /> {t("email")}
                </a>
                <a href="https://wa.me/496912345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-card border border-border rounded-sm text-sm hover:border-secondary transition-colors">
                  <MessageCircle className="w-4 h-4 text-secondary" /> {t("whatsapp")}
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-extrabold mb-6">{t("offices")}</h3>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div key={office.city} className="p-5 bg-card border border-border rounded-sm">
                      <h4 className="font-bold mb-2">{office.city}</h4>
                      <p className="text-muted text-sm flex items-start gap-2 mb-1">
                        <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        {office.address}
                      </p>
                      <p className="text-muted text-sm flex items-center gap-2">
                        <Phone className="w-4 h-4 text-secondary" />
                        {office.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-secondary/10 border border-secondary/30 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="w-5 h-5 text-secondary" />
                  <h4 className="font-bold">{t("emergency")}</h4>
                </div>
                <p className="text-muted text-sm mb-2">{t("emergencyText")}</p>
                <a href="tel:+496912345999" className="text-secondary font-bold text-lg">+49 69 1234 5999</a>
              </div>

              <div className="relative aspect-[16/9] rounded-sm overflow-hidden bg-card border border-border">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.0!2d8.6821!3d50.1109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA2JzM5LjIiTiA4wrA0MCc1NS42IkU!5e0!3m2!1sen!2sde!4v1"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
