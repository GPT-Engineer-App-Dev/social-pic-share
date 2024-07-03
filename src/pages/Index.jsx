import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10" />
            <div>
              <p className="text-sm font-medium">Username</p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <img
              src="https://via.placeholder.com/600"
              alt="Post"
              className="w-full rounded-md"
            />
            <p className="text-sm">This is a caption for the photo.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Add more posts here */}
    </div>
  );
};

export default Index;