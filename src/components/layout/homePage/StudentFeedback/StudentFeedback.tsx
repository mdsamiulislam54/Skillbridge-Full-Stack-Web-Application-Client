"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const feedbacks = [
  {
    id: "1",
    name: "Samiul Islam",
    rating: 5,
    comment:
      "Tutor was very professional and explained everything clearly. Highly satisfied.",
  },
  {
    id: "2",
    name: "Nusrat Jahan",
    rating: 4,
    comment:
      "The class was good and helpful. A little more practice examples would be great.",
  },
  {
    id: "3",
    name: "Mehedi Hasan",
    rating: 5,
    comment:
      "Excellent teaching style. Concepts were easy to understand and well structured.",
  },
  {
    id: "4",
    name: "Tahsin Ahmed",
    rating: 5,
    comment:
      "One of the best learning experiences I’ve had online. Totally recommended.",
  },
  {
    id: "5",
    name: "Tahsin Ahmed",
    rating: 5,
    comment:
      "One of the best learning experiences I’ve had online. Totally recommended.",
  },
  {
    id: "6",
    name: "Famim Ahmed",
    rating: 5,
    comment:
      "One of the best learning experiences I’ve had online. Totally recommended.",
  },
  

];

export default function StudentFeedbackPage() {
  return (
    <div className="px-4 py-10">
      <div className=" space-y-10">
 
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Student Feedback</h1>
          <p className="text-muted-foreground">
            Real experiences shared by our students
          </p>
        </div>

  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {feedbacks.map((item) => (
            <Card
              key={item.id}
              className="bg-background dark:border-zinc-800"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarFallback>
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <CardTitle className="text-base">
                    {item.name}
                  </CardTitle>

                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  {item.comment}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
