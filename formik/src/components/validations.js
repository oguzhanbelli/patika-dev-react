import { object, string, number, date, InferType ,ref} from "yup";

const validations = object({
  email: string().email('Geçerli bir email giriniz..').required("Zorunlu Alan."),
  password: string().min(5,"Parolanız en az 5 karakter olmalıdır.").required('Zorunlu Alan'),
  passwordConfirm:string().oneOf([ref('password')]).required('Zorunlu Alan')
});

export default validations;
