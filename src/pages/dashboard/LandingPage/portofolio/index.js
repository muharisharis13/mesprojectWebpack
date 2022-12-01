import { useState, useEffect } from "react";
import InputPortofolioForm from "./inputPortofolioForm";
import { Axios } from "../../../../utils";
import { Toast } from "../../../../../components";
import { useFormContext, useWatch } from "react-hook-form";


const PortofolioPageDashboard = () => {
  const [listPortofolio, setListPortofolio] = useState([]);
  const { setValue: setValueForm } = useFormContext();
  const toast = useWatch({ name: "toast" });
  const toast_data = useWatch({ name: "toast_data" });
  const onChangeImg = (e, idxParam) => {
    let newListPortofolio = listPortofolio.map((item, idx) =>
      idx === idxParam
        ? {
          ...item,
          img: e.target.files[0],
        }
        : item
    );
    setListPortofolio(newListPortofolio);
  };

  const onChangeText = (e, idxParam) => {
    let newListPortofolio = listPortofolio.map((item, idx) =>
      idx === idxParam && e.target.name === "title"
        ? {
          ...item,
          title: e.target.value,
        }
        : idx === idxParam && e.target.name === "link"
          ? {
            ...item,
            link: e.target.value,
          }
          : item
    );
    setListPortofolio(newListPortofolio);
  };

  const BtnAddNewPorto = () => {
    setListPortofolio((state) => [
      ...state,
      {
        img: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        title: "new title",
        link: "new link",
      },
    ]);
  };

  const getData = async () => {
    await Axios.get("/admin/portofolio")
      .then((res) => {
        console.log({ res });
        if (res.data) {
          const { code, data } = res.data;

          if (code === 200) {
            setListPortofolio(
              data.map((item) => ({
                id: item.id,
                img: item.img,
                title: item.title,
                link: item.href,
              }))
            );
          }
        }
      })
      .catch((err) => {
        console.error({ err });
      });
  };

  const updatePortofolio = async (data) => {
    console.log(data);
    setValueForm("loading", true);
    if (data?.id) {
      const formData = new FormData();
      formData.append("id", data.id);
      formData.append("title", data.title);
      formData.append("href", data.link);
      formData.append("img", data.img);

      let result = await Axios.put(`/admin/portofolio/${data.id}`, formData, {
        headers: {
          "Content-Type": data?.img.size
            ? "multipart/form-data"
            : "application/json",
        },
      });

      const { code, data: dataResult } = result.data;

      if (code === 200) {
        setValueForm("loading", false);
        setValueForm("toast", true);
        setValueForm("toast_data", {
          type: "success",
          title: "Success",
          content: "Success update data !",
        });
      }
    } else {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("href", data.link);
      formData.append("img", data.img);

      await Axios.post("/admin/portofolio", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          console.log({ res });
          const { code, data: dataResult } = res.data;

          if (code === 200) {
            setValueForm("toast", true);
            setValueForm("toast_data", {
              type: "success",
              content: `Success tambah data with title ${dataResult.title}`,
              title: "Success",
            });
          } else {
            setValueForm("toast", true);
            setValueForm("toast_data", {
              type: "danger",
              content: dataResult,
              title: "Error",
            });
          }
        })
        .catch((err) => {
          console.log({ err });
        })
        .finally(() => setValueForm("loading", false));
    }
    // if (data.img?.size) {
    //   result =
    //   console.log("ada file");
    // } else {
    //   console.log("gak ada file");
    // }
  };

  const deletePorto = async (item) => {
    setValueForm("loading", true);
    await Axios.delete(`/admin/portofolio/${item.id}`)
      .then(res => {
        const { code, data: dataRes } = res.data
        if (code === 200) {
          setValueForm("loading", false);
          setValueForm("toast", true);
          setValueForm("toast_data", {
            type: "success",
            title: "Success",
            content: dataRes,
          });
          window.location.reload()
        }
      })
      .finally(() => setValueForm("loading", false))
  }

  useEffect(() => {
    getData();
  }, []);

  const handleUpdatePortofolio = updatePortofolio;
  const handleBtnDelete = deletePorto

  return (
    <div className="content-wrapper">
      <Toast
        show={toast}
        title={toast_data.title}
        type={toast_data.type}
        content={toast_data.content}
      />
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="card mb-4">
          <div className="card-body">
            <InputPortofolioForm
              listPortofolio={listPortofolio}
              onChangeImg={onChangeImg}
              onChangeText={onChangeText}
              handleUpdatePortofolio={handleUpdatePortofolio}
              handleBtnDelete={handleBtnDelete}
            />
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="d-flex gap-2 flex-wrap">
              {/* <button className="btn btn-primary">Save Change</button> */}
              <button className="btn btn-danger" onClick={BtnAddNewPorto}>
                Add New Portofolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortofolioPageDashboard;
