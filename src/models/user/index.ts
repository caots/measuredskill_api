import Model from "@src/config/knexConnection";
import { autoImplementWithBase } from "@src/utils";
import moment from "moment";
import IUserEntities, { IUserSubcribeEntities } from "./entities";

export default class UserModel extends autoImplementWithBase(Model)<IUserEntities>() {
  constructor(model?: any | IUserEntities) {
    super();
    if (model != null) {
      Object.keys(model).forEach(k => (this[k] = model[k]))
    }
  }
  public created_at?: string;
  public updated_at?: string;
  static get tableName() {
    return "users";
  }

  static get idColumn() {
    return "id";
  }
  public $beforeInsert() {
    this.created_at = moment().utc().format("YYYY-MM-DD HH:mm:ss");
    this.is_deleted = 0;
  }

  public $beforeUpdate() {
    this.updated_at = moment().utc().format("YYYY-MM-DD HH:mm:ss");
  }
}
export class UserSubcribesModel extends autoImplementWithBase(Model)<IUserSubcribeEntities>() {
  public created_at?: string;
  public updated_at?: string;

  constructor(model?: any | IUserSubcribeEntities) {
    super();
    if (model != null) {
      Object.keys(model).forEach(k => (this[k] = model[k]))
    }
  }
  static get tableName() {
    return "user_subcribes";
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