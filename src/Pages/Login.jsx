import { Background } from "../components/Background";
import { Header } from "../components/Header";
import { Painel } from "../components/Painel";
import { Box } from "../components/Box";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "../hooks/api/useSignIn";
import UserContext from "../context/userContext";
import { useContext } from "react";

export function Login() {
 const navigate = useNavigate();
 const { signInLoading, signIn } = useSignIn();
 const { setUserData } = useContext(UserContext);
 function navigateSignUp() {
  navigate("/sign-up");
 }

 async function onFinish(values) {
  try {
   const data = await signIn(values);
   setUserData(data);
   navigate("/dashboard");
  } catch (error) {
    console.log(error)
  }
 }
 const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
 };
 return (
  <>
   <Background>
    <Header />
    <Painel>
     <Box>
      <h3>Acesse sua Conta</h3>
      <Form name="basic" onFinish={onFinish}>
       <Form.Item
        name="email"
        rules={[
         {
          type: "email",
          required: true,
          message: "Insira um email válido",
         },
        ]}
       >
        <Input placeholder="Email" />
       </Form.Item>

       <Form.Item
        name="password"
        rules={[
         {
          required: true,
          message: "Insira sua senha",
         },
        ]}
       >
        <Input.Password placeholder="Senha" />
       </Form.Item>

       <Form.Item
        style={{
         display: "flex",
         justifyContent: "center",
        }}
       >
        <Button type="primary" htmlType="submit">
         Entrar
        </Button>
       </Form.Item>
       <p onClick={() => navigateSignUp()}>
        Não possui uma conta? Clique aqui para cadastrar
       </p>
      </Form>
     </Box>
    </Painel>
   </Background>
  </>
 );
}
