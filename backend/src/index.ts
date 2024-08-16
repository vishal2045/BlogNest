import { Hono } from 'hono'

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'

const app = new Hono<{
  Bindings: {
    DATABASE_URL : string;
    JWT_SECRET: string;
  }
}>()

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);




export default app
//postgres://avnadmin:AVNS_iO-EA3cJJchObuYq405@pg-3e0cac35-shitikasing-0222.i.aivencloud.com:24144/defaultdb?sslmode=require

//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZmIwMTNiZTgtMmEzYy00ZDBhLWI4ODYtYzU0ZGI3MDIxYjNiIiwidGVuYW50X2lkIjoiMzAwZGRkN2M4YjEzMmRmMmZkZDM5OTJhMGYxMDJhNjBhMWYyN2Y4NDY4Nzg5NGMxOWVkN2I1MWVhZTlmZmIwOSIsImludGVybmFsX3NlY3JldCI6IjIyZTBmNWY5LTc4ZDktNDg2Ny1hOTdjLTQxMjJhN2Q0MmNhOSJ9.eJSRjL43EKdkjHeW3nau-CFyA_aEd5xu1eBeQDfiA9g"