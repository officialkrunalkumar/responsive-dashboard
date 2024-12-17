import React from "react";
import { MenuItem, Select, FormControl } from "@mui/material";

const DropdownFilter = ({ selected, onChange }) => {
  return (
    <FormControl fullWidth>
      <Select value={selected} onChange={(e) => onChange(e.target.value)}>
        <MenuItem value="week">This Week</MenuItem>
        <MenuItem value="month">This Month</MenuItem>
        <MenuItem value="year">This Year</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropdownFilter;
