import { useState, createContext } from "react";
import { defaultUserOne, defaultusersTwo } from "./defaultUser";

const VasitiContext = createContext({
  vendorList: [],
  customerList: [],
  addToListFunc: (param) => {},
  showModal: {},
  setShowModalFunc: (param) => {},
  userdetails: {},
  setuserdetailFunc: (param, obj) => {}
});

export function VasitiContextProvider(props) {
  const [vendorListVal, setvendorListVal] = useState(defaultusersTwo);
  const [customerListVal, setCustomerListVal] = useState(defaultUserOne);
  const [userdetailval, setuserdetailval] = useState({
    firstName: "",
    lastName: "",
    picture: "",
    role: "",
    location: "",
    text: "",
  });

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
      //  setuserdetailval({
      //    firstName: "",
      //    lastName: "",
      //    text: "",
      //    role: "",
      //    location: "",
      //  });
    }
  }

  function setuserdetailFunction (param, obj) {
    if(param === "picture"){
      setuserdetailval((prev) => {
        return {...prev, picture: obj}
      })
    }
    if (param === "first-name") {
      setuserdetailval((prev) => {
        return { ...prev, firstName: obj };
      });
    }
     if (param === "last-name") {
       setuserdetailval((prev) => {
         return { ...prev, lastName: obj };
       });
     }
      if (param === "role") {
        setuserdetailval((prev) => {
          return { ...prev, role: obj };
        });
      }
       if (param === "text") {
         setuserdetailval((prev) => {
           return { ...prev, text: obj };
         });
       }
        if (param === "location") {
          setuserdetailval((prev) => {
            return { ...prev, location: obj };
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
        setuserdetailval({
          firstName: "",
          lastName: "",
          text: "",
          role: "",
          location: "",
        });
        // console.log(newObj);
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
           setuserdetailval({
             firstName: "",
             lastName: "",
             text: "",
             role: "",
             location: "",
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
    userdetails: userdetailval,
    setuserdetailFunc: setuserdetailFunction,
  };
  return (
    <VasitiContext.Provider value={context}>
      {props.children}
    </VasitiContext.Provider>
  );
}

export default VasitiContext;


