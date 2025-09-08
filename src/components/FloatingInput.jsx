import React from "react";

const FloatingInput = ({
  id,
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
}) => (
  <div className="relative z-0 w-full mb-6 group">
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
        error ? "border-red-500" : "border-gray-300"
      } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
      placeholder=" "
      required
    />
    <label
      htmlFor={id}
      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:left-0 peer-focus:text-blue-600"
    >
      {label}
    </label>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default FloatingInput;
