"use client"
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { useLayoutStore } from "@/lib/stores/layout.store";
import { Grid2x2Icon, Grid3x3Icon, SquareIcon } from "lucide-react";

export default function MovieFilterButtons() {
	const { setPosterSize } = useLayoutStore();

	return (
		<ButtonGroup>
			<Button variant="outline" onClick={() => setPosterSize("lg")}>
				<SquareIcon className="size-4" />
			</Button>
			<Button variant="outline" onClick={() => setPosterSize("md")}>
				<Grid2x2Icon className="size-4" />
			</Button>
			<Button variant="outline" onClick={() => setPosterSize("sm")}>
				<Grid3x3Icon className="size-4" />
			</Button>
		</ButtonGroup>
	);
}