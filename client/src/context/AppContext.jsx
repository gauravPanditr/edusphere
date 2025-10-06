import React, { createContext, useState, useEffect } from 'react';
import { dummyCourses } from '../assets/assets';

// Named export of context
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState([]);
  const currency = import.meta.env.VITE_CURRENCY;

  useEffect(() => {
    // Simulate fetching courses
    setAllCourses(dummyCourses);
  }, []);

  // Function to calculate rating
  const calculateRating = (course) => {
    if (!course.courseRatings || course.courseRatings.length === 0) return 0;
    const total = course.courseRatings.reduce((acc, r) => acc + r, 0);
    return total / course.courseRatings.length;
  };

  const value = {
    currency,
    allCourses,
    calculateRating, // must include this in value
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
