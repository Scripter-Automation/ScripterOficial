import S3FileUpload from 'react-s3';
 
//Optional Import
import { uploadFile } from 'react-s3';
 
const config = {
    bucketName: 'myBucket',
    dirName: 'photos', /* optional */
    region: 'eu-east-1',
    accessKeyId: 'ANEIFNENI4324N2NIEXAMPLE',
    secretAccessKey: 'cms21uMxçduyUxYjeg20+DEkgDxe6veFosBT7eUgEXAMPLE',
}
 
export function UploadS3(file){
    uploadFile(file, config)
        .then(data => console.log(data))
        .catch(err => console.error(err))
}