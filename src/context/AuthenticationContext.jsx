import { createcontext, useContext, useState, useEffect } from "react";

const AuthenticationContext = createContext();

export const AuthenticationProvider ( {children} ) => {
const [user, setUser] = useState(null);
const [allUsers, setAllUsers] = useState(null);


};
