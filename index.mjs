import AWS from 'aws-sdk';

export const handler = async (event) => {
  // Set your access key and secret key
  const accessKeyId = '';
  const secretAccessKey = '';

  let credentials = {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
  };
  AWS.config.update({ credentials: credentials, region: '' });

  const s3 = new AWS.S3({
    signatureVersion: 'v4',
  });

  const bucketName = '';
  const fileName = event.fileName;
  const fileType = event.fileType;

  const signedURL = await generateSignedURL(s3, bucketName, fileName, fileType);

  return {
    statusCode: 200,
    body: JSON.stringify({ signedURL })
  };
};

async function generateSignedURL(s3, bucketName, fileName, fileType) {
  const params = {
    Bucket: `${bucketName}`,
    Key: `${fileName}.${fileType}`,
    ContentType: fileType,
    Expires: 3600
  };

  return await s3.getSignedUrlPromise('putObject', params);
}
