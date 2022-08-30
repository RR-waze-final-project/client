export interface System{
    uid?: string;
    topic: string;
    urlName: string;
    urlImg: string;
    objectName: string;
    adminUid: string;
    description: string;
    communicationDetails: {email: string, phone: string};
}
