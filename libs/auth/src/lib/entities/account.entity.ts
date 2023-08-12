import { Table, Column, Model } from "sequelize-typescript";

@Table({
  tableName: "accounts"
})
export class CompanyEntity extends Model {
  @Column
  public name: string;

  @Column
  public email: string;

  @Column
  public password: string;

  @Column
  public balance: number;
}

/*

--------------------------------------------------
POST /pay
headers:
    Authorization: Bearer JWT_TOKEN_AUTHORIZATION

encrypt:
    secret: account_id + randomBytes + JWT_SECRET

-> JWT_TOKEN_PAYMENT
--------------------------------------------------

POST /compress
headers:
    Authorization: Bearer JWT_TOKEN_AUTHORIZATION
    Apikey: 90924398542085

    verify:
        secret: account_id + 90924398542085 + JWT_SECRET

*/
