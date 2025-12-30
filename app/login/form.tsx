'use client'

import { useForm } from '@tanstack/react-form'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import LoadingButton from '@/components/loading-button'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { login } from '@/lib/actions/login'
import { loginSchema } from '@/lib/validations/auth/login.schema'

export default function LoginForm() {
    const router = useRouter()
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        validators: {
            onSubmit: loginSchema,
        },
        onSubmit: async ({ value: { email, password } }) => {
            await login({ email, password })
                .then(() => {
                    router.push('/')
                })
                .catch(error => toast.error(error.message))
        },
    })

    return (
        <form
            id="login-form"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
            }}
            className="flex flex-col gap-4 min-w-96"
        >
            <FieldGroup>
                <form.Field name="email">
                    {field => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                            <Field data-invalid={isInvalid}>
                                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={e => field.handleChange(e.target.value)}
                                    aria-invalid={isInvalid}
                                    placeholder="Enter your email address"
                                    autoComplete="off"
                                />
                                {isInvalid && <FieldError errors={field.state.meta.errors} />}
                            </Field>
                        )
                    }}
                </form.Field>
                <form.Field name="password">
                    {field => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                        return (
                            <Field data-invalid={isInvalid}>
                                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={e => field.handleChange(e.target.value)}
                                    aria-invalid={isInvalid}
                                    placeholder="Enter your password"
                                    type="password"
                                    autoComplete="off"
                                />
                                {isInvalid && <FieldError errors={field.state.meta.errors} />}
                            </Field>
                        )
                    }}
                </form.Field>
            </FieldGroup>
            <form.Subscribe selector={state => [state.isSubmitting]}>
                {([isSubmitting]) => (
                    <>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => form.reset()}
                            disabled={isSubmitting}
                        >
                            Reset
                        </Button>
                        <LoadingButton loading={isSubmitting}>
                            {isSubmitting ? 'Logging in...' : 'Login'}
                        </LoadingButton>
                    </>
                )}
            </form.Subscribe>
        </form>
    )
}
