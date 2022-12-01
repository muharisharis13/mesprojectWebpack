import {
  useForm,
  useFieldArray,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { useState, useEffect } from "react";
import InputForm from "./inputForm";
import { Axios } from "../../../../utils";
import { Toast } from "../../../../../components";

const AboutPageDashboard = () => {
  const { register, control, setValue, getValues, handleSubmit } = useForm({
    defaultValues: {
      id: "",
      title: "",
      desc: "",
      listAbout: [],
    },
  });

  const [imgBanner, setImgBanner] = useState(
    "https://mediacartz.mesproject.id/assets/img/about-img.jpg"
  );

  const { fields: fieldsListAbout } = useFieldArray({
    control,
    name: "listAbout",
  });

  const { setValue: setValueForm } = useFormContext();
  const id = getValues("id");
  const toast = useWatch({ name: "toast" });
  const toast_data = useWatch({ name: "toast_data" });

  const getData = async () => {
    setValueForm("loading", true);
    await Axios.get("/admin/about")
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          const { code, data } = res.data;

          if (code === 200) {
            setValue("title", data?.title);
            setValue("desc", data?.desc);
            setValue(
              "listAbout",
              data?.list_about?.map((item) => ({
                text: item,
              }))
            );
            setValue("id", data.id);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setValueForm("loading", false);
      });
  };

  const updateAbout = async (data) => {
    setValueForm("loading", true);
    await Axios.put(`/admin/about/${id}`, {
      title: data.title,
      desc: data.desc,
      list_about: data.listAbout?.map((item) => item.text),
    })
      .then((res) => {
        if (res?.data) {
          const { code, data } = res.data;

          if (code === 200) {
            setValue("title", data?.title);
            setValue("desc", data?.desc);
            setValue(
              "listAbout",
              data?.list_about?.map((item) => ({
                text: item,
              }))
            );
            setValue("id", data.id);
            setValueForm("toast", true);
            setValueForm("toast_data", {
              title: "Success",
              content: "Berhasil Update Data",
              type: "success",
            });
          }
        }
        console.log({ res });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setValueForm("loading", false));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleUpdateAbout = updateAbout;

  return (
    <div className="content-wrapper">
      <Toast
        show={toast}
        title={toast_data.title}
        content={toast_data.content}
        type={toast_data.type}
      />
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <InputForm
                register={register}
                fieldsListAbout={fieldsListAbout}
                imgBanner={imgBanner}
                setImgBanner={setImgBanner}
              />
            </div>

            <div className="card mt-4">
              <div className="card-body">
                <button
                  onClick={handleSubmit(handleUpdateAbout)}
                  className="btn btn-primary"
                >
                  Save Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageDashboard;
