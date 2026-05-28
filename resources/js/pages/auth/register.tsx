import { login } from '@/routes';
import { dashboard } from '@/routes';
import { store } from '@/routes/register';
import { Form, Head, router } from '@inertiajs/react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';

export default function Register() {
    return (
        <AuthLayout
            title="Create Account"
            description="Join us today and get started"
        >
            <Head title="Create Account - BIZ" />
            <Form
                {...store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                onSuccess={() => {
                    // Redirect to dashboard after successful registration
                    router.visit(dashboard());
                }}
                className="flex flex-col gap-5"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-sm font-medium text-black">Full Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="name"
                                    name="name"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 transition-all duration-300 focus:border-blue-500 focus:ring-blue-500"
                                    style={{
                                        border: '2px solid #e5e7eb',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-black">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    name="email"
                                    placeholder="email@example.com"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 transition-all duration-300 focus:border-blue-500 focus:ring-blue-500"
                                    style={{
                                        border: '2px solid #e5e7eb',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-medium text-black">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    name="password"
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 transition-all duration-300 focus:border-blue-500 focus:ring-blue-500"
                                    style={{
                                        border: '2px solid #e5e7eb',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password_confirmation" className="text-sm font-medium text-black">
                                    Confirm Password
                                </Label>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    required
                                    tabIndex={4}
                                    autoComplete="new-password"
                                    name="password_confirmation"
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 transition-all duration-300 focus:border-blue-500 focus:ring-blue-500"
                                    style={{
                                        border: '2px solid #e5e7eb',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                <InputError
                                    message={errors.password_confirmation}
                                />
                            </div>

                            <div className="pt-2">
                                <Button
                                    type="submit"
                                    className="w-full py-3 font-semibold rounded-lg"
                                    tabIndex={5}
                                    data-test="register-user-button"
                                    style={{
                                        background: 'white',
                                        border: '2px solid #e5e7eb',
                                        color: 'black',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {processing && <Spinner className="mr-2" />}
                                    Create Account
                                </Button>
                            </div>
                        </div>

                        <div className="text-center pt-4 border-t border-gray-200">
                            <span className="text-sm text-black">Already have an account? </span>
                            <TextLink 
                                href={login()} 
                                tabIndex={6} 
                                className="text-sm text-blue-600 hover:text-blue-800 font-medium ml-1"
                                style={{
                                    color: '#3b82f6',
                                    transition: 'color 0.3s ease'
                                }}
                            >
                                Sign in
                            </TextLink>
                        </div>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
