import ContactUsModel from "@src/models/contact-us";
import { ContactUsRepository } from "@src/repositories/contactUsRepository";

export default class ContactUsService {
  private repository: ContactUsRepository;
  constructor() {
    this.repository = new ContactUsRepository(ContactUsModel);
  }

  public async insert(data: ContactUsModel): Promise<ContactUsModel> {
    data = await ContactUsModel.query().insert(data)
    return data;
  }
}