import InputPersonal from "./inputPersonal";
import InputSocialMedia from "./inputSocialMedia";
import { Axios } from "../../../../utils";
import { Toast } from "../../../../../components";
import { useEffect } from "react";
import { useForm, useFormContext, useWatch } from "react-hook-form";

const HeaderPageDashboard = () => {
  const { setValue: setValueForm } = useFormContext();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      id_header: "",
      email: "",
      phone_number: "",
      social_media: {
        facebook: "",
        whatsapp: "",
        instagram: "",
        twitter: "",
      },
    },
  });
  const toast = useWatch({
    name: "toast",
  });
  const toast_data = useWatch({
    name: "toast_data",
  });

  const getData = async () => {
    setValueForm("loading", true);
    await Axios.get("/admin/header")
      .then((res) => {
        console.log({ res });
        if (res?.data) {
          const { code, data } = res.data;
          if (code === 200 && data.id) {
            setValue("id_header", data.id);
            setValue("email", data.email);
            setValue("phone_number", data.phone_number);
            setValue("social_media.facebook", data.social_media?.facebook);
            setValue("social_media.instagram", data.social_media?.instagram);
            setValue("social_media.whatsapp", data.social_media?.whatsapp);
            setValue("social_media.twitter", data.social_media?.twitter);
          } else {
            setValueForm("toast", true);
            setValueForm("toast_data", {
              title: "Gagal",
              content: "Data Tidak Ditemukan",
              type: "danger",
            });
          }
        }
      })
      .catch((err) => {
        console.error({ err });
      })
      .finally(() => {
        setValueForm("loading", false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const updateHeader = async (data) => {
    console.log({ data });
    setValueForm("loading", true);
    await Axios.put("/admin/header", {
      id_header: data.id_header,
      email: data.email,
      phone_number: data.phone_number,
      social_media: {
        facebook: data.social_media.facebook,
        instagram: data.social_media.instagram,
        whatsapp: data.social_media.whatsapp,
        twitter: data.social_media.twitter,
      },
    })
      .then((res) => {
        if (res?.data) {
          const { code, data } = res.data;
          console.log({ data_update: data });
          if (code === 200) {
            setValue("id_header", data.id);
            setValue("email", data.email);
            setValue("phone_number", data.phone_number);
            setValue("social_media.facebook", data.social_media?.facebook);
            setValue("social_media.instagram", data.social_media?.instagram);
            setValue("social_media.whatsapp", data.social_media?.whatsapp);
            setValue("social_media.twitter", data.social_media?.twitter);
            setValueForm("toast", true);
            setValueForm("toast_data", {
              title: "Success",
              content: "Success Update Data !",
              type: "success",
            });
          }
        }
      })
      .catch((err) => {
        console.error({ err });
      })
      .finally(() => setValueForm("loading", false));
  };

  const btnSaveChange = updateHeader;

  return (
    <div className="content-wrapper">
      <Toast
        show={toast}
        content={toast_data.content}
        title={toast_data.title}
        type={toast_data.type}
      />
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <h5 className="card-header">Personal</h5>
              <form id="formAccountSettings">
                <div className="card-body">
                  <InputPersonal register={register} />
                </div>
                <hr className="my-0" />
                <h5 className="card-header">Social Media</h5>
                <div className="card-body">
                  <InputSocialMedia register={register} />
                </div>
              </form>
            </div>
            <div className="card mt-4">
              <div className="card-body">
                <div>
                  <button
                    onClick={handleSubmit(btnSaveChange)}
                    type="submit"
                    className="btn btn-primary me-2"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPageDashboard;
