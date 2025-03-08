import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { Await, useNavigate } from "react-router-dom";

const Invoice = () => {
  const [invoice, setInvoice] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    console.log("hello satya");
    getData();
  }, []);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "invoice"));

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setInvoice(data);
  };
  const deleteInvoice = async (id) => {
    const isSure = window.confirm("Are you sure want to delete");
    if (isSure) {
      try {
        await deleteDoc(doc(db, "invoice", id));
        getData();
      } catch (error) {
        window.alert("something is wrong");
      }
    }
  };
  return (
    <div>
      {invoice.map((data) => (
        <div className="box" key={data.id}>
          <p>{data.to}</p>
          <p>
            {data.date?.seconds
              ? new Date(data.date.seconds * 1000).toLocaleDateString()
              : "No Date"}
          </p>
          <p>Rs. {data.total}</p>
          <button
            onClick={() => {
              deleteInvoice(data.id);
            }}
            className="delete-btn"
          >
            Delete
          </button>
          <button
            onClick={() => {
              navigate("/dashboard/invoice-details");
            }}
            className="delete-btn view-btn"
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default Invoice;
