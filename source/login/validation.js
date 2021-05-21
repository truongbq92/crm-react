import * as Yup from "yup";

// https://github.com/jquense/yup
export const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Nhập tên đăng nhập"),
  password: Yup.string()
    .required("Nhập mật khẩu")
    // .min(6, "Password must have at least 6 characters"),
});
