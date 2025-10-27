import { capitalize } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function useBreadcrumbs() {
	const pathname = usePathname();

	const breadcrumbs = useMemo(() => {
		return pathname.split("/").filter(Boolean).map((path, index) => {
			const pathSegments = pathname.split("/").filter(Boolean);

			const label = capitalize(path);
			const href = getHref(pathSegments, index);
			const isLast = isLastSegment(index, pathSegments);

			return { label, href, isLast };
		});
	}, [pathname]);

	return breadcrumbs;
}

function getHref(pathSegments: string[], index: number) {
	return `/${pathSegments.slice(0, index + 1).join("/")}`;
}

function isLastSegment(index: number, pathSegments: string[]) {
	return index === pathSegments.length - 1;
}
