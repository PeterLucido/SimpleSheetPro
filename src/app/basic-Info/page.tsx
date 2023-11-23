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
    <div className="flex justify-center items-center h-screen bg-blue-400">
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-xl shadow-lg">
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
          {formData.role === "Coach" && (
            <>
              <div className="w-full">
                <SelectGroup
                  label="Schools"
                  options={[
                    { value: "Blah", label: "Blah" },
                    { value: "Blah1", label: "Blah1" },
                    { value: "Blah2", label: "Blah2" },
                    { value: "Blah3", label: "Blah3" },
                    { value: "Blah4", label: "Blah4" },
                    { value: "Blah5", label: "Blah5" },
                    { value: "Blah6", label: "Blah6" },
                  ]}
                  name="Gender"
                />
              </div>
            </>
          )}

          <div className="w-full">
            <button
              type="submit"
              className="w-full bg-blue-400 text-white rounded-full py-2 px-4 hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default BasicInfo;
