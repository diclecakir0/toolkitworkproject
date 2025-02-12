import React from "react";
import { statusOptions, typeOptions } from "../constants";
import { v4 } from "uuid";
import { addJob } from "../redux/jobSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(formData.get("position"));
    // form verilerinden bir obje oluşturma
    const dataObj = Object.fromEntries(formData);

    // id oluşturma
    dataObj.id = v4();

    // ekleme tarihi oluşturma
    dataObj.date = new Date().toLocaleDateString();

    //! 1. adım API'yi güncelleme
    axios.post("http://localhost:5000/jobs", dataObj).then(() => {
      // store'u güncelleme
      dispatch(addJob(dataObj));
      // anasayfaya yönlendirme
      navigate("/");
      // Bildirim gösterme
      toast.info("Başarıyla eklendi!", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    });
  };

  return (
    <div className="add-sec">
      <h2>Yeni İş Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="">Pozisyon</label>
          <input name="position" type="text" />
        </div>
        <div className="field">
          <label htmlFor="">Şirket</label>
          <input name="company" type="text" />
        </div>
        <div className="field">
          <label htmlFor="">Lokasyon</label>
          <input name="location" type="text" />
        </div>
        <div className="field">
          <label htmlFor="">Durum</label>
          <select name="status">
            {statusOptions.map((opt, i) => (
              <option key={i}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="">Tür</label>
          <select name="type">
            {typeOptions.map((opt, i) => (
              <option key={i}>{opt.label}</option>
            ))}
          </select>
        </div>
        <button>Ekle</button>
      </form>
    </div>
  );
};

export default AddJob;
