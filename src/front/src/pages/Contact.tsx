import { Navigation } from "@/components/Navigation";
import { ContactSectionNew } from "@/components/ContactSectionNew";

const Contact = () => {
      return (
            <div className="min-h-screen bg-background font-inter-tight">
                  <Navigation />
                  <div className="pt-20">
                        <ContactSectionNew />
                  </div>
            </div>
      );
};

export default Contact;
