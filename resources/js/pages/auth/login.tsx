import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { dashboard } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Form, Head, router } from '@inertiajs/react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: LoginProps) {
    return (
        <AuthLayout
            title="Welcome Back"
            description="Enter your credentials to access your account"
        >
            <Head title="Sign In - BIZ" />

            {status && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl text-center text-sm font-medium text-green-700">
                    {status}
                </div>
            )}

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                onSuccess={() => {
                    // Redirect to dashboard after successful login
                    router.visit(dashboard());
                }}
                className="flex flex-col gap-5"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-black">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
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
                                <div className="flex justify-between items-center">
                                    <Label htmlFor="password" className="text-sm font-medium text-black">Password</Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                                            tabIndex={5}
                                            style={{
                                                color: '#3b82f6',
                                                transition: 'color 0.3s ease'
                                            }}
                                        >
                                            Forgot password?
                                        </TextLink>
                                    )}
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 transition-all duration-300 focus:border-blue-500 focus:ring-blue-500"
                                    style={{
                                        border: '2px solid #e5e7eb',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="flex items-center">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    tabIndex={3}
                                    className="mr-2 border-gray-300 text-blue-600 focus:ring-blue-500 rounded"
                                />
                                <Label htmlFor="remember" className="text-sm text-black">Remember me</Label>
                            </div>

                            <div className="pt-2">
                                <Button
                                    type="submit"
                                    className="w-full py-3 font-semibold rounded-lg"
                                    tabIndex={4}
                                    disabled={processing}
                                    data-test="login-button"
                                    style={{
                                        background: 'white',
                                        border: '2px solid #e5e7eb',
                                        color: 'black',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {processing && <Spinner className="mr-2" />}
                                    Sign In
                                </Button>
                            </div>
                        </div>

                        {canRegister && (
                            <div className="text-center pt-4 border-t border-gray-200">
                                <span className="text-sm text-black">Don't have an account? </span>
                                <TextLink 
                                    href={register()} 
                                    tabIndex={5} 
                                    className="text-sm text-blue-600 hover:text-blue-800 font-medium ml-1"
                                    style={{
                                        color: '#3b82f6',
                                        transition: 'color 0.3s ease'
                                    }}
                                >
                                    Sign up
                                </TextLink>
                            </div>
                        )}
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
