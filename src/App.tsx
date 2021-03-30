import InputValidate from "./components/InputValidate";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="column">
        <div className="form_input">
          <label>CNPJ</label>
          <InputValidate.CNPJ placeholder="Digite seu CNPJ" />
        </div>
        <div className="form_input">
          <label>CPF</label>
          <InputValidate.CPF placeholder="Digite seu CPF" />
        </div>
        <div className="form_input">
          <label>E-mail</label>
          <InputValidate.EMAIL placeholder="Digite seu e-mail" />
        </div>
        <div className="form_input">
          <label>Required*</label>
          <InputValidate.REQUIRED />
        </div>
      </div>
    </div>
  );
}
