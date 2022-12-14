export interface JobItemType {
	address: string;
	benefits: string[]
	createdAt: string;
    description: string;
    email: string;
    employment_type: string[];
    id: string;
    location: MapLocation;
    name: string;
    phone: string;
    pictures: string[];
    salary: string;
    title: string;
    updatedAt: string;
}
interface MapLocation {
    lat: number;
    long: number;
}

export const siteLink = "https://job-list-next-js-79c4.vercel.app";
