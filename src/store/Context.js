import { useState, createContext } from "react";
import { defaultUserOne, defaultusersTwo } from "./defaultUser";

const VasitiContext = createContext({
  vendorList: [],
  customerList: [],
  addToListFunc: (param) => {},
  showModal: {},
  setShowModalFunc: (param) => {}
});

export function VasitiContextProvider(props) {
  const [vendorListVal, setvendorListVal] = useState(defaultusersTwo);
  const [customerListVal, setCustomerListVal] = useState(defaultUserOne);
  const [showModalvalue, setShowModalvalue] = useState({
    customer: false,
    vendor: false,
    modal: false,
    loading: false,
    success: false,
  });

  function setShowModalFunction (param) {
    if(param === "customer"){
      setShowModalvalue((prev) => {
        return {...prev, customer: true, vendor: false, modal: true}
      })
    }
    if (param === "vendor") {
      setShowModalvalue((prev) => {
        return { ...prev, customer: false, vendor: true, modal: true };
      });
    }
    if (param === "close") {
      setShowModalvalue((prev) => {
        return { ...prev, customer: false, vendor: false, modal: false, success: false };
      });
    }
  }

 async function addNewObject (param){
    let res;
    if(showModalvalue.customer){
        const newObj = [...customerListVal, param];
      setShowModalvalue((prev) => {
        return {...prev, loading: true}
      })
      setTimeout(() => {
        setShowModalvalue((prev) => {
          res = "success";
          return {...prev, loading: false, modal: false, success: true}
        })
        console.log(newObj);
        setCustomerListVal(newObj)
      }, 1500);
    }
     if (showModalvalue.vendor) {
      //  console.log("ok");
        const newObj = [...vendorListVal, param];
        setShowModalvalue((prev) => {
          return { ...prev, loading: true };
        });
        setTimeout(() => {
          setShowModalvalue((prev) => {
          res = "success";
            return { ...prev, loading: false, modal: false, success: true };
          });
          setvendorListVal(newObj);
        }, 1500);
     }
     return res;
  }

  const context = {
    vendorList: vendorListVal,
    customerList: customerListVal,
    addToListFunc: addNewObject,
    showModal: showModalvalue,
    setShowModalFunc: setShowModalFunction,
  };
  return (
    <VasitiContext.Provider value={context}>
      {props.children}
    </VasitiContext.Provider>
  );
}

export default VasitiContext;


