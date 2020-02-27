import React from "react";

export const UserContext = React.createContext({ name: "Lucy" });
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
