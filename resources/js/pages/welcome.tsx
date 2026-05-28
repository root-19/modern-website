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
import Chat from '@/components/Chat';

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
                                BIZ
                            </span>
                        </div>
                        <div className="flex items-center gap-6">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                    className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-base font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-700/40 sm:px-8 sm:py-3 sm:text-lg md:px-10 md:py-4 md:text-xl"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                            className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-base font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-700/40 sm:px-8 sm:py-3 sm:text-lg md:px-10 md:py-4 md:text-xl"
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
                    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:px-8 md:py-32 lg:px-16 lg:py-56">
                        <div className="mx-auto max-w-5xl text-center">
                            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700 sm:mb-10 sm:gap-3 sm:px-6 sm:py-3 sm:text-base">
                                <span className="h-3 w-3 rounded-full bg-blue-600 animate-pulse"></span>
                                Trusted by 500+ Clients
                            </div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight">
                                Building Your Dreams,
                                <br />
                                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                                    One Project at a Time
                                </span>
                            </h1>
                            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:mt-8 sm:text-xl md:mt-10 md:text-2xl lg:text-3xl max-w-4xl mx-auto">
                                Professional construction services with
                                uncompromising quality. From residential to
                                commercial projects, we deliver excellence in
                                every build.
                            </p>
                            <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
                                <button
                                    onClick={() => setIsChatOpen(true)}
                                    className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-base font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-700/40 hover:scale-105 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl"
                                >
                                    Get Free Quote
                                </button>
                                <a
                                    href="#services"
                                    className="rounded-xl border-2 border-blue-600 px-6 py-3 text-base font-bold text-blue-600 transition-all hover:bg-blue-50 hover:border-blue-700 hover:scale-105 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl"
                                >
                                    Our Services
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision and Mission Section */}
                <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24 md:py-32 lg:py-40">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16">
                        <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-24 md:mb-32">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                                Our Vision and Mission
                            </h2>
                        </div>
                        <div className="mx-auto max-w-5xl space-y-12 sm:space-y-16 md:space-y-20">
                            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 md:p-16 border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 sm:text-3xl md:text-4xl">
                                    Our Vision
                                </h3>
                                <p className="text-lg leading-relaxed text-gray-600 sm:text-xl md:text-2xl">
                                    To be the glass and aluminum specialist in the Philippines, leveraging our experience and goodwill to add value to our clients' projects and become the trusted partner for all glass and aluminum solutions.
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 md:p-16 border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 sm:text-3xl md:text-4xl">
                                    Our Mission
                                </h3>
                                <p className="text-lg leading-relaxed text-gray-600 sm:text-xl md:text-2xl">
                                    To deliver premium quality glass and aluminum products and exceptional service by following strict quality guidelines and management direction, ensuring customer satisfaction through excellence in every project.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About BIZ Section */}
                <section className="bg-white py-16 sm:py-24 md:py-32 lg:py-40">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16">
                        <div className="mx-auto max-w-5xl">
                            <div className="text-center mb-16 sm:mb-24 md:mb-32">
                                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">
                                    About BIZ Supply Enterprises
                                </h2>
                                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                                    <span className="h-3 w-3 rounded-full bg-blue-600"></span>
                                    Established in 2003
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-blue-100 shadow-xl">
                                <p className="text-lg leading-relaxed text-gray-700 sm:text-xl md:text-2xl mb-8">
                                    BIZ Supply Enterprises is a recognized organization in the region's glass and aluminum industry, established in 2003. We have positioned ourselves as the leading glass specialist in Metro Manila, providing comprehensive services in design, fabrication, and distribution of glass and aluminum products.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-700 sm:text-xl md:text-2xl mb-8">
                                    With our extensive industry experience, we are positioned to provide quality and innovative glass products and services to our valued clients. Our focus on customer service, technical expertise, and continuous investment in people, products, and technology ensures we deliver excellence in every project.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
                                    <div className="text-center">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white mx-auto mb-4">
                                            <span className="text-2xl font-bold">20+</span>
                                        </div>
                                        <p className="text-lg font-semibold text-gray-900">Years of Experience</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white mx-auto mb-4">
                                            <Building2 className="h-8 w-8" />
                                        </div>
                                        <p className="text-lg font-semibold text-gray-900">Glass Specialist</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white mx-auto mb-4">
                                            <MapPin className="h-8 w-8" />
                                        </div>
                                        <p className="text-lg font-semibold text-gray-900">Metro Manila</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products & Services Section */}
                <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 md:py-32 lg:py-40">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16">
                        <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-24 md:mb-32">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                                Products & Services
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:mt-8 sm:text-xl md:mt-10 md:text-2xl lg:text-3xl">
                                Comprehensive aluminum and glass solutions for all your construction needs
                            </p>
                        </div>
                        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                            <div className="group bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-8 transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 sm:p-10">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-xl">
                                    <Hammer className="h-8 w-8" />
                                </div>
                                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
                                    Aluminum
                                </h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    High-quality aluminum products including windows, doors, frames, and custom aluminum solutions for residential and commercial projects.
                                </p>
                            </div>
                            <div className="group bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-8 transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 sm:p-10">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-xl">
                                    <Square className="h-8 w-8" />
                                </div>
                                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
                                    Glass
                                </h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    Premium glass solutions including tempered glass, laminated glass, decorative glass, and custom glass fabrication for various applications.
                                </p>
                            </div>
                            <div className="group bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-8 transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 sm:p-10">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-xl">
                                    <Building2 className="h-8 w-8" />
                                </div>
                                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
                                    Fit-Out Construction
                                </h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    Complete interior fit-out solutions including space planning, design implementation, and construction management for commercial and residential spaces.
                                </p>
                            </div>
                            <div className="group bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-8 transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 sm:p-10">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-xl">
                                    <Wrench className="h-8 w-8" />
                                </div>
                                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
                                    Architectural Metal Work
                                </h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    Custom architectural metal fabrication including railings, stairs, canopies, and decorative metal elements for modern architectural designs.
                                </p>
                            </div>
                            <div className="group bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-8 transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 sm:p-10 sm:col-span-2 lg:col-span-1">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-xl">
                                    <Box className="h-8 w-8" />
                                </div>
                                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
                                    Modular Systems
                                </h3>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    Innovative modular construction systems and prefabricated components for efficient, cost-effective building solutions with quick assembly.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Projects Section */}
                <section
                    id="projects"
                    className="bg-white py-16 sm:py-24 md:py-32 lg:py-40"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16">
                        <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-24 md:mb-32">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                                Our Completed Projects
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:mt-8 sm:text-xl md:mt-10 md:text-2xl lg:text-3xl">
                                Showcase of our finest aluminum and glass works delivered to satisfied clients
                            </p>
                        </div>
                        
                        <div className="relative">
                            {/* Project Carousel */}
                            <div className="relative mx-auto max-w-5xl">
                                {/* Main Project Display */}
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    {/* Project Image */}
                                    <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                        <div className="text-center">
                                            <Square className="h-20 w-20 text-gray-400 mx-auto mb-4" />
                                            <p className="text-gray-500 font-semibold text-xl">Premium Aluminum Windows</p>
                                            <p className="text-gray-400 text-sm mt-2">Modern Office Building - Makati</p>
                                        </div>
                                    </div>
                                    
                                    {/* Navigation Arrows */}
                                    <button className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white hover:scale-110 sm:left-6 sm:h-14 sm:w-14">
                                        <svg className="h-6 w-6 text-gray-800 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white hover:scale-110 sm:right-6 sm:h-14 sm:w-14">
                                        <svg className="h-6 w-6 text-gray-800 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                                
                                {/* Project Description */}
                                <div className="mt-8 text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                        Premium Aluminum Windows
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600 sm:text-xl md:text-2xl max-w-3xl mx-auto">
                                        Complete installation of high-quality aluminum windows for a modern office building in Makati. Features energy-efficient glass panels and sleek aluminum frames.
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-3 justify-center">
                                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Commercial</span>
                                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">2024</span>
                                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Makati</span>
                                    </div>
                                </div>
                                
                                {/* Project Indicators */}
                                <div className="mt-8 flex justify-center gap-2">
                                    <button className="h-2 w-8 rounded-full bg-blue-600 transition-all"></button>
                                    <button className="h-2 w-2 rounded-full bg-gray-300 transition-all hover:bg-gray-400"></button>
                                    <button className="h-2 w-2 rounded-full bg-gray-300 transition-all hover:bg-gray-400"></button>
                                    <button className="h-2 w-2 rounded-full bg-gray-300 transition-all hover:bg-gray-400"></button>
                                    <button className="h-2 w-2 rounded-full bg-gray-300 transition-all hover:bg-gray-400"></button>
                                    <button className="h-2 w-2 rounded-full bg-gray-300 transition-all hover:bg-gray-400"></button>
                                    <button className="h-2 w-2 rounded-full bg-gray-300 transition-all hover:bg-gray-400"></button>
                                    <button className="h-2 w-2 rounded-full bg-gray-300 transition-all hover:bg-gray-400"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
                    </div>
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16">
                        <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-24 md:mb-32">
                            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                                Why Choose Us
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-blue-100 sm:mt-8 sm:text-xl md:mt-10 md:text-2xl lg:text-3xl">
                                Excellence in every project, commitment in every
                                detail
                            </p>
                        </div>
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:gap-8 md:mt-24 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
                            {features.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-105 sm:gap-5 sm:p-8 md:rounded-2xl md:p-10"
                                >
                                    <CheckCircle2 className="h-8 w-8 flex-shrink-0 text-white sm:h-10 sm:w-10" />
                                    <span className="text-base font-bold text-white sm:text-lg md:text-xl">
                                        {feature}
                                        </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-white py-16 sm:py-24 md:py-32 lg:py-40">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16">
                        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 px-6 py-12 text-center shadow-2xl relative sm:rounded-3xl sm:px-8 sm:py-16 md:px-12 md:py-24">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-white/10 blur-2xl sm:h-32 sm:w-32"></div>
                            <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-white/10 blur-2xl sm:h-32 sm:w-32"></div>
                            <div className="relative">
                                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                                    Ready to Start Your Project?
                                </h2>
                                <p className="mt-6 text-lg leading-relaxed text-blue-100 sm:mt-8 sm:text-xl md:mt-10 md:text-2xl lg:text-3xl">
                                    Contact us today for a free consultation and
                                    quote
                                </p>
                                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:gap-6 md:mt-16 md:flex-row">
                                    <a
                                        href="tel:0949-3333-861"
                                        className="group flex items-center gap-3 rounded-xl bg-white px-6 py-3 text-base font-bold text-blue-600 shadow-xl transition-all hover:bg-blue-50 hover:scale-105 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl"
                                    >
                                        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                                        Call Now
                                    </a>
                                    <a
                                        href="mailto:bizsupplyenterprises@gmail.com"
                                        className="flex items-center gap-3 rounded-xl border-2 border-white px-6 py-3 text-base font-bold text-white transition-all hover:bg-white/20 hover:scale-105 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl"
                                    >
                                        <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                                        Email Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t-2 border-gray-200 bg-gradient-to-b from-gray-50 to-white">
                    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
                            <div className="sm:col-span-2 lg:col-span-1">
                                <div className="flex items-center gap-3 mb-6 sm:gap-4 sm:mb-8">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg sm:h-14 sm:w-14">
                                        <Building2 className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                                    </div>
                                    <span className="text-3xl font-extrabold text-gray-900">
                                        BIZ
                                    </span>
                                </div>
                                <p className="text-lg leading-relaxed text-gray-600">
                                    BIZ Aluminum and Glass Supply Corporation - Professional aluminum and glass solutions you can
                                    trust. Building excellence since 2000.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-6 sm:text-xl sm:mb-8">
                                    Contact
                                </h3>
                                <ul className="space-y-4 text-base text-gray-600 sm:space-y-5 sm:text-lg">
                                    <li className="flex items-center gap-3 sm:gap-4">
                                        <Phone className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
                                        <span className="font-semibold">0949-3333-861</span>
                                    </li>
                                    <li className="flex items-center gap-3 sm:gap-4">
                                        <Phone className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
                                        <span className="font-semibold">0917-576-6985</span>
                                    </li>
                                    <li className="flex items-center gap-3 sm:gap-4">
                                        <Mail className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
                                        <span className="font-semibold">bizsupplyenterprises@gmail.com</span>
                                    </li>
                                    <li className="flex items-center gap-3 sm:gap-4">
                                        <MapPin className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
                                        <span className="font-semibold">123 Construction St, City, State 12345</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-6 sm:text-xl sm:mb-8">
                                    Download Our App
                                </h3>
                                <div className="space-y-4 sm:space-y-5">
                                    <div className="flex items-center gap-3 mb-4 sm:gap-4 sm:mb-6">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg sm:h-12 sm:w-12">
                                            <Smartphone className="h-5 w-5 text-white sm:h-7 sm:w-7" />
                                        </div>
                                        <div>
                                            <p className="text-base font-bold text-gray-900">
                                                BIZ App
                                            </p>
                                            <p className="text-sm text-gray-600 sm:text-base">
                                                Get our mobile app
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-3 sm:space-y-4">
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-sm font-bold text-white shadow-lg transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 sm:px-6 sm:py-4 sm:text-base"
                                        >
                                            <Download className="h-5 w-5 sm:h-6 sm:w-6" />
                                            <span>Download for iOS</span>
                                        </a>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-sm font-bold text-white shadow-lg transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 sm:px-6 sm:py-4 sm:text-base"
                                        >
                                            <Download className="h-5 w-5 sm:h-6 sm:w-6" />
                                            <span>Download for Android</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 border-t-2 border-gray-200 pt-6 text-center sm:mt-12 sm:pt-8 md:mt-16">
                            <p className="text-sm font-semibold text-gray-600 sm:text-base md:text-lg">
                                &copy; {new Date().getFullYear()} BIZ Aluminum and Glass Supply Corporation. All
                                rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>

                {/* Floating Chat Box */}
                <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
                    {!isChatOpen ? (
                        <button
                            onClick={() => setIsChatOpen(true)}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/50 transition-all hover:scale-110 hover:shadow-xl hover:shadow-blue-700/60 sm:h-16 sm:w-16 sm:shadow-2xl"
                            aria-label="Open chat"
                        >
                            <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8" />
                        </button>
                    ) : null}
                </div>

                {/* Chat Modal */}
                <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
            </div>
        </>
    );
}
