import { useForm } from "react-hook-form";
import cn from "../../utils/cn";

const normalForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const double = true;
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn("border border-red-500 w-full mx-auto p-5", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        <div
          className={cn(
            "border border-blue-500 grid grid-cols-1 justify-items-center  gap-5",
            {
              "md:grid-cols-2": double,
            }
          )}
        >
          <div className="w-full">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 focus:border focus:border-purple-500 focus:ring-1"
              type="text"
              {...register("name")}
            />
          </div>
          <div className="w-full">
            <label className="block" htmlFor="name">
              Email
            </label>
            <input
              className="w-full rounded-lg"
              type="text"
              {...register("name")}
            />
          </div>
          <div className="w-full">
            <label className="block" htmlFor="name">
              Password
            </label>
            <input
              className="w-full rounded-lg"
              type="text"
              {...register("name")}
            />
          </div>
        
        <div className="w-full ">
          <label htmlFor="">Select Option</label>
          <select name="" id="" >
            <option value="">one </option>
            <option value="">Two</option>
            <option value="">Three</option>
          </select>
        </div>
        <div className="w-full ">
            <label className="block" htmlFor="name">
              Password
            </label>
            <textarea></textarea>
          </div>
        <div className="w-full ">
            <label className="block" htmlFor="name">
              Password
            </label>
            <input type="checkbox" className="border border-gray-400 rounded-md 
   checked::bg-purple-500 focus:ring-1 focus:ring-purple-500"/>
          </div>
        {/* <input type="submit" /> */}
        </div>
      </form>
    </div>
  );
};

export default normalForm;
