'use client';

import { SingleTutorProfile, TutorSlot } from '@/type/single.tutor.type';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Clock } from 'lucide-react';
import { useState } from 'react';
import { useClientSession } from '@/hook/authentication/useClientSession';
import { SlotsType } from '@/type/slots.type';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import useStudent from '@/hook/student/useBooking';
import useBooking from '@/hook/student/useBooking';
import { Spinner } from '@/components/ui/spinner';
import { BookingType } from '@/type/booking.type';



const TutorSlotCard = ({ tutor }: { tutor: SingleTutorProfile }) => {
    const router = useRouter()
    const { user } = useClientSession()

    const { mutate, isPending } = useBooking()
    const [loadingSlotId, setLoadingSlotId] = useState<string | null>(null);

    const handleBooking = async (slot: SlotsType) => {
        if (!user) {
            toast.error('Please Login fast ', {
                position: "top-center", onAutoClose() {
                    return router.push('/auth/login')
                },
            })
            return;
        }
        setLoadingSlotId(slot.id);

        const payload: BookingType = {
            userId: user?.id,
            tutorProfileId: slot.tutorId || '',
            tutorSlotsId: slot.id,
            totalPrice: Number(Number(slot.hourlyRate * Number(slot.duration) / 60).toFixed(2)) || 0
        }

        mutate(payload, {
            onSettled: () => {
                setLoadingSlotId(null)
            }
        })
        console.log(payload)

    }
    return (

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 '>
            {
                tutor.tutorSlots.map((slot) => {
                    return (
                        <Card key={slot.id} className="hover:shadow-md transition-shadow p-0">
                            <CardContent className="p-5 space-y-4">

                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">
                                        {slot.startTime} – {slot.endTime}
                                    </h3>

                                    <Badge variant="outline">
                                        {slot.teachingMode}
                                    </Badge>
                                </div>


                                <div className="text-sm text-muted-foreground space-y-1">
                                    <p className="flex items-center gap-2">
                                        <BookOpen className="w-5 h-5 text-blue-600" />
                                        <span>
                                            Category: <span className="font-medium text-foreground">{slot.category}</span>
                                        </span>
                                    </p>

                                    <p className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-blue-600" />
                                        <span>Max Students: {slot.maxStudent || 'Unlimited'}</span>
                                    </p>

                                    <p className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-purple-600" />
                                        <span>Duration: {slot.duration} minutes</span>
                                    </p>
                                </div>



                                <div className="flex items-center justify-between pt-2">
                                    <p className="text-lg font-bold">
                                        ৳{slot.hourlyRate}
                                        <span className="text-sm font-normal text-muted-foreground"> / hour</span>
                                    </p>

                                    <Button
                                        className='cursor-pointer'
                                        onClick={() => handleBooking(slot)}
                                        disabled={!slot.isActive || loadingSlotId === slot.id}

                                    >
                                        {loadingSlotId === slot.id ? <Spinner /> : " Book Now"}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </div>

    );
};

export default TutorSlotCard;
