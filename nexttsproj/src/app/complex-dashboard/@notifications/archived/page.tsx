import Card from "@/components/card/page";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      Archived Section
      <Link href={"/complex-dashboard"}>notification Section</Link>
    </Card>
  );
}
