import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const ProfilePage = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16" />
            <div>
              <p className="text-lg font-medium">Username</p>
              <p className="text-sm text-muted-foreground">Bio goes here...</p>
            </div>
          </div>
        </CardHeader>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img
          src="https://via.placeholder.com/300"
          alt="User Post"
          className="w-full rounded-md"
        />
        {/* Add more user posts here */}
      </div>
    </div>
  );
};

export default ProfilePage;