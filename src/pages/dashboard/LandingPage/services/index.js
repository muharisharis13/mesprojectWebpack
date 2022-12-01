import {
  useForm,
  useFieldArray,
  useFormContext,
  useWatch,
} from "react-hook-form";
import InputListServices from "./inputListServices";
import { Axios } from "../../../../utils";
import { Toast } from "../../../../../components";
import { useEffect } from "react";

const ServicesPageDashboard = () => {
  const { control, register, getValues, setValue, handleSubmit } = useForm({
    defaultValues: {
      listServices: [],
      id: "",
    },
  });

  const listServices = getValues("listServices");
  const id = getValues("id");

  const { fields: fieldsListSErvices, update } = useFieldArray({
    name: "listServices",
    control,
  });

  const { setValue: setValueForm } = useFormContext();
  const toast = useWatch({ name: "toast" });
  const toast_data = useWatch({ name: "toast_data" });

  const BtnAddRowListServices = () => {
    const getLastIndex = listServices.length;

    update(getLastIndex, { title: "", desc: "" });
  };

  const getData = async () => {
    setValueForm("loading", true);
    await Axios.get("/admin/services")
      .then((res) => {
        console.log({ res: res });
        if (res.data) {
          const { code, data } = res.data;

          if (code === 200) {
            setValue("id", data.id);
            setValue("listServices", data.list_services);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setValueForm("loading", false));
  };

  const updateServices = async (data) => {
    setValueForm("loading", true);
    await Axios.put(`/admin/services/${id}`, {
      list_services: data.listServices,
    })
      .then((res) => {
        console.log({ res });
        if (res.data) {
          const { code, data } = res.data;
          if (code === 200) {
            setValueForm("toast", true);
            setValueForm("toast_data", {
              title: "Berhasil",
              content: "Berhasil update services",
              type: "success",
            });
          } else {
            setValueForm("toast", true);
            setValueForm("toast_data", {
              title: "Gagal",
              content: "Gagal update services",
              type: "danger",
            });
          }
        }
      })
      .catch((err) => console.error({ err }))
      .finally(() => setValueForm("loading", false));
  };

  const deleteServices = (data) => {
    const newListServices = fieldsListSErvices.filter(
      (filter) => filter.id !== data.id
    );
    setValue("listServices", newListServices);
  };

  useEffect(() => {
    getData();
  }, []);

  const btnUpdateServices = updateServices;
  const btnDeleteServices = deleteServices;

  return (
    <div className="content-wrapper">
      <Toast
        show={toast}
        title={toast_data.title}
        content={toast_data.content}
        type={toast_data.type}
      />
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row mb-4">
          <div className="col-md-12">
            <InputListServices
              fieldsListSErvices={fieldsListSErvices}
              register={register}
              btnDeleteServices={btnDeleteServices}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap gap-2">
                  <div className="wrap-button-save">
                    <button
                      className="btn btn-primary"
                      onClick={handleSubmit(btnUpdateServices)}
                    >
                      Save Change
                    </button>
                  </div>
                  <div className="wrap-button-add">
                    <button
                      className="btn btn-danger"
                      onClick={BtnAddRowListServices}
                    >
                      Add New Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPageDashboard;
