"use client";
import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { FieldError } from "@/components/ui/field";
import useCreateReview from "@/hook/student/useCreateReview";
import {  ReviewForm } from "@/type/Review.type";
import { Spinner } from "@/components/ui/spinner";
const reviewSchema = z.object({
    rating: z
        .number()
        .min(1, "Rating must be at least 1")
        .max(5, "Rating cannot be more than 5"),
    comment: z
        .string()
        .min(5, "Comment must be at least 5 characters"),
});
type Props = {
    tutorProfileId: string;
    bookingId?: string;
    onClose: () => void
};

const LeaveReview = ({ tutorProfileId, bookingId, onClose }: Props) => {
    const { mutate, isPending } = useCreateReview()
    const form = useForm({
        defaultValues: {
            rating: 5,
            comment: "",
        },
        validators: {
            onSubmit: reviewSchema
        },
        onSubmit: async ({ value }) => {
            const payload: ReviewForm = {
                ...value,
                tutorProfileId,
                bookingId,
            };

       
            mutate({ data: payload }, {
                onSuccess: () => {
                    onClose()
                }
            })


        },
    });

    return (
        <Card className="max-w-md ">
            <CardHeader>
                <CardTitle>Leave a Review</CardTitle>
            </CardHeader>

            <CardContent>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        form.handleSubmit();
                    }}
                    className="space-y-4"
                >
            
                    <form.Field
                        name="rating"
                        validators={{
                            onChange: reviewSchema.shape.rating,
                        }}
                    >
                        {(field) => (
                            <div className="space-y-1">
                                <label className="text-sm font-medium">Rating (1–5)</label>
                                <Input
                                    type="number"
                                    min={1}
                                    max={5}
                                    value={field.state.value}
                                    onChange={(e) =>
                                        field.handleChange(Number(e.target.value))
                                    }
                                />
                                {field.state.meta.errors && (
                                    <p className="text-sm text-red-500">
                                        <FieldError errors={field.state.meta.errors} />
                                    </p>
                                )}
                            </div>
                        )}
                    </form.Field>

                 
                    <form.Field
                        name="comment"
                        validators={{
                            onChange: reviewSchema.shape.comment,
                        }}
                    >
                        {(field) => (
                            <div className="space-y-1">
                                <label className="text-sm font-medium">Comment</label>
                                <Textarea
                                    placeholder="Write your experience..."
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                />
                                {field.state.meta.errors && (
                                    <p className="text-sm text-red-500">
                                        <FieldError errors={field.state.meta.errors} />
                                    </p>
                                )}
                            </div>
                        )}
                    </form.Field>

                    <Button type="submit" className="w-full cursor-pointer">
                        {isPending ? <Spinner /> : " Submit Review"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default LeaveReview;
