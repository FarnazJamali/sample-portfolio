import * as yup from "yup";
import { FA_IR } from "../../Language";

export const schema = yup.object({
  email: yup.string().required(FA_IR.EmailError).email(FA_IR.EmailFormat),
  message: yup.string().required(FA_IR.MessageError),
});
