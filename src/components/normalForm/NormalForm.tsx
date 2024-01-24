import { useForm } from "react-hook-form";

const normalForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-red-500 max-w-5xl mx-auto p-5"
      >
        <div className="border border-blue-500 grid grid-cols-2 gap-5">
          <div>
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-lg"
              type="text"
              {...register("name")}
            />
          </div>
          <div>
            <label className="block" htmlFor="name">
              Email
            </label>
            <input className="w-full rounded-lg" type="text" {...register("name")} />
          </div>
          <div>
            <label className="block" htmlFor="name">
              Password
            </label>
            <input className="w-full rounded-lg" type="text" {...register("name")} />
          </div>
        </div>
        {/* <select name="" id="">
          <option value="">one </option>
          <option value="">Two</option>
          <option value="">Three</option>
        </select> */}
        {/* <input type="submit" /> */}
      </form>
    </div>
  );
};

export default normalForm;
