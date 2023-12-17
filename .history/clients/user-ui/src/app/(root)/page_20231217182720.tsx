import HomeScreen from "@/screens/HomeScreen";
import { Overview } from "@/shared/components/rechart.example";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader} from "@/shared/components/ui/card";

export default function Home() {
  return (
    <main>
      <HomeScreen />
      <Button>Hello, world!</Button>
      <Card className="w-[540px] mx-auto">
        <CardHeader>
          <h2>Overview</h2>
        </CardHeader>

        <CardContent className="pl-2">
          <Overview />
        </CardContent>
      </Card>
    </main>
  );
}
