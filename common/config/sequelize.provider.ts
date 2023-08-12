import { SEQUELIZE_TOKEN } from "common/tokens";
import { Sequelize } from "sequelize-typescript";

export class SequelizeProvider {
  public static forRoot(entities: any) {
    return {
      provide: SEQUELIZE_TOKEN,
      useFactory: async () => {
        const sequelize = new Sequelize({
          dialect: "postgres",
          host: "localhost",
          port: 5432,
          username: "ilia",
          password: "",
          database: "compressor_saas"
        });

        sequelize.addModels(entities);
        await sequelize.sync();
        return sequelize;
      }
    };
  }
}

/**

POST /sign-up

body:
  payload

token:
  payload.email + randomBytes + JWT_SECRET

/verify/:5234523453


GET /verify/:randomBytes
  verify:
    email + randomBytes + JWT_SECRET

*/
