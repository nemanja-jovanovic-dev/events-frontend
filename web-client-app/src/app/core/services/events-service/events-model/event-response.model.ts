export interface EventResponseModel {
    title: string;
    description: string;
    start: string;
    end: string;
    categoryId: string;
    locationId: string;
    createdByOrganizationName: string;
    createdByOrganizationId: string;
    date: string;
    imagePath?: string;
}
