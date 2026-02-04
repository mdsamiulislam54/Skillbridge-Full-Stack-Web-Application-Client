// components/tutor/ProfileActions.tsx
import { Button } from "@/components/ui/button";

const TutorProfileActions = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex gap-3">
      <Button className="flex-1">Message</Button>
      <Button variant="outline" className="flex-1">
        Book Tutor
      </Button>
    </div>
  );
};

export default TutorProfileActions;
