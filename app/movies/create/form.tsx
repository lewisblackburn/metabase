"use client"

import LoadingButton from "@/components/loading-button"
import { Button } from "@/components/ui/button"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { createMovie } from "@/lib/actions/movies/create"
import { createMovieSchema } from "@/lib/validations/movies/create.schema"
import { useForm } from "@tanstack/react-form"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function CreateMovieForm() {
	const router = useRouter();
	const form = useForm({
		defaultValues: {
			title: ""
		},
		validators: {
			onSubmit: createMovieSchema,
		},
		onSubmit: async ({ value: { title } }) => {
			await createMovie({ title }).then(({ body }) => {
				const resolvedTitle = body.data?.insert_movies_one?.title
				const resolvedId = body.data?.insert_movies_one?.id

				toast.success(`Movie "${resolvedTitle}" created successfully`);
				router.push(`/movies/${resolvedId}`)
			}).catch((error) => toast.error(error.message))
		},
	})

	return (
		<form id="create-movie-form"
			onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
				e.preventDefault()
				e.stopPropagation()
				form.handleSubmit()
			}}
			className="flex flex-col gap-4 min-w-96"
		>
			<FieldGroup>
				<form.Field
					name="title"
				>
					{(field) => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel htmlFor={field.name}>Title</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Enter the movie title"
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
			<form.Subscribe
				selector={(state) => [state.isSubmitting]}
			>
				{([isSubmitting]) => (
					<>
						<Button type="button" variant="outline" onClick={() => form.reset()} disabled={isSubmitting}>
							Reset
						</Button>
						<LoadingButton loading={isSubmitting}>
							{isSubmitting ? 'Creating movie...' : 'Create movie'}
						</LoadingButton>
					</>
				)}
			</form.Subscribe>
		</form>

	)
}