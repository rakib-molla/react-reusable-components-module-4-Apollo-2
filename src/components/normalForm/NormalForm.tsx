import { FieldValues, useForm, FormProvider } from "react-hook-form";
import cn from "../../utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TNormalForm } from "./validation";
import InputField from "./InputField";

const normalForm = () => {
  const methods = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  
  const double = true;
  return (
    <FormProvider {...methods}> 
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn("border shadow-lg w-full mx-auto p-5", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        <div
          className={cn(" grid grid-cols-1 justify-items-center  gap-5", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="w-full">
          <label className="block" htmlFor="name">
              something
            </label>
            <InputField />
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 focus:border focus:border-purple-500 focus:ring-1"
              type="text"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
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
          <div className="w-full">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className="w-full rounded-lg"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>

          {/* <div className="w-full ">
            <label htmlFor="">Select Option</label>
            <select name="" id="">
              <option value="">one </option>
              <option value="">Two</option>
              <option value="">Three</option>
            </select>
          </div> */}

          {/* <div className="w-full ">
            <label className="block" htmlFor="name">
              Password
            </label>
            <textarea></textarea>
          </div> */}
          {/* <div className="w-full ">
            <label className="block" htmlFor="name">
              Password
            </label>
            <input
              type="checkbox"
              className="border border-gray-400 rounded-md 
   checked::bg-purple-500 focus:ring-1 focus:ring-purple-500"
            />
          </div> */}
          <div className=" w-full col-start-1  md:col-start-2 flex justify-end ">
            <button
              type="submit"
              className="bg-blue-500 px-3 w-full md:w-fit py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    </FormProvider>
  );
};

export default normalForm;
