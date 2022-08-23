export interface System{
    _id?: any;
    topic: string;
    urlName: string;
    urlImg: string;
    objectName: string;
    adminUid: any;
    description: string;
    communicationDetails: {email: string, phone: string};
}
