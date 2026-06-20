import { useState, useCallback } from 'react';

/**
 * NyaySetu Phase 10 Form Control Optimization Hook
 * Reduces unneeded virtual DOM re-renders during high-frequency data inputs.
 */
export const useOptimizedForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const resetForm = useCallback(() => setValues(initialValues), [initialValues]);

  return [values, handleChange, resetForm];
};

export default useOptimizedForm;
