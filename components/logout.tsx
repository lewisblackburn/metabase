"use client"

import { Button } from "./ui/button";
import logout from "@/lib/actions/auth/logout";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Logout() {
	const router = useRouter();

	const handleLogout = async () => {
		await logout({ all: false }).then(() => {
			router.push('/login')
		}).catch((error) => toast.error(error.message));
	};

	return (
		<Button onClick={handleLogout}>Logout</Button>
	);
}