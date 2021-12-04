import { useState, createContext } from "react";
import { defaultUserOne, defaultusersTwo } from "./defaultUser";

const VasitiContext = createContext({
  vendorList: [],
  customerList: [],
  addToListFunc: (param) => {},
  showModal: {},
});

export function VasitiContextProvider(props) {
  const [vendorListVal, setvendorListVal] = useState(defaultusersTwo);
  const [customerListVal, setCustomerListVal] = useState(defaultUserOne);
  const [showModalvalue, setShowModalvalue] = useState({
    customer: true,
    vendor: false,
    modal: true,
  });

  const context = {
    vendorList: vendorListVal,
    customerList: customerListVal,
    addToListFunc: (param) => {},
    showModal: showModalvalue,
  };
  return (
    <VasitiContext.Provider value={context}>
      {props.children}
    </VasitiContext.Provider>
  );
}

export default VasitiContext;
