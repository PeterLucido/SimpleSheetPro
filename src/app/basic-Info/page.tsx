'use client'
import React, { useState } from "react";
import SelectGroup from "../_components/SelectGroup";

const BasicInfo = () => {
  const [formData, setFormData] = useState({
    role: "",
  });

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      role: e.target.value,
    });
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      {/* <h1 className="text-2xl font-bold mb-4">Hello, UserName</h1> */}
      <form>
        <div className="space-y-4">
          <div className="w-full">
            <SelectGroup
              label="Role"
              options={[
                { value: "Diver", label: "Diver" },
                { value: "Coach", label: "Coach" },
              ]}
              name="Role"
              value={formData.role}
              onChange={handleRoleChange}
            />
          </div>

          {formData.role === "Diver" && (
            <>
              <div className="w-full">
                <SelectGroup
                  label="Gender"
                  options={[
                    { value: "MALE", label: "Male" },
                    { value: "FEMALE", label: "Female" },
                  ]}
                  name="Gender"
                />
              </div>
              <div className="w-full">
                <SelectGroup
                  label="Grade"
                  options={[
                    { value: "Freshman", label: "Freshman" },
                    { value: "Sophomore", label: "Sophomore" },
                    { value: "Junior", label: "Junior" },
                    { value: "Senior", label: "Senior" },
                  ]}
                  name="Grade"
                />
              </div>
            </>
          )}

          <div className="w-full">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
