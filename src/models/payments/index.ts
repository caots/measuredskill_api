import Model from "@src/config/knexConnection";
import { autoImplementWithBase } from "@src/utils";
import moment from "moment";
import IUserBillingInfoEntirties, { IPaymentCartEntities, IPaymentEntities } from "./entities";

export default class PaymentCartsModel extends autoImplementWithBase(Model)<IPaymentCartEntities>() {
  public created_at?: string;
  public updated_at?: string;
  static get tableName() {
    return "payment_carts";
  }

  static get idColumn() {
    return "id";
  }
  public $beforeInsert() {
    this.created_at = moment().utc().format("YYYY-MM-DD HH:mm:ss");
    this.updated_at = moment().utc().format("YYYY-MM-DD HH:mm:ss");
  }

  public $beforeUpdate() {
    this.updated_at = moment().utc().format("YYYY-MM-DD HH:mm:ss");
  }
}
export class PaymentsModel extends autoImplementWithBase(Model)<IPaymentEntities>() {
  public created_at?: string;
  public updated_at?: string;
  static get tableName() {
    return "payments";
  }

  static get idColumn() {
    return "id";
  }
  public $beforeInsert() {
    this.created_at = moment().utc().format("YYYY-MM-DD HH:mm:ss");
    this.updated_at = moment().utc().format("YYYY-MM-DD HH:mm:ss");
  }

  public $beforeUpdate() {
    this.updated_at = moment().utc().format("YYYY-MM-DD HH:mm:ss");
  }
}

export class UserBillingInfoModel extends autoImplementWithBase(Model)<IUserBillingInfoEntirties>() {
  public created_at?: string;
  public updated_at?: string;
  static get tableName() {
    return "user_billing_infos";
  }
  static get idColumn() {
    return "id";
  }
  public $beforeInsert() {
    this.created_at = moment().utc().format("YYYY-MM-DD HH:mm:ss");
    this.updated_at = moment().utc().format("YYYY-MM-DD HH:mm:ss");
  }

  public $beforeUpdate() {
    this.updated_at = moment().utc().format("YYYY-MM-DD HH:mm:ss");
  }
}

