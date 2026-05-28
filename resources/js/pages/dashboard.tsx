import { login, register } from '@/routes';
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
    Smartphone,
    MessageCircle,
} from 'lucide-react';
import Chat from '@/components/Chat';
import { useState } from 'react';

export default function Dashboard() {
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
            <Head>
                <title>BIZ Dashboard</title>
                <meta name="csrf-token" content="{{ csrf_token() }}" />
            </Head>

            {/* Header */}
            <header className="absolute inset-x-0 top-0 z-50 bg-white shadow-md">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">BIZ</span>
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm sm:h-10 sm:w-10">
                                <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                        </Link>
                    </div>
                    <div className="flex lg:flex-1 lg:justify-end">
                        <Link href="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">
                            Back to Home
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>
                </div>
                
                <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 md:px-8 md:py-40 lg:px-16 lg:py-48">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                            BIZ Aluminum and Glass Supply Corporation
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-blue-100 sm:text-xl md:mt-8 md:text-2xl lg:text-3xl">
                            Professional aluminum and glass solutions you can trust. Building excellence since 2003.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:gap-6 md:mt-16 md:flex-row">
                            <a
                                href="tel:0949-3333-861"
                                className="group flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-bold text-blue-600 shadow-xl transition-all hover:bg-blue-50 hover:scale-105 sm:rounded-2xl sm:px-10 sm:py-5 sm:text-lg md:px-12 md:py-6 md:text-xl"
                            >
                                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                                Call Now
                            </a>
                            <a
                                href="mailto:bizsupplyenterprises@gmail.com"
                                className="flex items-center gap-3 rounded-xl border-2 border-white px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/20 hover:scale-105 sm:rounded-2xl sm:px-10 sm:py-5 sm:text-lg md:px-12 md:py-6 md:text-xl"
                            >
                                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision and Mission Section */}
            <section className="bg-white py-16 sm:py-24 md:py-32 lg:py-40">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-24 md:mb-32">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                            Vision & Mission
                        </h2>
                    </div>
                    <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 sm:p-10 md:p-12 border-2 border-blue-200 shadow-lg">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6 sm:text-3xl md:text-4xl">Vision</h3>
                            <p className="text-lg leading-relaxed text-blue-800">
                                To be the glass and aluminum specialist in the Philippines, leveraging our experience and goodwill to add value to our clients' projects and become the trusted partner for all glass and aluminum solutions.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-10 md:p-12 border-2 border-gray-200 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 sm:text-3xl md:text-4xl">Mission</h3>
                            <p className="text-lg leading-relaxed text-gray-800">
                                To deliver premium quality glass and aluminum products and exceptional service by following strict quality guidelines and management direction, ensuring customer satisfaction through excellence in every project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About BIZ Section */}
            <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 md:py-32 lg:py-40">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-24 md:mb-32">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                            About BIZ Supply Enterprises
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:mt-8 sm:text-xl md:mt-10 md:text-2xl lg:text-3xl">
                            Your trusted partner for premium aluminum and glass solutions since 2003
                        </p>
                    </div>
                    <div className="mx-auto max-w-6xl">
                        <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 p-8 sm:p-10 md:p-12 lg:p-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 sm:text-3xl">Who We Are</h3>
                                    <p className="text-lg leading-relaxed text-gray-600 mb-8">
                                        BIZ Aluminum and Glass Supply Corporation has been a leading provider of high-quality aluminum and glass solutions in the Philippines for over two decades. We specialize in residential, commercial, and industrial projects, delivering exceptional craftsmanship and innovative designs.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                                                <CheckCircle2 className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Established in 2003</p>
                                                <p className="text-gray-600">20+ years of excellence</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                                                <CheckCircle2 className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Licensed & Insured</p>
                                                <p className="text-gray-600">Fully certified professionals</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 sm:text-3xl">Contact Information</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                                                <Phone className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Mobile</p>
                                                <p className="text-gray-600">0949-3333-861</p>
                                                <p className="text-gray-600">0917-576-6985</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                                                <Mail className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Email</p>
                                                <p className="text-gray-600">bizsupplyenterprises@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                                                <MapPin className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Location</p>
                                                <p className="text-gray-600">Metro Manila</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products & Services Section */}
            <section className="bg-white py-16 sm:py-24 md:py-32 lg:py-40">
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

            {/* Our Completed Projects Section */}
            <section id="projects" className="bg-white py-16 sm:py-24 md:py-32 lg:py-40">
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

            {/* CTA Section */}
            <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 md:py-32 lg:py-40">
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
                                trust. Building excellence since 2003.
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
                                <div className="flex flex-col gap-3">
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 bg-black px-4 py-3 text-white transition-all hover:border-gray-400 hover:bg-gray-800 sm:px-6 sm:py-4"
                                    >
                                        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                        </svg>
                                        <span className="ml-2 text-sm font-medium">App Store</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 bg-black px-4 py-3 text-white transition-all hover:border-gray-400 hover:bg-gray-800 sm:px-6 sm:py-4"
                                    >
                                        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M3.609 1.814L13.792 12 3.61 22.186a1.016 1.016 0 0 1-1.003-.242c-.188-.188-.293-.442-.293-.708V2.764c0-.266.105-.52.293-.708a1.016 1.016 0 0 1 1.003-.242zm10.89 4.466l4.967 4.967-4.967 4.967V6.28zm4.967 4.967l4.967 4.967-4.967 4.967V6.28z"/>
                                        </svg>
                                        <span className="ml-2 text-sm font-medium">Google Play</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t-2 border-gray-200 pt-8 sm:mt-16 sm:pt-12">
                        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                            <p className="text-center text-lg leading-relaxed text-gray-600 sm:text-left">
                                © 2024 BIZ Aluminum and Glass Supply Corporation. All rights reserved.
                            </p>
                            <div className="flex items-center gap-6">
                                <a href="#" className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating Chat Button */}
            <button
                onClick={() => setIsChatOpen(true)}
                className={`fixed bottom-6 right-6 h-14 w-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-50 ${
                    isChatOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                }`}
            >
                <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Chat Component */}
            <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

                    </>
    );
}
