import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    Building2,
    Hammer,
    Wrench,
    Paintbrush,
    HardHat,
    CheckCircle2,
    Phone,
    Mail,
    MapPin,
    Home,
    Building,
    Square,
    Box,
    MessageCircle,
    X,
    Smartphone,
    Download,
} from 'lucide-react';
import { useState } from 'react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;
    const [isChatOpen, setIsChatOpen] = useState(false);

    const services = [
        {
            icon: Building2,
            title: 'New Construction',
            description:
                'Complete building construction from ground up with modern design and quality materials.',
        },
        {
            icon: Hammer,
            title: 'Renovation',
            description:
                'Transform your existing space with professional renovation services.',
        },
        {
            icon: Wrench,
            title: 'Maintenance',
            description:
                'Regular maintenance and repair services to keep your property in perfect condition.',
        },
        {
            icon: Paintbrush,
            title: 'Interior Design',
            description:
                'Expert interior design and finishing services for your dream space.',
        },
        {
            icon: HardHat,
            title: 'Commercial Projects',
            description:
                'Large-scale commercial construction projects with professional management.',
        },
    ];

    const features = [
        'Licensed & Insured',
        '20+ Years Experience',
        'Quality Guaranteed',
        'Free Consultations',
    ];

    const renovationProducts = [
        {
            icon: Home,
            title: 'Room Renovation',
            description:
                'Complete room makeovers including flooring, walls, ceilings, and fixtures. Transform any space into your dream room.',
        },
        {
            icon: Building,
            title: 'Condo Renovation',
            description:
                'Specialized condo renovation services. Space optimization, modern designs, and quality finishes for your condominium unit.',
        },
        {
            icon: Square,
            title: 'Window Renovation',
            description:
                'Window replacement and renovation services. Energy-efficient windows, custom designs, and professional installation.',
        },
        {
            icon: Box,
            title: 'Aluminum Products',
            description:
                'High-quality aluminum windows, doors, and frames. Durable, weather-resistant, and modern aluminum solutions for your property.',
        },
    ];

    return (
        <>
            <Head title="Professional Construction Services">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <style>{`
                    body {
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    }
                    h1, h2, h3, h4, h5, h6 {
                        font-family: 'Poppins', sans-serif;
                    }
                `}</style>
            </Head>
            <div className="min-h-screen bg-white antialiased">
                {/* Navigation Header */}
                <header className="sticky top-0 z-50 border-b-2 border-blue-100/80 bg-white/98 backdrop-blur-md shadow-lg">
                    <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6 sm:px-12 lg:px-16">
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-600/30">
                                <Building2 className="h-8 w-8 text-white" />
                            </div>
                            <span className="text-3xl font-extrabold tracking-tight text-gray-900">
                                BuildPro
                            </span>
                        </div>
                        <div className="flex items-center gap-6">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                    className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 text-lg font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-700/40"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                        className="text-lg font-bold text-gray-700 transition-colors hover:text-blue-600"
                                >
                                    Log in
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                            className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 text-lg font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-700/40"
                                    >
                                            Get Started
                                    </Link>
                                )}
                            </>
                        )}
                        </div>
                    </nav>
                </header>

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl"></div>
                    </div>
                    <div className="relative mx-auto max-w-7xl px-8 py-32 sm:px-12 lg:px-16 lg:py-56">
                        <div className="mx-auto max-w-5xl text-center">
                            <div className="mb-10 inline-flex items-center gap-3 rounded-full bg-blue-100 px-6 py-3 text-base font-bold text-blue-700">
                                <span className="h-3 w-3 rounded-full bg-blue-600 animate-pulse"></span>
                                Trusted by 500+ Clients
                            </div>
                            <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-7xl lg:text-8xl xl:text-9xl leading-tight">
                                Building Your Dreams,
                                <br />
                                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                                    One Project at a Time
                                </span>
                            </h1>
                            <p className="mt-12 text-2xl leading-relaxed text-gray-600 sm:text-3xl lg:text-3xl max-w-4xl mx-auto">
                                Professional construction services with
                                uncompromising quality. From residential to
                                commercial projects, we deliver excellence in
                                every build.
                            </p>
                            <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
                                <Link
                                    href={canRegister ? register() : login()}
                                    className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-12 py-5 text-xl font-bold text-white shadow-2xl shadow-blue-600/40 transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-3xl hover:shadow-blue-700/50 hover:scale-105"
                                >
                                    Get Free Quote
                                </Link>
                                <a
                                    href="#services"
                                    className="rounded-2xl border-2 border-blue-600 px-12 py-5 text-xl font-bold text-blue-600 transition-all hover:bg-blue-50 hover:border-blue-700 hover:scale-105"
                                >
                                    Our Services
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section
                    id="services"
                    className="bg-white py-32 sm:py-40"
                >
                    <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
                        <div className="mx-auto max-w-4xl text-center mb-32">
                            <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                                Our Construction Services
                            </h2>
                            <p className="mt-10 text-2xl leading-relaxed text-gray-600 sm:text-3xl">
                                Comprehensive construction solutions tailored to
                                your needs
                            </p>
                        </div>
                        <div className="mx-auto mt-28 grid max-w-2xl grid-cols-1 gap-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {services.map((service) => {
                                const Icon = service.icon;
                                return (
                                    <div
                                        key={service.title}
                                        className="group relative rounded-3xl border-2 border-gray-100 bg-white p-12 shadow-lg transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2"
                                    >
                                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-xl">
                                            <Icon className="h-10 w-10" />
                                        </div>
                                        <h3 className="mt-10 text-3xl font-bold text-gray-900">
                                            {service.title}
                                        </h3>
                                        <p className="mt-6 text-lg leading-relaxed text-gray-600">
                                            {service.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Renovation Products Section */}
                <section
                    id="renovation"
                    className="bg-gradient-to-b from-gray-50 to-white py-32 sm:py-40"
                >
                    <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
                        <div className="mx-auto max-w-4xl text-center mb-32">
                            <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                                Renovation Products & Services
                            </h2>
                            <p className="mt-10 text-2xl leading-relaxed text-gray-600 sm:text-3xl">
                                Specialized renovation solutions for rooms, condos, windows, and aluminum products
                            </p>
                        </div>
                        <div className="mx-auto mt-28 grid max-w-2xl grid-cols-1 gap-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {renovationProducts.map((product) => {
                                const Icon = product.icon;
                                return (
                                    <div
                                        key={product.title}
                                        className="group relative rounded-3xl border-2 border-gray-100 bg-white p-12 shadow-lg transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2"
                                    >
                                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-xl">
                                            <Icon className="h-10 w-10" />
                                        </div>
                                        <h3 className="mt-10 text-3xl font-bold text-gray-900">
                                            {product.title}
                                        </h3>
                                        <p className="mt-6 text-lg leading-relaxed text-gray-600">
                                            {product.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-32 sm:py-40 overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
                    </div>
                    <div className="relative mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
                        <div className="mx-auto max-w-4xl text-center mb-32">
                            <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                                Why Choose Us
                            </h2>
                            <p className="mt-10 text-2xl leading-relaxed text-blue-100 sm:text-3xl">
                                Excellence in every project, commitment in every
                                detail
                            </p>
                        </div>
                        <div className="mx-auto mt-28 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                            {features.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-10 shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-105"
                                >
                                    <CheckCircle2 className="h-10 w-10 flex-shrink-0 text-white" />
                                    <span className="text-xl font-bold text-white">
                                        {feature}
                                        </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-white py-32 sm:py-40">
                    <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
                        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 px-12 py-24 text-center shadow-2xl relative">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
                            <div className="relative">
                                <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                                    Ready to Start Your Project?
                                </h2>
                                <p className="mt-10 text-2xl leading-relaxed text-blue-100 sm:text-3xl">
                                    Contact us today for a free consultation and
                                    quote
                                </p>
                                <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
                                    <a
                                        href="tel:+1234567890"
                                        className="group flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-xl font-bold text-blue-600 shadow-2xl transition-all hover:bg-blue-50 hover:scale-105"
                                    >
                                        <Phone className="h-7 w-7" />
                                        Call Now
                                    </a>
                                    <a
                                        href="mailto:info@buildpro.com"
                                        className="flex items-center gap-3 rounded-2xl border-2 border-white px-10 py-5 text-xl font-bold text-white transition-all hover:bg-white/20 hover:scale-105"
                                    >
                                        <Mail className="h-7 w-7" />
                                        Email Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t-2 border-gray-200 bg-gradient-to-b from-gray-50 to-white">
                    <div className="mx-auto max-w-7xl px-8 py-20 sm:px-12 lg:px-16">
                        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                                        <Building2 className="h-8 w-8 text-white" />
                                    </div>
                                    <span className="text-3xl font-extrabold text-gray-900">
                                        BuildPro
                                    </span>
                                </div>
                                <p className="text-lg leading-relaxed text-gray-600">
                                    Professional construction services you can
                                    trust. Building excellence since 2000.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-8">
                                    Contact
                                </h3>
                                <ul className="space-y-5 text-lg text-gray-600">
                                    <li className="flex items-center gap-4">
                                        <Phone className="h-6 w-6 text-blue-600" />
                                        <span className="font-semibold">+1 (234) 567-890</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <Mail className="h-6 w-6 text-blue-600" />
                                        <span className="font-semibold">info@buildpro.com</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <MapPin className="h-6 w-6 text-blue-600" />
                                        <span className="font-semibold">123 Construction St, City, State 12345</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-8">
                                    Quick Links
                                </h3>
                                <ul className="space-y-5 text-lg text-gray-600">
                                    <li>
                                        <a
                                            href="#services"
                                            className="font-bold hover:text-blue-600 transition-colors"
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#renovation"
                                            className="font-bold hover:text-blue-600 transition-colors"
                                        >
                                            Renovation Products
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="font-bold hover:text-blue-600 transition-colors"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="font-bold hover:text-blue-600 transition-colors"
                                        >
                                            Projects
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-8">
                                    Download Our App
                                </h3>
                                <div className="space-y-5">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg">
                                            <Smartphone className="h-7 w-7 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold text-gray-900">
                                                SerBizyo App
                                            </p>
                                            <p className="text-base text-gray-600">
                                                Get our mobile app
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105"
                                        >
                                            <Download className="h-6 w-6" />
                                            <span>Download for iOS</span>
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105"
                                        >
                                            <Download className="h-6 w-6" />
                                            <span>Download for Android</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 border-t-2 border-gray-200 pt-10 text-center">
                            <p className="text-lg font-semibold text-gray-600">
                                © {new Date().getFullYear()} BuildPro. All
                                rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>

                {/* Floating Chat Box */}
                <div className="fixed bottom-6 right-6 z-50">
                    {!isChatOpen ? (
                        <button
                            onClick={() => setIsChatOpen(true)}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl shadow-blue-600/50 transition-all hover:scale-110 hover:shadow-3xl hover:shadow-blue-700/60"
                            aria-label="Open chat"
                        >
                            <MessageCircle className="h-8 w-8" />
                        </button>
                    ) : (
                        <div className="flex flex-col rounded-2xl bg-white shadow-2xl w-96 h-[500px] border-2 border-gray-200">
                            {/* Chat Header */}
                            <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                                        <MessageCircle className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">
                                            Chat with Us
                                        </h3>
                                        <p className="text-sm text-blue-100">
                                            We're here to help
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsChatOpen(false)}
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
                                    aria-label="Close chat"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Chat Messages */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                                        <Building2 className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div className="flex-1 rounded-2xl bg-gray-100 p-4">
                                        <p className="text-base text-gray-800">
                                            Hello! Welcome to BuildPro. How can we help you with your construction or renovation project today?
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Input */}
                            <div className="border-t-2 border-gray-200 p-4">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        placeholder="Type your message..."
                                        className="flex-1 rounded-xl border-2 border-gray-200 px-4 py-3 text-base focus:border-blue-600 focus:outline-none"
                                    />
                                    <button
                                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white transition-all hover:from-blue-700 hover:to-blue-800 hover:scale-105"
                                        aria-label="Send message"
                                    >
                                        <MessageCircle className="h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
