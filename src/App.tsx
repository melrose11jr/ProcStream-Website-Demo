import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  Clock,
  FileText,
  Handshake,
  Rocket,
  Shield,
  Star,
  Timer,
  Users,
} from "lucide-react";
import { HeroDemo } from "./components/blocks/code.demo"; // Hero section
import { NavBar } from "./components/blocks/navigationmenu/tubelight-navbar"; // NavBar component
import { Home, Info, Settings, Contact } from "lucide-react"; // Example icons for Nav items

function App() {
  const navItems = [
    {
      name: "Home",
      url: "/",
      icon: Home,
    },
    {
      name: "About",
      url: "/about",
      icon: Info,
    },
    {
      name: "Services",
      url: "/services",
      icon: Settings,
    },
    {
      name: "Contact",
      url: "/contact",
      icon: Contact,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <NavBar items={navItems} className="" />

      {/* New Hero Section */}
      <HeroDemo />

      {/* Pain Point Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Procurement in Oil & Gas is Complex. We Make it Seamless.
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              ProcStream is an AI-powered procurement ecosystem built for Libya's
              oil & gas sector. Whether you're a procurement officer or supplier,
              our platform ensures you close contracts faster, reduce risks, and
              maximize profitability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
              <div className="flex items-center gap-2">
                <Activity className="text-blue-400" />
                <span>AI-Powered RFQ Matching</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-blue-400" />
                <span>Verified Supplier Network</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="text-blue-400" />
                <span>Automated Contract Review & Risk Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-blue-400" />
                <span>Priority Access to Top Suppliers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border">
              <CardContent className="p-6">
                <Rocket className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  AI That Speeds Up Procurement
                </h3>
                <p className="text-gray-400">
                  Say goodbye to slow, error-prone RFQs. Our AI ensures accurate
                  RFQ descriptions and matches them with the most relevant
                  suppliers.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border">
              <CardContent className="p-6">
                <Handshake className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Stronger Supplier Relationships
                </h3>
                <p className="text-gray-400">
                  In Libya, relationships matter. Our Supplier Relationship
                  Management (SRM) tool ensures priority treatment, better pricing,
                  and stronger partnerships.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border">
              <CardContent className="p-6">
                <AlertCircle className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Risk-Free Contracts</h3>
                <p className="text-gray-400">
                  Mitigate legal exposure, optimize contract terms, and forecast
                  potential issues before they arise.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border">
              <CardContent className="p-6">
                <Timer className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Efficiency That Saves Time & Money
                </h3>
                <p className="text-gray-400">
                  80% of procurement processes can be automated. We streamline your
                  operations so you can focus on high-value deals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Submit an RFQ</h3>
              <p className="text-gray-400">
                AI optimizes and matches it with verified suppliers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Receive & Manage Bids</h3>
              <p className="text-gray-400">
                Compare offers, assess risk, and negotiate terms – all in one
                platform.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Close Deals with Confidence</h3>
              <p className="text-gray-400">
                Automate contract review, ensure compliance, and execute faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Trusted by Industry Leaders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "ProcStream transformed our procurement process—faster deals,
                    lower risks, and better supplier relationships!"
                  </p>
                  <p className="font-semibold">Industry Leader</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border">
                <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Finally, a procurement tool designed for the realities of the
                    Libyan oil & gas market."
                  </p>
                  <p className="font-semibold">Procurement Manager</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-t from-blue-900/20 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Procurement Without the Headaches
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              AI-Powered & Built for Oil & Gas. Get Started Free Today – No Credit
              Card Required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Sign Up Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;