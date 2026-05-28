import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { Building2 } from 'lucide-react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="min-h-screen antialiased" style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)'
        }}>
            <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
                <div className="flex w-full max-w-md flex-col gap-6">
                    <Link
                        href={home()}
                        className="flex flex-col items-center gap-2 font-medium"
                    >
                        <div className="flex h-12 w-12 mb-2 items-center justify-center" style={{
                            background: 'white',
                            borderRadius: '12px'
                        }}>
                            <Building2 className="h-8 w-8 text-blue-600" />
                        </div>
                        <span className="text-2xl font-bold text-white">BIZ</span>
                    </Link>
                    
                    <div className="rounded-2xl p-8" style={{
                        background: 'white',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                    }}>
                        <div className="text-center mb-4">
                            <h1 className="text-3xl font-bold text-black mb-2">
                                {title}
                            </h1>
                            <p className="text-black">
                                {description}
                            </p>
                        </div>
                        
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
