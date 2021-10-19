import * as path from "path";
import * as lambda from "@aws-cdk/aws-lambda";
import * as sst from "@serverless-stack/resources";

export class MainStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // esbuild error
    //new ApiStack(app, "api

    // esbuild warning
    //const a = -0 === t && 1 / t == -1 / 0;

    // TypeCheck error
    //a
    //b

    // Lint error
    //if (true) { }

    // Synth error
    //this.addOutputs({
    //  "@#(": "hello",
    //});

    // Deploy error
    new sst.Function(this, "fn", {
      //memorySize: 5555555,
      handler: "src/error/lambda1.main",
    });
    new sst.Function(this, "fn2", {
      handler: "src/error/lambda2.main",
    });
  }
}