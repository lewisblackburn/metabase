// 'use client'

// import { useForm } from '@tanstack/react-form'
// import { toast } from 'sonner'

// import LoadingButton from '@/components/loading-button'
// import { Button } from '@/components/ui/button'
// import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
// import { Textarea } from '@/components/ui/textarea'
// import { ratingSchema } from '@/lib/validations/ratings/rating.schema'

// // <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
// //     <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
// //     <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
// //     <DropdownMenuRadioItem value="right" disabled>
// //         Right
// //     </DropdownMenuRadioItem>
// // </DropdownMenuRadioGroup>

// interface RatingFormProps {
//     onOpenChange: (open: boolean) => void
//     onCancel: () => void
// }

// export function RatingForm({ onOpenChange, onCancel }: RatingFormProps) {
//     const form = useForm({
//         defaultValues: {
//             rating: '5',
//             comment: '',
//         },
//         validators: {
//             onSubmit: ratingSchema,
//         },
//         onSubmit: async ({ value }) => {
//             await new Promise(res => setTimeout(res, 1000))
//             toast.success(`Submitted rating: ${value.rating}/5`)
//             onOpenChange(false)
//         },
//     })

//     return (
//         <form
//             id="rating-form"
//             onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
//                 e.preventDefault()
//                 e.stopPropagation()
//                 form.handleSubmit()
//             }}
//             className="flex flex-col gap-4 pt-4"
//         >
//             <FieldGroup>
//                 <form.Field name="rating">
//                     {field => {
//                         const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
//                         return (
//                             <Field data-invalid={isInvalid}>
//                                 <FieldLabel>Rating</FieldLabel>
//                                 <RatingSelector
//                                     value={field.state.value}
//                                     onChange={field.handleChange}
//                                 />
//                                 {isInvalid && <FieldError errors={field.state.meta.errors} />}
//                             </Field>
//                         )
//                     }}
//                 </form.Field>

//                 <form.Field name="comment">
//                     {field => {
//                         const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
//                         return (
//                             <Field data-invalid={isInvalid}>
//                                 <FieldLabel htmlFor={field.name}>Comment</FieldLabel>
//                                 <Textarea
//                                     id={field.name}
//                                     name={field.name}
//                                     value={field.state.value}
//                                     onBlur={field.handleBlur}
//                                     onChange={e => field.handleChange(e.target.value)}
//                                     aria-invalid={isInvalid}
//                                     placeholder="Type your message here."
//                                     maxLength={500}
//                                 />
//                                 {isInvalid && <FieldError errors={field.state.meta.errors} />}
//                                 <p className="text-muted-foreground text-sm">
//                                     {500 - field.state.value.length}/500 characters left
//                                 </p>
//                             </Field>
//                         )
//                     }}
//                 </form.Field>
//             </FieldGroup>
//             <form.Subscribe selector={state => [state.isSubmitting]}>
//                 {([isSubmitting]) => (
//                     <div className="flex justify-end gap-2">
//                         <Button
//                             type="button"
//                             variant="outline"
//                             onClick={() => form.reset()}
//                             disabled={isSubmitting}
//                         >
//                             Reset
//                         </Button>
//                         <LoadingButton loading={isSubmitting}>
//                             {isSubmitting ? 'Submitting...' : 'Submit'}
//                         </LoadingButton>
//                     </div>
//                 )}
//             </form.Subscribe>
//         </form>
//     )
// }
