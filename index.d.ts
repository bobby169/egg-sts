import "egg";
import STS from "@alicloud/sts-sdk";

interface STSCredentials {
  AccessKeyId: string;
  AccessKeySecret: string;
  SecurityToken: string;
  Expiration: string;
}

interface AssumeRoleResult {
  RequestId: string;
  Credentials: STSCredentials;
  AssumedRoleUser: {
    AssumedRoleId: string;
    Arn: string;
  };
}

interface STSOptions {
  endpoint: string;
  accessKeyId: string;
  accessKeySecret: string;
  apiVersion?: string;
}

declare module "egg" {
  interface Application {
    sts: Pick<STS, "assumeRole" | "getCallerIdentity">;
  }

  interface EggAppConfig {
    sts: {
      client: STSOptions;
    };
  }
}
