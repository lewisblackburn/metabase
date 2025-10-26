"use client"

import { Button } from "@/components/ui/button"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { login } from "@/lib/actions/auth/login"
import { loginSchema } from "@/lib/validations/auth/login.schema"
import { useForm } from "@tanstack/react-form"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function LoginForm() {
	const router = useRouter();
	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		validators: {
			onSubmit: loginSchema,
		},
		onSubmit: async ({ value: { email, password } }) => {
			await login({ email, password }).then(() => {
				router.push('/')
			}).catch((error) => toast.error(error.message))
		},
	})

	return (
		<form id="login-form"
			onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
				e.preventDefault()
				form.handleSubmit()
			}}
		>
			<FieldGroup>
				<form.Field
					name="email"
				>
					{(field) => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel htmlFor={field.name}>Email</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Enter your email address"
									autoComplete="off"
								/>
								{isInvalid && (
									<FieldError errors={field.state.meta.errors} />
								)}
							</Field>
						)
					}}
				</form.Field>
				<form.Field
					name="password"
				>
					{(field) => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel htmlFor={field.name}>Password</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Enter your password"
									type="password"
									autoComplete="off"
								/>
								{isInvalid && (
									<FieldError errors={field.state.meta.errors} />
								)}
							</Field>
						)
					}}
				</form.Field>
			</FieldGroup>
			<Button type="button" variant="outline" onClick={() => form.reset()}>
				Reset
			</Button>
			<Button type="submit" form="login-form" disabled={form.state.isSubmitting}>
				{form.state.isSubmitting ? 'Submitting...' : 'Submit'}
			</Button>
		</form>

	)
}