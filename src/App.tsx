// import MainLayout from "./components/layout/MainLayout";

import { FieldValues, useForm } from "react-hook-form";
import { Form, FormSection, FormSubmit } from "./components/ReuseAbleForm";
import Container from "./components/ui/Container";
// import NormalForm from "./components/normalForm/NormalForm";

function App() {
  const { handleSubmit, register, formState: {errors} } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Container>
      {/* <NormalForm /> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
        <div className="w-full">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-lg"
              type="text"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </Container>
  );
}

export default App;
