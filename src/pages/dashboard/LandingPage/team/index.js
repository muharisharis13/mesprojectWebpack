import { Axios } from "../../../../utils";
import { Toast } from "../../../../../components";
import { useEffect } from "react";
import {
  useForm,
  useFieldArray,
  useWatch,
  useFormContext,
} from "react-hook-form";
import Swal from "sweetalert2";

const TeamPageDashboard = () => {
  const { setValue, control, register } = useForm({
    defaultValues: {
      data: [],
    },
  });
  const { setValue: setValueForm } = useFormContext();

  const data = useWatch({ name: "data", control });
  const { update, remove: removeData } = useFieldArray({ name: "data", control });

  const getData = async () => {
    await Axios.get("/admin/team")
      .then((res) => {
        console.log({ res });
        const { code, data: dataRes } = res.data;
        if (code === 200) {
          setValue("data", dataRes);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const addDataTeam = async (dataProps) => {
    setValueForm("loading", true);

    if (!dataProps?.id) {
      const formData = new FormData();
      formData.append("img", dataProps.img[0]);
      formData.append("name", dataProps.name);
      formData.append("jabatan", dataProps.jabatan);
      await Axios.post("/admin/team", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          console.log({ res });
          if (res.data) {
            const { code } = res.data;
            if (code === 200) {
              setValueForm("toast", true);
              setValueForm("toast_data", {
                title: "Success",
                type: "success",
                content: "Berhasil Nambah Team",
              });
            } else {
              setValueForm("toast", true);
              setValueForm("toast_data", {
                title: "Error",
                type: "danger",
                content: res.data.data,
              });
            }
          }
        })
        .catch((err) => {
          console.log({ err });
        })
        .finally(() => setValueForm("loading", false));
    } else {
      const formData = new FormData();
      formData.append("id", dataProps.id);
      formData.append("name", dataProps.name);
      formData.append("jabatan", dataProps.jabatan);
      formData.append("img", dataProps.img[0]);

      let result = await Axios.put(`/admin/team/${dataProps.id}`, formData, {
        headers: {
          "Content-Type": dataProps?.img[0]?.size
            ? "multipart/form-data"
            : "application/json",
        },
      });

      const { code } = result.data;

      if (code === 200) {
        setValueForm("loading", false);
        setValueForm("toast", true);
        setValueForm("toast_data", {
          type: "success",
          title: "Success",
          content: "Success update data !",
        });
      }
    }
  };

  const deleteTeam = async (item, index) => {
    console.log({ item, index })
    await Swal.fire({
      text: 'Do you want to Delete?',
      showDenyButton: true,
      confirmButtonText: 'Ok',
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        await Axios.delete(`/admin/team/${item.id}`)
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
              removeData(index)
              window.location.reload()
            }
          })
      }
    })
  }

  const btnAddRowListTeam = () => {
    const getLastIndex = data.length;
    update(getLastIndex, {
      name: "",
      jabatan: "",
      img: "",
    });
  };

  const btnDeleteTeam = deleteTeam;

  useEffect(() => {
    getData();
  }, []);


  console.log({ data })


  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  {data.map((item, idx) => (
                    <div key={idx} className="col-md-3">
                      <div className="row">
                        <div className="col-sm-12">
                          <img
                            width="100%"
                            height={200}
                            style={{ objectFit: "contain" }}
                            src={
                              item.img[0]?.size
                                ? URL.createObjectURL(item.img[0])
                                : item.img
                            }
                            alt="profile"
                          />
                        </div>
                        <div className="col-sm-12">
                          <label htmlFor="img">Select Image</label>
                          <input
                            type="file"
                            className="form-control"
                            id="img"
                            {...register(`data.${idx}.img`)}
                          />
                        </div>
                        <div className="col-sm-12">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            {...register(`data.${idx}.name`)}
                          />
                        </div>
                        <div className="col-sm-12">
                          <label htmlFor="jabatan">Jabatan</label>
                          <input
                            type="text"
                            className="form-control"
                            id="jabatan"
                            {...register(`data.${idx}.jabatan`)}
                          />
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-sm-12">
                          <button
                            className="btn btn-primary"
                            onClick={() => addDataTeam(item)}
                          >
                            Save
                          </button>
                          <button className="btn text-danger" onClick={() => btnDeleteTeam(item, idx)}>Delete</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex gap-2 flex-wrap">
                  <button
                    className="btn btn-danger"
                    onClick={btnAddRowListTeam}
                  >
                    Add New Team
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

export default TeamPageDashboard;
