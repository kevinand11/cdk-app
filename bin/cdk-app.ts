#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { CdkAppStack } from '../src'

const app = new cdk.App()
new CdkAppStack(app, 'CdkAppStack')
