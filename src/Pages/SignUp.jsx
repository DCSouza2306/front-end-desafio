import { Background } from "../components/Background";
import { Header } from "../components/Header";
import { Painel } from "../components/Painel";
import { Box } from "../components/Box";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../hooks/api/useSignUp";


export function SignUp() {
 const navigate = useNavigate();
 const {signUpLoading, signUp} = useSignUp();

 function navigateSignIn() {
  navigate("/login");
 }

 async function onFinish (values) {
    try {
        await signUp(values);
        console.log("funfou")
    } catch (error) {
        console.log(error)
    }
  console.log("Success:", values);
 };
 const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
 };
 return (
  <>
   <Background>
    <Header />
    <Painel>
     <Box>
      <h3>Crie sua conta</h3>
      <Form name="basic" onFinish={onFinish}>
       <Form.Item
        name="name"
        rules={[
         {
          min: 3,
          required: true,
          message: "Nome deve conter no mínimo 3 letras",
         },
        ]}
       >
        <Input placeholder="Nome" />
       </Form.Item>
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
         Cadastrar
        </Button>
       </Form.Item>
       <p onClick={() => navigateSignIn()}>
        Já possui uma conta? Clique aqui para entrar
       </p>
      </Form>
     </Box>
    </Painel>
   </Background>
  </>
 );
}
