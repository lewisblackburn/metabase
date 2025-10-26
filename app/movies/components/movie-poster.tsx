import { createNhostClient } from "@/lib/nhost/server";
import Image from "next/image";

export default async function MoviePoster({ posterId }: { posterId: string }) {
	const nhost = await createNhostClient();
	const url = `${nhost.storage.baseURL}/files/${posterId}`;

	new Promise(resolve => setTimeout(resolve, 1000));

	return <Image src={url} alt="Movie Poster" width={100} height={100} loading="eager" />;
}