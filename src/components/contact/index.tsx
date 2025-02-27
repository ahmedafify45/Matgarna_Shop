import MainHeading from "@/components/main-heading";
import { Routes } from "@/constants/enums";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";
import ContactForm from "./ContactForm";
import { MailIcon, MapIcon, PhoneCall } from "lucide-react";

const Contact = async () => {
  const locale = await getCurrentLocale();
  const { home } = await getTrans(locale);
  const { contact } = home;
  return (
    <section className="section-gap" id={Routes.CONTACT}>
      <div className="container text-center">
        <MainHeading
          subTitle={contact["Don'tHesitate"]}
          title={contact.contactUs}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 items-center gap-8">
          {/* Contact Info */}
          <div className="space-y-6 text-left">
            {[
              { Icon: MapIcon, text: "12 Street, Dakahlia" },
              { Icon: MailIcon, text: "aafify326@gmail.com" },
              { Icon: PhoneCall, text: "+20123456789" },
            ].map(({ Icon, text }, index) => (
              <div key={index} className="flex items-center gap-3 text-primary">
                <Icon className="w-5 h-5" />
                <p className="text-gray-500">{text}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
