import Koa from "koa";
import Router from "koa-router";
import { koaBody } from "koa-body";
import dotenv from "dotenv";
import { initTranslator, translate } from "./translator";

dotenv.config();
initTranslator();

const app = new Koa();

app.use(
  koaBody({
    multipart: true,
  })
);

const router = new Router();

router.post("/chat", async (ctx) => {
  console.log(ctx.request.body);
  // 基于用户给的 message -> json
  const { message, todos } = ctx.request.body;
  const result = await translate(message,todos);
  ctx.body = result;
});

app.use(router.routes());

app.listen(8081, () => {
  console.log("open server localhost:8081");
});
