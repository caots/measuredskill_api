import Model from "@src/config/knexConnection";
import { autoImplementWithBase } from "@src/utils";
import moment from "moment";
import IAdminEntities from "./entities";


export default class AdminModel extends autoImplementWithBase(Model)<IAdminEntities>() {
  public created_at?: string;
  public updated_at?: string;
  static get tableName() {
    return "admins";
  }

  static get idColumn() {
    return "id";
  }
  public $beforeInsert() {
    this.created_at = moment().utc().format("YYYY-MM-DD HH:mm:ss");
  }

  public $beforeUpdate() {
    this.updated_at = moment().utc().format("YYYY-MM-DD HH:mm:ss");
  }
}
