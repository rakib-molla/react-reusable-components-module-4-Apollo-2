
export const Input = ({label,register,type, errors, }) => {
   return (
      <div className="w-full">
            <label className="block" htmlFor="name">
              {label}
            </label>
            <input
              className=" rounded-lg"
              type={type}
              {...register}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
   );
};

