import * as AWS from 'aws-sdk';
export declare class AWSService {
    AWS_S3_BUCKET: string;
    s3: AWS.S3;
    uploadFile(file: any): Promise<AWS.S3.ManagedUpload.SendData>;
    s3_upload(file: any, bucket: any, name: any, mimetype: any): Promise<AWS.S3.ManagedUpload.SendData>;
}
