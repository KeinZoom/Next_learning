import Card from "@/components/card/page";
import Link from "next/link";

export default function Notification() {
  return <Card>Notification Section
    <Link href={"/complex-dashboard/archived"}>Archived</Link>
  </Card>;
}
