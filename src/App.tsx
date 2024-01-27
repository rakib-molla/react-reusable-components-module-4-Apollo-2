// import MainLayout from "./components/layout/MainLayout";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ReuseAbleForm";
import Container from "./components/ui/Container";
import { z } from "zod";
// import NormalForm from "./components/normalForm/NormalForm";

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTest>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  type TTest = z.infer<typeof TestSchema>;

  return (
    <Container>
      {/* <NormalForm /> */}
      <Form
        // double={true}
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
      >
        <FormSection>
          <div className="w-full">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-lg"
              type="text"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <Input
            register={register("email")}
            label="Email"
            type="email"
            errors={errors}
          />

          <Input
            register={register("email")}
            label="Checkbox"
            type="checkbox"
            errors={errors}
          />
          <div className="flex gap-5 items-start justify-start">
            <Input
              register={register("gender")}
              label="Male"
              type="radio"
              errors={errors}
            />
            <Input
              register={register("gender")}
              label="Female"
              type="radio"
              errors={errors}
            />
          </div>
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </Container>
  );
}

export default App;
